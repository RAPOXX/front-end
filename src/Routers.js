import React, { useState } from "react";
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import Cadastro from "./componentes/Cadastro/Cadastro";
import Login from './componentes/Login/Login'
import MeusDados from './componentes/MeusDados'
import Painel from "./componentes/Painel/Painel";
import Sidebar from "./componentes/Sidebar";
import {CustomerContext} from './contexts/customer'

function Routers ()  {
    return (
    
    <>
        <BrowserRouter>                           
            <Routes>

        

            <Route element={<Sidebar/>} path="/" exact/>
            <Route element={<Login/>} path="/login" />
            <Route element={<Cadastro/>} path="/cadastro"/>
            <Route element={<MeusDados/>} path="/meusdados"/>
            <Route element={<Painel/>} path="/painel"/>
        
            </Routes>
        </BrowserRouter>
    </>
    )
}

export default Routers