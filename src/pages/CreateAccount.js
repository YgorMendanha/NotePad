import {AccountCreate, StyledContainer } from "../styles"
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

    async function Create(){
        try {
            let name = forvalues.name[0].toUpperCase() + forvalues.name.substr(1)
            let {data} = await api.post("/user",{
                name:name,
                email:forvalues.email,
                password:forvalues.password,
                confirmpassword:forvalues.confirmpassword
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
            console.log(e)
            toast.warn("Houve um erro ao Criar sua conta!")
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
            
            <AccountCreate>
                               
                <div className="CriarConta">   
                    <div className="theme">                        
                        <button> 
                            <WiMoonAltWaningGibbous6 onClick={() =>themeToggler()}/> 
                        </button>
                    </div>
                    <h1>Criar Conta</h1>
                    <form onChange={handleInputChange}>
                        <input type="text" name="name" placeholder="Nome"  />                        
                        <input type="email" name="email" placeholder="Email"  />
                        <input type="password" name="password" placeholder="Senha"  />
                        <input type="password" name="confirmpassword" placeholder="Confirmar Senha"  />
                        <div className="button">
                            <button type="button"><a href="/">Voltar</a></button>
                            <button type="button" onClick={Create}>Criar</button>
                        </div>
                    </form>
                    
                </div>
                <StyledContainer
                position="bottom-left"
                autoClose={5000}
                />
            </AccountCreate>
        </ThemeProvider>
        
    )
}
export default CreateAccount;