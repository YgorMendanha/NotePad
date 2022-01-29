import {GlobalStyle, Container, Notas, NotasSalvas, MenuNotas, ContainerNotas, Main, Textarea,Title, Menu, SubMenu} from "../styles"
import {ThemeProvider} from "styled-components"
import {useState} from "react"
import Modal from "../components/Modal"
import MenuNotes from "../components/MenuNotes"
import { ligthTheme, darkTheme } from "../theme"

//icons

import { WiMoonAltWaningGibbous6 } from "react-icons/wi";
import { VscFoldDown, VscFoldUp } from "react-icons/vsc";

function Notepad() {  
 

  const [posts, setPosts] = useState ([])
  const [forvalues, setForvalues] = useState()
  const [edit , setEdit] = useState(false)
  const [idx ,setIdx ] = useState()
  
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
  function salvar() {     
    let titulo = document.getElementById("titulo").value;
    let nota = document.getElementById("nota").value;  
    if (titulo === "" ){
      alert("Digite o Titulo da Nota")
    } else {
        if (edit === true){          
          let tempPosts = ({titulo, nota, horaNow, dataNow})          
          posts.splice(idx, 1, tempPosts)
          setPosts(posts)
          document.getElementById("titulo").value =""
          document.getElementById("nota").value =""
          document.getElementById("btn").innerText = "Salvar"          
          setEdit(!edit)
          
        }else{
          let tempPosts = ({titulo, nota, horaNow, dataNow})      
          posts.push(tempPosts)
          setForvalues('')
          document.getElementById("titulo").value =""
          document.getElementById("nota").value =""
          document.getElementById("btn").innerText = "Salvar"          
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

 function apagar(index){   
  let tempNotes = [...posts]
  tempNotes.splice(index, 1)
  setPosts(tempNotes)  
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
          
                                   

      </Container>      
      </ThemeProvider>
    
  );
}

export default Notepad
