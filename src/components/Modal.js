import {useState, useContext} from 'react';
import { Context } from '../Context/AuthContext'
import api from '../services/api'

import { toast } from 'react-toastify';

//Icons
import {Login, CardUser} from "../styles"
import { BiLogIn } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";






function Modal(){   
    

    const { authenticated, handleLogin, handleLoout } = useContext(Context)
    const initialState = JSON.parse(localStorage.getItem('User')) || []
    
    const [forvalues, setForvalues] = useState()
    const [ usuario, setUsuario ] = useState(initialState)

    async function inLogin(){
        
        const {data} = await api.post("/usuario/login",{
            email: forvalues.email,
            senha: forvalues.senha
        })
        try { 
            let token = data.token  
            let IdUser = data.id
            let usuario = {
                nome:data.nome,
                email:data.email
            }            
            localStorage.setItem('token', JSON.stringify(token))
            localStorage.setItem('IdUser', JSON.stringify(IdUser))
            localStorage.setItem('User', JSON.stringify(usuario))            
            setUsuario(usuario)
            document.getElementById("email").value = null
            document.getElementById("senha").value = null
            setForvalues()
            handleLogin() 
            toast.success(`Bem vindo, ${usuario.nome}!`)                               

        } catch  {            
            toast.error("Email ou Senha incorreto!")
        }
    }

    function inLogout(){
        localStorage.removeItem('token')
        localStorage.removeItem('IdUser')
        toast.info(`Ate mais tarde, ${usuario.nome}!`)      
        localStorage.removeItem('User')
        api.defaults.headers.Authorization = undefined
        handleLoout()  
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