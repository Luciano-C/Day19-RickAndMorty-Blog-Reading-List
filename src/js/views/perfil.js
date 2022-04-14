import React, {useEffect, useContext} from "react";
import { useParams } from "react-router-dom";

import { Context } from "../store/appContext";

const Perfil = () => {
    const {store, acttions} = useContext(Context)
    const {posicion} = useParams();


    /* useEffect(() => {
        alert(posicion)
    }, []) */
    return (
        <div>
			<h1>Hola, mi nombre es {store.personas[posicion]?.nombre}.</h1>
            <h2>Mi edad es {store.personas[posicion]?.edad}.</h2>
            <h2>Mi hobby es {store.personas[posicion]?.hobby}.</h2>
			<img style={{width:"25vw", height:"35vw", objectFit:"cover"}} src={store.personas[posicion]?.img}/>
		</div>
    )
}

export default Perfil;