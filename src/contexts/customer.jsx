import { useState } from "react";
import { createContext } from "react";

export const CustomerContext = createContext()

export function CustomerContextProvider(props) {
    
    const [nome,setNome] = useState()
    const [matricula,setMatricula] = useState()
    const [password,setPassword] = useState()
    const [logado,setLogado] = useState()
    const [plano,setPlano] = useState()
    
    return (
    
        <>
            <CustomerContext.Provider value={
                {nome,
                matricula,
                password,
                logado,
                nome,plano,
                setNome,
                setLogado,
                setMatricula,
                setPassword,
                setPlano}}>

                {props.children}    

            </CustomerContext.Provider>
        </>
        
        )
}
