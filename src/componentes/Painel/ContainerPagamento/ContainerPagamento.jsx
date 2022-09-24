import React from "react"

import styles from './ContainerPagamento.module.css'


function ContainerPagamento({setToggleContPag})  {
    const pix = '123.456.789-11'

    const CopiarPix =() => {
        const pix = document.getElementById('texto-CB').textContent
        navigator.clipboard.writeText(pix)
    }


    return (
    
    <>
        <div className={styles.container_boleto}>
            <img onClick={() => setToggleContPag(false)} src="https://th.bing.com/th/id/OIP.-lzqDPws-tYD1BjzTuvCMAHaHa?pid=ImgDet&rs=1" alt="" srcset="" />
            <p>Ola, pague sua mensalidade utilizando pix:</p>
            <h2 id='texto-CB'>{pix}</h2>
            <button onClick={CopiarPix}>COPIAR</button>
            <p>Envie o comprovante de pagamento para email@email.com</p>
        
        </div>
    </>
    
    )
}

export default ContainerPagamento