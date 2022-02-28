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
    width: 100vw;
    min-height: 100vh; 
    flex-direction: row;
    @media(max-width:500px){
        flex-direction: column;
    }
`;

export const Main = styled.div`
    color:${props=> props.theme.color};    
    background-color: ${props=> props.theme.main};
    width: 50%;
    height: auto;
    @media(max-width:500px){
        width: 100vw;
        min-height: 100vh;
    }
`;

export const SubMenu = styled.div`    
    background-color: ${props=> props.theme.submenu};
    font-size: 2.5em;    
    display: flex;    
    height: auto;
    text-align: center;      
       
    button{
        border:none;
        background-color:transparent;
        color: ${props=> props.theme.button};
        padding: 0px;
        width: 45px;
        height: auto;        
        @media(max-width:3000px){
        font-size: 3rem;
    }    
        @media(max-width:1500px){
            font-size: 2rem
    }    
        
    }
    
`;

export const Menu = styled.div`     
    background-color: ${props=> props.theme.main};
    text-align: right;
    color: ${props=> props.theme.button};
    @media(max-width:3000px){
        font-size: 3rem;
    }    
    @media(max-width:1500px){
        font-size: 1.8em; 
    }    
    svg{
        margin: 5px; 
    }
       
`;

export const Title = styled.div`
    
    margin: auto;
    margin-top:0px;
    width: 100%;
    height: auto;
    text-align: center;    
    p{
        color:white;
        margin-bottom:50px;
        font-family: 'Luxurious Roman', cursive;
        @media(max-width:3000px){
            font-size: 8rem;
        } 
        @media(max-width:1500px){
            font-size: 5rem;
        }
        @media(max-width:600px){
            font-size: 4rem;
        }
          
    }
`;

export const Textarea = styled.div`
    margin:auto;
    margin-bottom: 20px;
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
        outline:none;
        @media(max-width:3000px){
            font-size: 2.3rem;
            margin-bottom: 10px;
        }
        @media(max-width:1500px){
            font-size: 1.3rem;
        }
        &::placeholder{
            color: ${props=> props.theme.placeholder};
        }        
    }
    textarea{
        margin-top: 5px;
        resize: none; 
        width:100%;
        height: 50vh;
        outline:none;
        background-color:${props=> props.theme.textarea};
        color:${props=> props.theme.color};
        @media(max-width:3000px){
            font-size: 2rem;
        }
        @media(max-width:1500px){
            font-size: 1rem;
            height: 50vh;
        }
        
    };
    button{
        position: relative;
        bottom: 0px;
        color:white;
        background-color: transparent;
        border: none;
        @media(max-width:3000px){
            font-size: 2.3rem;
        }        
        @media(max-width:1500px){
            font-size: 1.3rem;
        }
        &:hover{
            background-color: ${props => props.theme.hoverbutton};
            color:${props=> props.theme.button};
            border-radius: 3px;
        } 
          
    }
    
`;

export const Notes = styled.div`
    background-color: ${props=> props.theme.notas};
    color:${props=> props.theme.color};
    height: auto;
    width: 50%;
    @media(max-width:500px){
        width: 100vw;
        min-height: 100vh;
    }   
