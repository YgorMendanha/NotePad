import {CriarConta } from "../styles"
import {ThemeProvider} from "styled-components"
import React,{useState} from "react"
import { ligthTheme, darkTheme } from "../theme"
import { WiMoonAltWaningGibbous6 } from "react-icons/wi";
import api from "../services/api"
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';



function CreateAccount(){   

    const [forvalues, setForvalues] = useState()
    
    const navigate = useNavigate();

    function Criar(){
        
        if(forvalues.nome === undefined || forvalues.nome === "" ){
            toast.warn("Digite seu Nome!")
        }
        
        if(forvalues.senha !== forvalues.ConfirmarSenha ){
            alert("As Senha são Diferentes")
        } else{            
            api.post("/usuario",{
                nome:forvalues.nome,
                email:forvalues.email,
                senha:forvalues.senha
            }).then(
                toast.success("Conta Criada com Sucesso!"),
                navigate("/")
            ).catch(
                toast.error("Houve um Error ao Criar sua Conta!")
            )
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
            </CriarConta>
        </ThemeProvider>
        
    )
}
export default CreateAccount;