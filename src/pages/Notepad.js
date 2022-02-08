import {GlobalStyle, Container, Notes, SavedNotes, NotesMenu, ContainerNotes, Main, Textarea,Title, Menu, SubMenu,StyledContainer} from "../styles"
import {ThemeProvider} from "styled-components"
import {useEffect, useState, useContext} from "react"
import Modal from "../components/Modal"
import MenuNotes from "../components/MenuNotes"
import { Context } from '../Context/AuthContext'
import { ligthTheme, darkTheme } from "../theme"
import api from "../services/api"


//Toasts
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//icons
import { WiMoonAltWaningGibbous6 } from "react-icons/wi";
import { VscFoldDown, VscFoldUp } from "react-icons/vsc";

function Notepad() {  

  const { authenticated } = useContext(Context)
  
 const initialState = JSON.parse(localStorage.getItem('Notes')) || []
   

  const [posts, setPosts] = useState(initialState)
  const [forvalues, setForvalues] = useState()
  const [toedit , setToEdit] = useState(false)
  const [idx ,setIdx ] = useState()

  //Menu
  const [open, setOpen] = useState()  

  //Sync
  useEffect(()=>{
    if(authenticated === true){            
      ( async ()=>{
        try {          
        let IdUser = localStorage.getItem("IdUser")
        await posts.forEach((posts) => {
        if(posts._id === undefined){          
          api.post('/notes/sync', {  
            userid: IdUser,      
            title: posts.title,
            note:posts.note
          })
        }
      })      
          const {data} = await api.get(`/notes/sync/${IdUser}`)                 
          setPosts(data)  
          localStorage.setItem('Notes',JSON.stringify(data))      
          if(data.length > 0){
            toast.success("Sincronizado com Sucesso!")
          }                                
        } catch{
          toast.error("Houve um error ao Sincronizar as Notas!")
        }
    })()
    }    
  },[authenticated])
  
  
  const handleInputChange = (e) =>{    
    const {name, value} = e.target;
    setForvalues({...forvalues, [name]:value})
       
  }  
  
  //Funçoes das notas
  async function Save() {     
    let title = document.getElementById("title").value;
    let note = document.getElementById("note").value    
    if (title === "" || title === undefined){
      return toast.error('Digite um Titulo!');
    }
    if(title.length > 30){
      return  toast.error('Titulo Muito Grande!')
    } else {
        //Editar
        if (toedit === true){  
          if(authenticated === true){
            try {
              let _id = posts[idx]._id              
              let {data} = await api.put('/notes/edit',{                
                id:_id,
                title: title,
                note:note
              })
              let userid = localStorage.getItem("IdUser")
              let tempPosts = ({_id, userid, title, note})
              posts.splice(idx, 1, tempPosts)
              localStorage.setItem('Notes',JSON.stringify(posts))
              document.getElementById("title").value =""
              document.getElementById("note").value =""
              document.getElementById("btn").innerText = "Salvar"          
              setToEdit(!toedit)              
              toast.success(data.message)                                  
            } catch {
              toast.error("Houve um Erro ao Editar a Nota!")
            }
          }else{      
            let tempPosts = ({title, note})          
            posts.splice(idx, 1, tempPosts)
            localStorage.setItem('Notes',JSON.stringify(posts))
            document.getElementById("title").value =""
            document.getElementById("note").value =""
            document.getElementById("btn").innerText = "Salvar"          
            setToEdit(!toedit)
            toast.success("Nota Editada com Sucesso!") 
          }
          
        }else{
          //Salvar
          if( authenticated === true){
            let userid = localStorage.getItem("IdUser")
            try {                         
              const { data } = await api.post("/notes",{ 
                userid: userid,             
                title: title,
                note:note
              }) 
              let _id = data._id             
              let tempPosts = ({userid, _id, title, note})              
              posts.push(tempPosts)
              localStorage.setItem('Notes',JSON.stringify(posts))                           
              setForvalues('')
              document.getElementById("title").value =""
              document.getElementById("note").value =""
              document.getElementById("btn").innerText = "Salvar" 
              toast.success(data.message)
            } catch{
              toast.error("Houve um Error ao Salvar a Nota!")
            }
          }else{
            let tempPosts = ({title, note}) 
            posts.push(tempPosts)
            localStorage.setItem('Notes',JSON.stringify(posts))     
            setForvalues('')
            document.getElementById("title").value =""
            document.getElementById("note").value =""
            document.getElementById("btn").innerText = "Salvar"
            toast.success("Nota Salva com Sucesso!")    
          }                
        }      
    }        
 };

 function Edit(index){
  setToEdit(!toedit)
  document.getElementById("title").value = posts[index].title
  document.getElementById("note").value = posts[index].note  
  document.getElementById("btn").innerText = "Editar" 
  setIdx(index)  
}

async function Remove(index){
  if(authenticated === true)  {
    try {
      let _id = posts[index]._id
      let {data} = await api.delete(`/notes/del/${_id}`)
      let tempNotes = [...posts]
      tempNotes.splice(index, 1)    
      setPosts(tempNotes)
      localStorage.setItem('Notes',JSON.stringify(tempNotes))
      toast.success(data.message)                       
    } catch {
      toast.error("Houve um Error ao Apagar a Nota!")
  }  
  } else{
      let tempNotes = [...posts]
      tempNotes.splice(index, 1)
      localStorage.setItem('Notes',JSON.stringify(tempNotes))
      setPosts(tempNotes)
      toast.success("Nota Apagada com Sucesso!")
    }
  
}


  //Tema
  const [theme, setTheme] = useState("light")
  const themeToggler = () => {
    theme === "light" ? setTheme('dark') : setTheme('light')
  }   
 
  
  return (    
    
      <ThemeProvider theme={theme === "light" ? ligthTheme : darkTheme}>
      <GlobalStyle />
      <Container >         
          
          <Main> 
              {open === true &&(            
                <SubMenu>
                    
                    <Modal/>                  
                  
                    <button>
                      <WiMoonAltWaningGibbous6 onClick={() =>themeToggler()}/>
                    </button>       
                
                </SubMenu>                  
              )}  
            <Menu>
              {open === true ? (
                <VscFoldUp onClick={()=> setOpen(!open)}/>
              ) :(
                <VscFoldDown onClick={()=> setOpen(!open)}/>
              )}
            </Menu>                     

            <Title>
              <p>Notepad</p>
            </Title>

            <Textarea>
              <form >
                <input type="text" name="title" id="title" placeholder="Titulo" onChange={handleInputChange}/>                
                <textarea type="text" name="note" id="note"  onChange={handleInputChange}/>
                <button type="button" id="btn" onClick={Save}> Salvar </button>
              </form>              
            </Textarea> 
             
          </Main>
          <Notes>
              
            <SavedNotes>
            {posts.map((post, index) =>
              <div key={index}>
                <NotesMenu>                  
                    <p>{post.title}</p>
                    <MenuNotes 
                      edit={()=> Edit(index)}
                      remove={()=> Remove(index)}
                    /> 
                
                </NotesMenu>
                
                <ContainerNotes>
                  {post.note} 
                </ContainerNotes >
              </div>
            )}
            </SavedNotes> 

          </Notes>
          <StyledContainer
          position="bottom-right"
          autoClose={5000}
          />                                   

      </Container>      
      </ThemeProvider>
    
  );
}

export default Notepad
