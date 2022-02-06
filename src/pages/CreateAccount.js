import {CriarConta, StyledContainer } from "../styles"
import {ThemeProvider} from "styled-components"
import React,{useState} from "react"
import { ligthTheme, darkTheme } from "../theme"
import { WiMoonAltWaningGibbous6 } from "react-icons/wi";
import api from "../services/api"
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';



function CreateAccount(){   

    const [forvalues, setForvalues] = useState({
        nome:"",
        email:"",
        senha:""
    })
    
    const navigate = useNavigate();

    async function Criar(){
        try {
            let nome = forvalues.nome[0].toUpperCase() + forvalues.nome.substr(1)
            console.log(nome)
            let {data} = await api.post("/usuario",{
                nome:nome,
                email:forvalues.email,
                senha:forvalues.senha,
                confirmarsenha:forvalues.ConfirmarSenha
            })
            if(data.length > 0){
                data.map((erros) => {                    
                    return toast.error(erros.error); 
                })
            }else{
                toast.success(data.message)                
                setTimeout(() => {                    
                    navigate("/");
                }, 2000)              
            }
        }catch(e){
            toast.warn("Houve um erros ao Criar sua conta!")
        }
                    
}

    const handleInputChange = (e) =>{    
        const {name, value} = e.target;
        setForvalues({...forvalues, [name]:value})           
      }     



     //Tema
    const [theme, setTheme] = useState("light")
    const themeToggler = () => {
        theme === "light" ? setTheme('dark') : setTheme('light')
    } 
    
    return(         
        <ThemeProvider theme={theme === "light" ? ligthTheme : darkTheme}>
            
            <CriarConta>
                               
                <div className="CriarConta">   
                    <div className="theme">                        
                        <button> 
                            <WiMoonAltWaningGibbous6 onClick={() =>themeToggler()}/> 
                        </button>
                    </div>
                    <h1>Criar Conta</h1>
                    <form onChange={handleInputChange}>
                        <input type="text" name="nome" placeholder="Nome"  />                        
                        <input type="email" name="email" placeholder="Email"  />
                        <input type="password" name="senha" placeholder="Senha"  />
                        <input type="password" name="ConfirmarSenha" placeholder="Confirmar Senha"  />
                        <div className="button">
                            <button type="button"><a href="/">Voltar</a></button>
                            <button type="button" onClick={Criar}>Criar</button>
                        </div>
                    </form>
                    
                </div>
                <StyledContainer
                position="bottom-left"
                autoClose={5000}
                />
            </CriarConta>
        </ThemeProvider>
        
    )
}
export default CreateAccount;