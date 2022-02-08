import styled, { createGlobalStyle } from 'styled-components'
import { ToastContainer} from 'react-toastify';



export const GlobalStyle = createGlobalStyle`
  html, body {
    height: auto;
    width: 100vw;    
    padding: 0px;
    margin:0px;
    font-family: 'Luxurious Roman';
    }
     
    ::-webkit-scrollbar{
        width: 5px;
        border-radius: 50%;
        height: 5px;
    }
    ::-webkit-scrollbar-track{
        background-color: ${props=> props.theme.notas};
    }
    ::-webkit-scrollbar-thumb{
        background-color:  ${props=> props.theme.main};
        width: 1px;
        border-radius: 50px;
    }  
    ::-webkit-scrollbar-corner{
        background-color: ${props=> props.theme.main}
    }
    
`;

export const Container = styled.div`
    color:${props=> props.theme.color};
    background-color: white;
    display: flex;
    min-width: 500px;
    min-height: 100vh;
    
    
    
`;

export const Notas = styled.div`
    background-color: ${props=> props.theme.notas};
    color:${props=> props.theme.color};
    width: 50%;
    min-height: 100vh;
    
    
`;

export const NotasSalvas = styled.div`
    width: 80%;
    min-height: 80%;
    height: 100px;
    margin: 10%;
    padding: 7px;
    
    color:${props=> props.theme.color};
    background-color: ${props => props.theme.notasSalvas};    
    overflow-y: auto;    
    ::-webkit-scrollbar{
        width: 5px;
        border-radius: 50%;
        
    }
    ::-webkit-scrollbar-track{
        background-color: ${props => props.theme.notasSalvas};
    }
    ::-webkit-scrollbar-thumb{
        background-color: ${props=> props.theme.menunotas};
        width: 1px;
        border-radius: 50px;
    }
            
    div{
        
        h6{
            font-size:1.3em;
        }
        
    }

`;

export const MenuNotas = styled.header`
border-radius: 15px 0px 0px 0px;
margin-top: 6px;
display: flex;
background-color: ${props => props.theme.menunotas};
overflow-x: auto; 
::-webkit-scrollbar{        
        height: 8px;
        border-radius: 50%;
    }
    ::-webkit-scrollbar-track{
        background-color: ${props=> props.theme.textarea};
    }
    ::-webkit-scrollbar-thumb{
        background-color: ${props => props.theme.notasSalvas};        
        border-radius: 50px;
    };
p{
    text-align:left;
    width: 100%;
    display: inline-block;
    margin: 5px;
    font-size: 1.2em;
    color: white;
    
    
}
button.button{
    margin: 5px;
    border: none;
    color: white;
    max-height: 30px;
    background-color: ${props => props.theme.menunotas};
    &:hover{
        
        border-radius: 50%;
        background-color: ${props => props.theme.hoverbutton};
        color: ${props => props.theme.button};
    }
    
    svg{
        margin-bottom: 2px
    }    
}
ul{
    background-color: ${props => props.theme.menunotas};
    min-width: 30px;
    button{
        color: white;
        &:hover{
            color: white;
            background-color: ${props => props.theme.hoverbutton}
            
        }       
    }
}
`;

export const ContainerNotas= styled.div`
resize: none; 
overflow-y: auto; 
text-align: left;
width: 100%;
height: 70px;
background-color:${props=> props.theme.textarea};
border-radius: 0px 0px 15px 0px;
p{
    height: auto;
    max-width: 100%;
    background-color: black;
}
::-webkit-scrollbar{
        width: 5px;
        border-radius: 50%;
        
    }
    ::-webkit-scrollbar-track{
        background-color: ${props => props.theme.notasSalvas};
    }
    ::-webkit-scrollbar-thumb{
        background-color: ${props=> props.theme.menunotas};
        width: 1px;
        border-radius: 50px;
    }
`;

export const Main = styled.div`
    width: 50%;
    min-height: 100vh;
    color:${props=> props.theme.color};    
    background-color: ${props=> props.theme.main};
    text-align:center;
    
`;

export const Title = styled.div`
    
    margin: auto;
    margin-bottom:100px;
    margin-top:0px;
    width: 100%;
    height: 6em;
    text-align: center;
    
    p{
        color:white;
        font-size: 4em;
        font-family: 'Luxurious Roman', cursive;
    }
`;

export const Textarea = styled.div`
    margin:auto;
    margin-bottom: 10px;
    width: 70%;
    height: auto;
    text-align: right;
    input{
        width: 100%;
        background-color: ${props=> props.theme.main};
        color:white;
        border-top:0px;
        border-left:0px;
        border-right:0px;        
        border-width:1px;
        border-color:c;
        &::placeholder{
            color: ${props=> props.theme.placeholder};
        }        
    }
    textarea{
        margin-top: 5px;
        resize: none; 
        width:100%;
        height: 300px;
        background-color:${props=> props.theme.textarea};
        color:${props=> props.theme.color}
        
    };
    button{
        position: relative;
        bottom: 0px;
        color:white;
        background-color: transparent;
        border: none;
        &:hover{
            background-color: ${props => props.theme.hoverbutton};
            color:${props=> props.theme.button};
            border-radius: 3px;
        } 
          
    }
    
`;

export const Menu = styled.div`     
    background-color: ${props=> props.theme.main};
    font-size: 1.8em;    
    text-align: right;
    color: ${props=> props.theme.button};
    svg{
        margin: 5px; 
    }
       
`;

