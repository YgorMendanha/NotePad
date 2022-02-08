import {AccountCreate, StyledContainer } from "../styles"
import {ThemeProvider} from "styled-components"
import {useState} from "react"
import { ligthTheme, darkTheme } from "../theme"
import { WiMoonAltWaningGibbous6 } from "react-icons/wi";
import api from "../services/api"
import { useNavigate, useParams } from "react-router-dom";
import { toast } from 'react-toastify';



function Restorepassword(){   

    const [forvalues, setForvalues] = useState()
    
    const navigate = useNavigate();    
    let params = useParams();
    
    async function Restore(){
        try {
            
            let {data} = await api.put(`/user/restorepassword/${params.IdUser}`, {
                newpassword:forvalues.newpassword,
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
            toast.warn("Houve um erros ao Redefinir sua Senha!")
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
                    <h1>Redefinir Senha</h1>
                    <form onChange={handleInputChange}>                        
                        <input type="password" name="newpassword" placeholder="Nova Senha"  />
                        <input type="password" name="confirmpassword" placeholder="Confirmar Nova Senha"  />
                        <div className="button">                          
                            <button type="button" onClick={Restore}>Atualizar</button>
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
export default Restorepassword;