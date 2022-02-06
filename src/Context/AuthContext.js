import React, { createContext, useState, useEffect } from "react"
import api from '../services/api'


const Context = createContext()

function AuthProvider({ children }){

    const [authenticated, setAuthenticated] = useState(false)


    //Confeir funcionalidade
    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(token){
            api.defaults.headers.Authorization = 'Bearer ' + JSON.parse(token)
            setAuthenticated(true)
        }
    },[])


    function handleLogin(){
        const token = localStorage.getItem('token')
        api.defaults.headers.Authorization = 'Bearer ' + JSON.parse(token)
        setAuthenticated(true)
    }  
    function handleLoout(){
        setAuthenticated(false)
    }  

    return(
        <Context.Provider value={{authenticated, handleLogin,handleLoout}} >
            {children}
        </Context.Provider>
    )
}

export {Context, AuthProvider}