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
          try{
            toast.success("Notas Publicadas na sua Conta com Sucesso!")
          }
          catch{
            toast.error("Houve um error ao Publicar as Notas!")
          } 
        }
      })   
      const {data} = await api.get(`/notas/sync/${IdUser}`)                 
        try {          
          setPosts(data)  
          localStorage.setItem('Notas',JSON.stringify(data))      
          toast.success("Sincronizado com Sucesso!")                                
        } catch{
          toast.error("Houve um error ao Sincronizar as Notas!")
        }
    })()
    }    
  },[authenticated])
  
  
  //Data e hora
  var data = new Date();
  var dia = String(data.getDate()).padStart(2, '0');
  var mes = String(data.getMonth() + 1).padStart(2, '0');
  var ano = data.getFullYear()  
  var hora = String(data.getHours()).padStart(2, '0');
  var minutos = String(data.getMinutes()).padStart(2, '0');
  var segundos = String(data.getSeconds()).padStart(2, '0');
  var dataNow = dia + '/' + mes + '/' + ano; 
  var horaNow = hora + ':' + minutos + ':' + segundos;
  

  
  

  const handleInputChange = (e) =>{    
    const {name, value} = e.target;
    setForvalues({...forvalues, [name]:value})
       
  }  
  
  //Funçoes das notas
  async function salvar() {     
    let titulo = document.getElementById("titulo").value;
    let nota = document.getElementById("nota").value;  
    if (titulo === "" ){
      toast.error('Digite um Titulo!');
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
            await api.put('/notas/edit',{                
              id:id,
              titulo: titulo,
              nota:nota
            })
            try {
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
            const { data } = await api.post("/notas",{ 
              userid: IdUser,             
              titulo: titulo,
              nota:nota
            }) 
            let id = data.id              
            try {                         
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
  let jasonTitulo = JSON.stringify(posts[index].titulo)
  let jasonNota = JSON.stringify(posts[index].nota)

  document.getElementById("titulo").value = jasonTitulo.substring(1, jasonTitulo.length - 1)
  document.getElementById("nota").value = jasonNota.substring(1, jasonNota.length - 1)
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
    await api.delete('/notas/del',{
      id:id,    
    })
    try {
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

  //Menu
  const [aberto, setAberto] = useState("false")  
  
 
  return (    
    
      <ThemeProvider theme={theme === "light" ? ligthTheme : darkTheme}>
      <GlobalStyle />
      <Container>
          
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
          <StyledContainer
          position="bottom-left"
          autoClose={5000}
          />                                   

      </Container>      
      </ThemeProvider>
    
  );
}

export default Notepad
