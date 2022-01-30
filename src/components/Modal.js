import {useState ,useContext} from 'react';
import { Context } from '../Context/AuthContext'
import { useNavigate } from "react-router-dom"

//Icons
import {Login, CardUser} from "../styles"
import { BiLogIn } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import api from '../services/api'





function Modal(){    
    let navigat = useNavigate()
    const { authenticated, handleLogin, handleLoout } = useContext(Context)
    
    const [forvalues, setForvalues] = useState()
    const [ usuario, setUsuario ] = useState([])

    async function inLogin(){
        
        const {data} = await api.post("/usuario/login",{
            email: forvalues.email,
            senha: forvalues.senha
        })
        try { 
            let token = data.token  
                   
            localStorage.setItem('token', JSON.stringify(token))

            //verificar funcionalidade
            //api.defaults.headers.Authorization = 'Bearer ' + token            
            handleLogin()
            setUsuario(data)
            document.getElementById("email").value =""
            document.getElementById("senha").value =""
            
            navigat("/")            

        } catch (error) {            
            console.log(error)
        }
    }

    function inLogout(){
        localStorage.removeItem('token')
        api.defaults.headers.Authorization = undefined
        handleLoout()
        navigat("/")
    }

    
    const handleInputChange = (e) =>{          
        const {name, value} = e.target;
        setForvalues({...forvalues, [name]:value})              
      }
    
      
    
    return(
        <Login>
            {authenticated === true ? (
                <CardUser>
                    <div>
                        <p> {usuario.nome}  </p>
                        <p> {usuario.email} </p>
                    </div>                    
                    <button type="button" data-bs-dismiss="modal" onClick={inLogout}>Sair</button>
                </CardUser>
            ) : (
                <button type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                     <BiLogIn/> Entrar
                </button> 
            ) }
                               
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">

                            <p className="modal-title" id="staticBackdropLabel">
                            Entar
                            </p>
                            <button type="button" data-bs-dismiss="modal" aria-label="Close"> <AiOutlineClose className="icon"/> </button>
                            
                        </div>
                        <div className="modal-body">                    
                                <form onChange={handleInputChange}>
                                    <div className="mb-3">                                        
                                       
                                        <input type="email" name="email" id="email" aria-describedby="emailHelp"  placeholder="Email"/>
                                        
                                    </div>
                                    <div className="mb-3">
                                        
                                        <input type="password" name="senha" id="senha" placeholder="Senha"/>
                                        
                                    </div> 
                                    <button type="button" data-bs-dismiss="modal">
                                        <a href="/createaccount">Criar Conta</a>
                                    </button>
                                    <div className="modal-footer">
                                        <button type="button" data-bs-dismiss="modal" onClick={inLogin}>Entrar</button>                                       
                                    </div>    
                                </form>                                        
                        </div>                        
                    </div>
                </div>
                </div>
        </Login>
    )
        
    
}
export default Modal