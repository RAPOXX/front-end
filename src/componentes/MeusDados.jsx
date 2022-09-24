import styles from '../styles/MeusDados.module.css'

import Sidebar from './Sidebar'

function MeusDados() {
    return (
        <>

            <Sidebar/>

            <div className={styles.container_dados}>
                
                <p>Nome : <span>Joao holanda </span></p>
                

                    <p>cpf : <span>123.456.789 - 10</span></p>

                    <p>Data de Nascimento : 20/20/20</p>

                <div className={styles.input_flex}>

                 <p>email : <span>email@email.com</span></p>
                 <button>ALTERAR</button>
                
                </div>
                
                <p>data de admissao : 12/12/1212 <span></span></p>
                <div className={styles.input_flex}>
                    <p>Telefone : <span> (21) 2323-4040</span></p>
                    <button>ALTERAR</button>
                
                </div>
            </div>
        </>
    )
}

export default MeusDados