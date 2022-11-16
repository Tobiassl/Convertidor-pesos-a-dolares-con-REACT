import React from 'react';
import { useState } from 'react';
//import './convertidor.css'
import styles from './style.module.css'

const Convertidor = () => {
    const {container,inputs,titulo,titulo_dos,conversor} = styles


    const [pesos, setPesos] = useState(0)

    const [dolar, setDolar] = useState(0)

        

    return(
        <div className={container}>
            <h2 className={conversor}>Convertidor de pesos Argentinos a dolares</h2>

        <div className={inputs}>

            <label className={titulo}>  Pesos Argentinos:    </label>

            <input type="number" value={pesos} onChange = {(e)=>    {
            setPesos(e.target.value)

            setDolar((e.target.value/300).toFixed(1))}
            }/>

            <label className={titulo_dos}>  Dolar blue:  </label>

            <input type="number" value={dolar} onChange = {(e)=>{
                setDolar(e.target.value)

                setPesos((e.target.value*300).toFixed(2))}
            }/>
            
        </div>
        </div>
    )
}

export { Convertidor }