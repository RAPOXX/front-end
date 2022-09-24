import styles from './Cadastro.module.css'
import {Link} from 'react-router-dom'
import Sidebar from '../Sidebar'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import cadastrar from '../../services/cadastrar'

function Cadastro() {

    const [matricula,setMatricula] = useState('')
    const [email,setEmail] = useState('')
    const [nome,setNome] = useState('')
    const [password,setPassword] = useState('')


    const Cadastrar = () => {
        cadastrar(matricula,email,nome,password)
        //axios.defaults.baseURL = 'http://localhost:8080'
        //axios.post('/cadastrar',({
          //  matricula : matricula,
            //email : email,
            //nome : nome,
            //password : password
        //}))
        //.then((response) => {
          //  console.log(response.data)
        //})
        //.catch((err) => {
          //  console.log(err)
        //})

    }

    useEffect(() => {
    },[])

    return (
    
    <>


        <div className={styles.container_cadastro}>
                <h1>Cadastro do Sócio</h1>

                <input type="text" name="matricula" onChange={(e) => setMatricula(e.target.value)} id="matricula"  placeholder="Matricula"/>
                <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} id="email" placeholder="E-mail" />
                <input type="text" name="nome" onChange={(e) => setNome(e.target.value)} id="nome" placeholder="Nome" />
                <input type="password" name="password" onChange={ (e) => setPassword(e.target.value)} id="password" placeholder="Password" />
                <button onClick={Cadastrar}>CADASTRAR</button>
                <Link to="/login">Ja tem Cadastro?</Link>
            <form action="" method="POST">
            </form>
        </div>
    </>
    
    )
}

export default Cadastro

