import React,{useState} from 'react'

import axios from 'axios'

import styles from './ContainerAgenda.module.css'
import AdicionarAtividade from './AdicionarAtividade/AdicionarAtividade'

function ContainerAgenda({atividades,buscaratividades,matricula}) {

    const[toggleAddAtiv,setToggleAddAtiv] =  useState(false)

    
    const excluiratividade = (id) => {
        axios.defaults.baseURL = "http://localhost:8080"
        axios.post("/deletaratividade",{
            id : id
        })
        .then((response) => {
            console.log(response)
        })  
        .catch((err) => {
            console.log(err)
        })
        buscaratividades()    
    }

        return (
            <>
                <div className={styles.container_agenda}>
                    <div className={styles.atividades}>
                        {atividades.map((item) => {
                            return (
                                <>
                                
                            <div className={styles.atividade}>
                                
                                <h1>{item.atividade}</h1> 
                                <h1>{item.horario}</h1>
                                <button onClick={() => excluiratividade(item.id)} >EXCLUIR</button>
                                </div>
                                </>
                             )

                            })
                        }
                    <div className={styles.button_adicionar}>

                    <button onClick={() => setToggleAddAtiv(true)}>ADICIONAR</button>
                    </div>
                    </div>
                </div>

                    {
                        toggleAddAtiv ?
                            <AdicionarAtividade matricula={matricula} setToggleAddAtiv={setToggleAddAtiv} buscaratividades={buscaratividades}  /> 
                            : null
                    }
                    

            </>
        )
}

export default ContainerAgenda