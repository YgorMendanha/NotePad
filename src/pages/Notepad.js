import {GlobalStyle, Container, Notas, NotasSalvas, MenuNotas, ContainerNotas, Main, Textarea,Title, Menu, SubMenu,StyledContainer} from "../styles"
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
  
 const initialState = JSON.parse(localStorage.getItem('Notas')) || []
   

  const [posts, setPosts] = useState(initialState)
  const [forvalues, setForvalues] = useState()
  const [edit , setEdit] = useState(false)
  const [idx ,setIdx ] = useState()

  //Menu
  const [aberto, setAberto] = useState()  

  useEffect(()=>{
    if(authenticated === true){            
      ( async ()=>{
        let IdUser = localStorage.getItem("IdUser")
        await posts.forEach((posts,index) =>{
        if(posts._id === undefined){
          api.post('/notas/sync', {  
            userid: IdUser,      
            titulo: posts.titulo,
            nota:posts.nota
          })
        }
      })      
      try {          
          const {data} = await api.get(`/notas/sync/${IdUser}`)                 
          setPosts(data)  
          localStorage.setItem('Notas',JSON.stringify(data))      
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
  async function salvar() {     
    let titulo = document.getElementById("titulo").value;
    let nota = document.getElementById("nota").value    
    if (titulo === "" ){
      toast.error('Digite um Titulo!');
    }
    if(titulo.length > 30){
      toast.error('Titulo Muito Grande!')
    } else {
        //Editar
        if (edit === true){  
          if(authenticated === true){
            let IdUser = localStorage.getItem("IdUser")
            let id = posts[idx].id
            let tempPosts = ({IdUser, id, titulo, nota})
            posts.splice(idx, 1, tempPosts)
            localStorage.setItem('Notas',JSON.stringify(posts))
            document.getElementById("titulo").value =""
            document.getElementById("nota").value =""
            document.getElementById("btn").innerText = "Salvar"          
            setEdit(!edit)
            try {
              await api.put('/notas/edit',{                
                id:id,
                titulo: titulo,
                nota:nota
              })
              toast.success("Nota Editada com Sucesso!")                                  
            } catch {
              toast.error("Houve um Erro ao Editar a Nota!")
            }
          }else{      
            let tempPosts = ({titulo, nota})          
            posts.splice(idx, 1, tempPosts)
            localStorage.setItem('Notas',JSON.stringify(posts))
            document.getElementById("titulo").value =""
            document.getElementById("nota").value =""
            document.getElementById("btn").innerText = "Salvar"          
            setEdit(!edit)
            toast.success("Nota Editada com Sucesso!") 
          }
          
        }else{
          //Salvar
          if( authenticated === true){
            let IdUser = localStorage.getItem("IdUser")
            try {                         
              const { data } = await api.post("/notas",{ 
                userid: IdUser,             
                titulo: titulo,
                nota:nota
              }) 
              let id = data.id              
              let tempPosts = ({IdUser, id, titulo, nota})              
              posts.push(tempPosts)
              localStorage.setItem('Notas',JSON.stringify(posts))                           
              setForvalues('')
              document.getElementById("titulo").value =""
              document.getElementById("nota").value =""
              document.getElementById("btn").innerText = "Salvar" 
              toast.success("Nota Salva com Sucesso!")
            } catch (error) {
              toast.error("Houve um Error ao Salvar a Nota!")
            }
          }else{
            let tempPosts = ({titulo, nota}) 
            posts.push(tempPosts)
            localStorage.setItem('Notas',JSON.stringify(posts))     
            setForvalues('')
            document.getElementById("titulo").value =""
            document.getElementById("nota").value =""
            document.getElementById("btn").innerText = "Salvar"
            toast.success("Nota Salva com Sucesso!")    
          }                
        }      
    }        
 };

 function editar(index){
  setEdit(!edit)
  document.getElementById("titulo").value = posts[index].titulo
  document.getElementById("nota").value = posts[index].nota  
  document.getElementById("btn").innerText = "Editar" 
  setIdx(index)  
}

async function apagar(index){
  if(authenticated === true)  {
    let tempNotes = [...posts]
    tempNotes.splice(index, 1)    
    let id = posts[index].id
    setPosts(tempNotes)
    localStorage.setItem('Notas',JSON.stringify(tempNotes))
    try {
      await api.delete('/notas/del',{
        id:id,    
      })
      toast.success("Nota Apagada com Sucesso!")                       
    } catch {
      toast.error("Houve um Error ao Apagar a Nota!")
  }  
  } else{
      let tempNotes = [...posts]
      tempNotes.splice(index, 1)
      localStorage.setItem('Notas',JSON.stringify(tempNotes))
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
              {aberto === true &&(            
                <SubMenu>
                    
                    <Modal/>                  
                  
                    <button>
                      <WiMoonAltWaningGibbous6 onClick={() =>themeToggler()}/>
                    </button>       
                
                </SubMenu>                  
              )}  
            <Menu>
              {aberto === true ? (
                <VscFoldUp onClick={()=> setAberto(!aberto)}/>
              ) :(
                <VscFoldDown onClick={()=> setAberto(!aberto)}/>
              )}
            </Menu>                     

            <Title>
              <p>Notepad</p>
            </Title>

            <Textarea>
              <form >
                <input type="text" name="name" id="titulo" placeholder="Titulo" onChange={handleInputChange}/>                
                <textarea type="text" name="nota" id="nota" onChange={handleInputChange}/>
                <button type="button" id="btn" onClick={salvar}> Salvar </button>
              </form>              
            </Textarea> 
             
          </Main>
          <Notas>
              
            <NotasSalvas>
            {posts.map((post, index) =>
              <div key={index}>
                <MenuNotas>
                  
                    <p>{post.titulo}</p>
                    <MenuNotes 
                      editar={()=> editar(index)}
                      apagar={()=> apagar(index)}
                    /> 
                
                </MenuNotas>
                
                <ContainerNotas>
                  {post.nota} 
                </ContainerNotas >
              </div>
            )}
            </NotasSalvas> 

          </Notas>
          <StyledContainer
          position="bottom-left"
          autoClose={5000}
          />                                   

      </Container>      
      </ThemeProvider>
    
  );
}

export default Notepad
