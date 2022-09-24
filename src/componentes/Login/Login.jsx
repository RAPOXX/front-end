import styles from './Login.module.css'
import Painel from '../Painel/Painel'
import logar from '../../services/logar'
import axios from 'axios'

import { Link} from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import {useContext} from 'react'
import {CustomerContext} from '../../contexts/customer'
import { useEffect } from 'react'

function Login() {

  useEffect(() => {

    console.log(process.env.REACT_APP_API_BASEURL)

  },[])

    const {
      setNome,
      setMatricula,
      setLogado,
      setPassword,
      setPlano,
      matricula,
      password,
      logado
    } = useContext(CustomerContext)
  
    const navigate = useNavigate()

    
    const Logar = () => {
         axios.defaults.baseURL = 'http://localhost:8080'
          axios.post('/logar',{
            matricula : matricula,
            password : password
          })
        .then((response) => { 
            console.log("falllaaaaaaaaa")
            setLogado(response.data.logado)
            setNome(response.data.nome)
            setMatricula(response.data.matricula)
            setPlano(response.data.plano) 
            
            if(response.data.logado) {
              navigate("/painel")
            }
          })
          .catch((err) => {
            console.log(err)
          })
    }



    return (
    
    <>


        <div className={styles.container_login}>
                <h1>Login do Sócio</h1>
                <input type="text" onChange={(e) => setMatricula(e.target.value)} name="matricula" id="matricula"  placeholder="Matricula"/>
                <input type="password" onChange={(e) => setPassword(e.target.value)} name="password" id="password" placeholder="Password" />
                <button onClick={Logar}>LOGIN</button>
                <Link to="/cadastro">nao tem cadastro?</Link>

            {
            logado ? 
                   // <Link to="/painel">Link</Link>   
                    <Painel/>
                    :
                        null
            }
            </div>

    </>
    
    )
}
export default Login

