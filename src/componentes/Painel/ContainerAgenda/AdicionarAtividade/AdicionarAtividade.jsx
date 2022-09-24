import React , { useState } from "react"

import axios from 'axios'

import styles from './AdicionarAtividade.module.css'

function AdicionarAtividade ({setToggleAddAtiv,buscaratividades,matricula}) {

        const [horario,setHorario] = useState()
        const [atividade,setAtividade] = useState()


        const listaAtividades = ['ACADEMIA','FUTEBOL','VOLEI','FUTSAL','FUTVOLEI','BASQUETE','BEACH-TENIS','BOXE','MUAYTHAI','JUDÔ','JIU-JITSU','KARATÊ','TÊNIS','YOGA','ALONGAMENTO','FUNCIONAL','GINASTICA LOCALIZADA','BALLET','JAZZ','FITDANCE','ZUMBA','DANÇA DO VENTRE','HIDROGINASTICA','DEEP WATER RUNNING','NATAÇÃO']
        listaAtividades.sort()
        
        const hiddenAddAtividade = () =>{
            setToggleAddAtiv(false)
        }
        
        const adicionarAtividade = () => {
            axios.defaults.baseURL = "http://localhost:8080"
            axios.post("/cadastraratividade",{
                matricula : matricula,
                atividade : atividade,
                horario : horario
            })
            .then((response) => {
                console.log(response.data)
            })
            .catch((err) => {
                console.log(err)
            })
            
            buscaratividades()
            
        }


        return (
            <>
                <div className={styles.container_add_ativ}>
                    <div onClick={hiddenAddAtividade} className={styles.icone}>
                    <img src="https://th.bing.com/th/id/R.3ce100a95c2c36b52db406cf1be06943?rik=kdycEKrJHmv7Tg&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_376308.png&ehk=J3fNGglWWQu5Y3%2fUU9y%2f6%2fLO%2bFqR4pAZRMfS%2fX1u6PQ%3d&risl=&pid=ImgRaw&r=0" alt="" srcset="" />
                    </div>
                    <select onChange={(e) => setAtividade(e.target.value)}  name="atividades" id="atividades">

                        {
                            listaAtividades.map((item) => {
                                return <option value={item}>{item}</option>
                            })
                        }

                    </select>
                    <input type="time"  onChange={(e) => setHorario(e.target.value)} name="horario" id="horario" placeholder='Horario' />
                    <button onClick={adicionarAtividade}>ADICIONAR</button>
                </div>
            </>
        )
}

export default AdicionarAtividade