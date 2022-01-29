import styled, { createGlobalStyle } from 'styled-components'



export const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100vh;
    width: 100vw;
    background-color: ${props => props.theme.body};
    padding: 0px;
    margin:0px;
    font-family: 'Luxurious Roman';
    }
`;

export const Container = styled.div`
    color:${props=> props.theme.color};
    background-color: white;
    display: flex;  
    
`;

export const Notas = styled.div`
    background-color: ${props=> props.theme.notas};
    color:${props=> props.theme.color};
    width: 50vw;
    height: 100vh;
    
    
`;

export const NotasSalvas = styled.div`
    width: 80%;
    height: 80%;
    margin: 10%;
    padding: 7px;
    
    color:${props=> props.theme.color};
    background-color: ${props => props.theme.notasSalvas};
    
    flex: 1;
    overflow-y: auto;    
    z-index: 1; 
       
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
flex: 1;
overflow-y: auto;    
z-index: 1;
text-align: left;
width: 100%;
height: 70px;
background-color:#f4f1de;
border-radius: 0px 0px 15px 0px;
p{
    height: auto;
    max-width: 100%;
    background-color: black;
}
`;

export const Main = styled.div`
    width: 50vw;
    height: 100vh;
    color:${props=> props.theme.color};    
    background-color: ${props=> props.theme.main};
    
`;

export const Title = styled.div`
    
    margin: auto;    
    width: auto;
    height: 6em;
    text-align: center;
    
    p{
        color:white;
        font-size: 4.5em;
        font-family: 'Luxurious Roman', cursive;
    }
`;

export const Textarea = styled.div`
    margin-left: 20%;
    margin-top: 100px;
    width: 70%;
    height: 40%;
    text-align: right;
    input{
        width: 100%;
        background-color: ${props=> props.theme.main};
        color:white;
        border-top:0px;
        border-left:0px;
        border-right:0px;        
        border-width:1px;
        border-color:${props=> props.theme.textarea};
        &::placeholder{
            color: ${props=> props.theme.placeholder};
        }        
    }
    textarea{
        margin-top: 5px;
        resize: none; 
        width:100%;
        height: 200px;
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
        height: 40px;
        font-size: 30px;
        
    }
    
`;

export const Login = styled.div`
    height:60px;
    background-color: ${props=> props.theme.submenu};
    margin:10px;
    width:90%;
    button{
        font-size: 0.5em;
        color:white;
        width: 100px;
        border-radius: 3px;        
        &:hover{
            background-color: ${props => props.theme.hoverbutton};
            color:${props=> props.theme.button}
            
    }}
    div.modal-content{ 
        background-color: ${props=> props.theme.main};        
        border-radius: 10px;
        color: white;
        height: 300px;       
        justify-content: center;
        align-items: center;       

        div.modal-header{
            width: 100%;
            color:white;
            p{  
                width: 100%;
                font-size: 1em;
                text-align:center;
            }
            button{
                width: 20px;
                height: 20px;
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
    margin:0px;
    height: 60px;
    display: flex;
    div{        
        width: 250px;        
        height: 60px;
        display: block;     
        text-align: left;   
    
        p{  
            width: 100px;
            font-size:15px;
            height: 20px;
            margin:4px;
            margin-left:40px;
        }
    };
    button{
        
        font-size:20px;
        height: 30px;
        margin: 15px 10px 15px 10px;
        width: 40px;
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
        height: 350px;
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
                        background-color: ${props=> props.theme.submenu};
                }                
                } 
                
            }
        }
    }   
`
