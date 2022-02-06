import {useState, useContext} from 'react';
import { Context } from '../Context/AuthContext'
import api from '../services/api'

import { toast } from 'react-toastify';

//Icons
import {Login, CardUser} from "../styles"
import { BiLogIn } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";






function Modal(){   
    
    const initialState = JSON.parse(localStorage.getItem('User')) || []

    const { authenticated, handleLogin, handleLoout } = useContext(Context)

    const [forvalues, setForvalues] = useState()
    const [ usuario, setUsuario ] = useState(initialState)
    const [recoveryPassword, setRecoveryPassword] = useState()
    

    async function inLogin(){        
        try { 
            const {data} = await api.post("/usuario/login",{
                email: forvalues.email,
                senha: forvalues.senha
            })            
            if(data.token !== undefined ){
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
                toast.success(`Bem vindo, ${usuario.nome}!`)                        
                setForvalues()
                handleLogin()                        
            }else{                
                toast.error(data)
            }
        } catch{
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

    async function UpdatePassword(){
        try {
            let IdUser = localStorage.getItem("IdUser")
            const {data} = await api.put(`/usuario/update/${IdUser}`,{               
                senha:forvalues.senhaAtual,
                novasenha:forvalues.novasenha,
                confirmarsenha:forvalues.confirmarsenha
            }) 
            setForvalues()
            document.getElementById("senhaAtual").value = null
            document.getElementById("novasenha").value = null 
            document.getElementById("confirmarsenha").value = null
            if(data.length > 0){
                data.map((erros) => {                    
                    return toast.error(erros.error); 
                })
            }                        
            
            toast.success(data.message)           
        } catch(e){            
            setForvalues()
            document.getElementById("senhaAtual").value = null
            document.getElementById("novasenha").value = null 
            document.getElementById("confirmarsenha").value = null
            toast.error("Houve um Erro ao Atualizar sua Senha!")
        }
    }

    async function EnviarEmail(){
        try {
            const {data} = await api.post("/usuario/restorepassword",{
                email: forvalues.email                
            })
            document.getElementById("email").value = null
            setForvalues()
            console.log(data)
            toast.success(data.message)
        } catch(e){   
            console.log(e)         
            toast.error("Houve um Erro ao Enviar seu E-mail!")
        }

    }
    
    const handleInputChange = (e) =>{          
        const {name, value} = e.target;
        setForvalues({...forvalues, [name]:value})  
    }             
    
      

    return(
        <Login>
            {authenticated === true ? (
                <CardUser>
                    <div id="user">
                        <p> {usuario.nome}  </p>
                        <p> {usuario.email} </p>
                    </div>
                    <div id="buttons">
                        <button type="button" data-bs-toggle="modal" data-bs-target="#Password">
                            Trocar Senha
                         </button>
                        <button type="button" data-bs-dismiss="modal" onClick={inLogout}>Sair</button>
                    </div>
                    
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
                            Recuperar Senha!
                            </p>
                            <button type="button" data-bs-dismiss="modal" aria-label="Close"> <AiOutlineClose className="icon"/> </button>
                            
                        </div>
                        <div className="modal-body">
                                    {recoveryPassword === true ? (
                                        <form onChange={handleInputChange}>
                                            <p>Vamos enviar um E-mail com o link para recuperar sua Senha</p>
                                            <div className="mb-3">                                        
                                            
                                                <input type="email" name="email" id="email" aria-describedby="emailHelp"  placeholder="Email"/>
                                                
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" onClick={()=> setRecoveryPassword(!recoveryPassword)}>
                                                Voltar                               
                                                </button>                              
                                                <button type="button" data-bs-dismiss="modal" onClick={EnviarEmail}>Enviar</button>                                       
                                            </div>  
                                        </form>    
                                    ):(
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
                                        <button type="button" onClick={()=> setRecoveryPassword(!recoveryPassword)}>
                                            Esqueceu sua Senha?                                 
                                        </button>                                     
                                        <div className="modal-footer">
                                            <button type="button" data-bs-dismiss="modal" onClick={inLogin}>Entrar</button>                                       
                                        </div> 
                                    </form>  
                                    ) }
                                                                      
                        </div>                        
                    </div>
                </div>
                </div>

                

                <div className="modal fade" id="Password" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">

                            <p className="modal-title" id="staticBackdropLabel">
                            Trocar Senha!
                            </p>
                            <button type="button" data-bs-dismiss="modal" aria-label="Close"> <AiOutlineClose className="icon"/> </button>
                            
                        </div>
                        <div className="modal-body">                    
                                <form onChange={handleInputChange}>
                                    <div className="mb-3">                                        
                                       
                                        <input type="password" name="senhaAtual" id="senhaAtual"   placeholder="Senha Atual"/>
                                        
                                    </div>
                                    <div className="mb-3">
                                        
                                        <input type="password" name="novasenha" id="novasenha" placeholder="Nova senhaSenha"/>
                                        
                                    </div> 
                                    <div className="mb-3">
                                        
                                        <input type="password" name="confirmarsenha" id="confirmarsenha" placeholder="Repita a Nova Senha"/>
                                        
                                    </div> 
                                    <div className="modal-footer">
                                        <button type="button" data-bs-dismiss="modal" onClick={UpdatePassword}>Atualizar</button>                                       
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