import styles from '../styles/Sidebar.module.css'
import { Link } from 'react-router-dom'

function Sidebar () {
    return (
        <>
            <div className={styles.sidebar}>
                <nav>
                    <ul>
                        <li>
                            <Link to="/painel"> 
                                <a>Painel</a>
                            </Link>
                        </li>

                         <li>
                            <Link to="/MeusDados">
                                <a>Meus Dados</a>
                            </Link>
                         </li> 
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Sidebar