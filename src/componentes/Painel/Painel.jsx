import axios from 'axios'
import { useContext } from 'react'
import { useEffect, useState } from 'react'
import { CustomerContext } from '../../contexts/customer'
import styles from './Painel.module.css'

import ContainerAgenda from './ContainerAgenda/ContainerAgenda'
import ContainerPagamento from './ContainerPagamento/ContainerPagamento'

function Painel () {

    
    const {nome,matricula,plano} = useContext(CustomerContext)
    
    const[toggleContPag,setToggleContPag] = useState(false)    
    const [atividades,setAtividades] = useState([])


    useEffect(() => {
        buscaratividades()
    },[])

    const buscaratividades = () => {
        axios.defaults.baseURL = "http://localhost:8080"
        axios.post("/buscaratividades",{
            matricula : matricula
        })
        .then((response) => {
            console.log(response.data)
            setAtividades(response.data.atividades)
        })
        .catch((err) => {
            console.log(err)
        }) 
        
    }

    return (
        <>



        <div className={styles.area_socio}>
               <div className={styles.container_painel}>
                    <div className={styles.foto_cliente}>
                    </div>
                    <h1>{nome}</h1>
                    <h1>{matricula}</h1>
                    <h1>{plano}</h1>
                    <div className={styles.container_options}>
                        <button onClick={() => setToggleContPag(true)}>PAGAR MENSALIDADE</button>
                    </div>

                        {
                        toggleContPag   ? 
                            <ContainerPagamento setToggleContPag={setToggleContPag}/> 
                            
                            : null
                        }
                    
                    </div>  
                
                    <ContainerAgenda matricula={matricula} atividades={atividades} buscaratividades={buscaratividades}/>
            
        </div>
        </>
    )
}

export default Painel