`;

export const SavedNotes = styled.div`
    margin: 10%;
    padding: 7px;    
    width: 80%;
    height: 80vh;
    color:${props=> props.theme.color};
    background-color: ${props => props.theme.notasSalvas};    
    overflow-y: auto;    
    @media(max-width:3000px){
        font-size: 2.5rem;
    }
    @media(max-width:1500px){
        font-size: 1rem;
    }  
    @media(max-width:500px){
        font-size: 1rem;
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

export const NotesMenu = styled.header`
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
    color: white;
    @media(max-width:3000px){
        font-size: 2.5rem;
    }       
    @media(max-width:1500px){
        font-size: 1.3rem;
    }
    
    
}
button.button{
    margin: 5px;
    border: none;
    color: white;
    height: auto;
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
    width: auto;
    @media(max-width:3000px){       
        font-size: 2rem;
    }  
    @media(max-width:1500px){
        font-size: 1rem;
    }   
    button{
        color: white;
        &:hover{
            color: white;
            background-color: ${props => props.theme.hoverbutton}
            
        }       
    }
}
`;

export const ContainerNotes= styled.div`
resize: none; 
overflow-y: auto; 
text-align: left;
width: 100%;
min-height: 50px;
height: auto;
max-height:120px;
padding-left: 5px;
background-color:${props=> props.theme.textarea};
border-radius: 0px 0px 15px 0px;
@media(max-width:3000px){
        font-size: 2rem;
}    
@media(max-width:1500px){
    font-size: 1rem;
}   
::-webkit-scrollbar{
        width: 5px;
        border-radius: 50%;
        
    }
    ::-webkit-scrollbar-track{
        background-color: ${props => props.theme.notasSalvas};
       
    }
    ::-webkit-scrollbar-corner{
        background-color: ${props=> props.theme.notasSalvas}
    }
    ::-webkit-scrollbar-thumb{
        background-color: ${props=> props.theme.menunotas};
        width: 1px;
        border-radius: 50px;
    }
`;


export const Login = styled.div`
    height:auto;
    background-color: ${props=> props.theme.submenu}; 
    width:100%;
    display: flex;    
    align-items: center;
    justify-content: center;
    button{
        font-size: 0.5em;
        color:white;
        width: auto;
        border-radius: 3px; 
        margin:10px;
        height:auto;
        @media(max-width:3000px){
        font-size: 2.5rem;
        }    
        @media(max-width:1500px){
            font-size: 1.5rem;
        }
        &:hover{
            background-color: ${props => props.theme.hoverbutton};
            color:${props=> props.theme.button}
            
    }}
    div.modal-content{ 
        background-color: ${props=> props.theme.main};        
        border-radius: 10px;
        color: white;

        div.modal-header{
            width: 100%;
            color:white;
            text-align:center;
            p{  
                width: 100%;
                text-align:center;
               
                @media(max-width:1500px){
                    font-size: 3rem;
                }   
            }
            button{
                width: auto;
                margin-left: 0px;
                margin-right: 10px; 
                
                @media(max-width:1500px){
                    height: 20px;
                    font-size: 1.3rem;
                }              
            .icon{
                color:white;
                margin-bottom: 13px;
            }}
        }
        div.modal-body{
            width: 100%;
            form{
            text-align: left;           
            input{
                background-color: ${props=> props.theme.submenu};
                border: none;
                display:inline;
                width:100%;
                color:white;
                outline: none;
                
                @media(max-width:1500px){
                    font-size: 1.5rem;
                }   
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
                height: auto;
                text-align: left; 
                font-size: 18px;
                display: flex;
                @media(max-width:3000px){
                    font-size: 2rem;
                } 
                @media(max-width:1500px){
                font-size: 1.3rem;
            }   
            
            }
        
    }}
`

export const CardUser = styled.div`   
    color:white;
    background-color: ${props=> props.theme.main};
    margin:5px;
    height: auto;
    width: 100%;
    display:block;
    text-align: center;  
    div#user{        
        width: auto;        
        height: auto;
        display: block;        
        p{  
            width: 100%;
            font-size:15px;
            height: auto;
            margin:0px auto 5px auto;
            margin-left:40px;
            text-align:left;
            @media(max-width:3000px){
                    font-size: 2rem;
            } 
            @media(max-width:1500px){
                font-size: 1.3rem;
            }  
            @media(max-width:500px){
                font-size: 0.8rem;
            }  

        }
    };
    div#buttons{
        display:flex;
        height: 30px;
        text-align:center;
        margin-bottom:5px;
        button{            
            font-size:15px;
            height: auto;
            margin:0px auto 0px auto;
            width: auto;
            @media(max-width:3000px){
                    font-size: 1.5rem;
            }
            @media(max-width:1500px){
                font-size: 1rem;
            }  
            @media(max-width:500px){
                font-size: 0.8rem;
            }  
 
            a{
                text-decoration: none;                
                color:white;
            }
        }
    }

`

export const AccountCreate = styled.div`
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