export const SubMenu = styled.div`    
    background-color: ${props=> props.theme.submenu};
    font-size: 2.5em;    
    display: flex;    
    height: 90px;
    text-align: center;
       
    button{
        border:none;
        background-color:transparent;
        color: ${props=> props.theme.button};
        padding: 0px;
        width: 45px;
        height: 90px;
        font-size: 30px;
        
    }
    
`;

export const Login = styled.div`
    height:90px;
    background-color: ${props=> props.theme.submenu};    
    width:100%;
    button{
        font-size: 0.5em;
        color:white;
        width: 100px;
        border-radius: 3px; 
        margin:30px;
        margin-left:65px;
        height:40%;
        &:hover{
            background-color: ${props => props.theme.hoverbutton};
            color:${props=> props.theme.button}
            
    }}
    div.modal-content{ 
        background-color: ${props=> props.theme.main};        
        border-radius: 10px;
        color: white;
        height: 350px;       
        justify-content: center;
        align-items: center;       

        div.modal-header{
            width: 100%;
            color:white;
            text-align:center;
            p{  
                width: 100%;
                font-size: 1.2em;
                text-align:center;
            }
            button{
                width: 20px;
                height: 20px;
                margin-left: 0px;
                margin-right: 10px;            
            .icon{
                color:white;
                margin-bottom: 13px;
            }}
        }
        div.modal-body{
            width: 100%;
            form{
            text-align: left;
            font-size: 0.5em;
            p{
                text-align:center;
                font-size:1em;
            }
            
            input{
                background-color: ${props=> props.theme.submenu};
                border: none;
                display:inline;
                width:100%;
                color:white;
                &::placeholder{
                color: ${props=> props.theme.placeholder};
            }         
            }
            }        
            button{
                
                a{                    
                    text-decoration: none;
                    color:${props=> props.theme.login};
                    color:white;                    
                }            
                margin: 5px;
                padding:3px;
                width:auto;
                height: 30px;
                text-align: left; 
                font-size: 18px;
                display: flex;
            
            }
        
    }}
`

export const CardUser = styled.div`   
    color:white;
    background-color: ${props=> props.theme.main};
    margin:5px;
    height: 80px;
    width: auto;
    display:block;
    text-align: center;  
    div#user{        
        width: auto;        
        height: auto;
        display: block;        
        p{  
            width: 100%;
            font-size:15px;
            height: 20px;
            margin:0px auto 0px auto;
            margin-left:40px;
            text-align:left;
        }
    };
    div#buttons{
        display:flex;
        height: 30px;
        text-align:center;
        button{            
            font-size:15px;
            height: auto;
            margin:0px auto 0px auto;
            width: auto;
            a{
                text-decoration: none;                
                color:white;
            }
        }
    }

`

export const CriarConta = styled.div`
    background-color:${props=> props.theme.notas};
    width: 100vw;
    height: 100vh;    
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-family: 'Luxurious Roman';
    div.theme{        
        text-align: right;
        button{
            border:none;
            background-color:transparent;
            color: ${props=> props.theme.button};            
        }        
    }
    div.CriarConta{
        background-color: ${props=> props.theme.main};
        border:2px solid ${props=> props.theme.submenu};
        border-radius: 10px;
        color:white;
        width: 400px;
        height: auto;
        h1{
            text-align: center;
            font-size: 3em;
        }
        form{            
            display:block;
            width: 95%;
            margin:3px;
            input{
                width: 100%;
                height: 40px;
                margin:3px;
                background-color: ${props=> props.theme.submenu};
                border: none;
                color:white;                
                &::placeholder{
                    color: ${props=> props.theme.placeholder};
                }                   
            }
            div.button{                
                text-align: right;
                margin:5px;
                button{
                    a{
                        text-decoration: none;
                        color: ${props=> props.theme.button}
                    }
                    border:none;
                    background-color:transparent;
                    color: ${props=> props.theme.button};
                    &:hover{
                        border-radius: 10px;
                        background-color:${props => props.theme.hoverbutton};
                }                
                } 
                
            }
        }
    }   
`
export const AtualizarConta = styled.div`
    background-color:${props=> props.theme.notas};
    width: 100vw;
    height: 100vh;    
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-family: 'Luxurious Roman';
    div.theme{        
        text-align: right;
        button{
            border:none;
            background-color:transparent;
            color: ${props=> props.theme.button};            
        }        
    }
    div.CriarConta{
        background-color: ${props=> props.theme.main};
        border:2px solid ${props=> props.theme.submenu};
        border-radius: 10px;
        color:white;
        width: 400px;
        height: 370px;
        h1{
            text-align: center;
            font-size: 3em;
        }
        form{            
            display:block;
            width: 95%;
            margin:3px;
            input{
                width: 100%;
                height: 40px;
                margin:3px;
                background-color: ${props=> props.theme.submenu};
                border: none;
                color:white;                
                &::placeholder{
                    color: ${props=> props.theme.placeholder};
                }                   
            }
            div.button{                
                text-align: right;
                margin:5px;
                button{
                    a{
                        text-decoration: none;
                        color: ${props=> props.theme.button}
                    }
                    border:none;
                    background-color:transparent;
                    color: ${props=> props.theme.button};
                    &:hover{
                        border-radius: 10px;
                        background-color: ${props => props.theme.hoverbutton};
                }                
                } 
                
            }
        }
    }   
`
export const StyledContainer = styled ( ToastContainer ) `   
  &&&.Toastify__toast-container {
    
    button{
        color:white
    }
}
.Toastify__toast {
      background-color: ${props => props.theme.main}
  }
  .Toastify__toast-body {
      color: white;
  }  
`;