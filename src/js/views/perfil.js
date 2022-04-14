import React, {useEffect, useContext} from "react";
import { useParams } from "react-router-dom";

import { Context } from "../store/appContext";

const Perfil = () => {
    const {store, acttions} = useContext(Context)
    const {posicion} = useParams();
    /* let personas = [
        {nombre: "Bob Esponja", img: "https://www.pngitem.com/pimgs/m/85-859440_spongebob-png-photos-you-like-krabby-patties-don.png", edad: 25, hobby:"atrapar medusas"},
        {nombre: "Calamardo", img: "https://i.discogs.com/CxBwOzKSR5JJdrixe3qh-xJpz8fzrWstw2Bet48aZwE/rs:fit/g:sm/q:90/h:846/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTU4MTE3/MzEtMTQ5Njk0ODA1/Ni01MDIwLnBuZw.jpeg", edad: 32, hobby:"tocar el clarinete"}
    ]  */

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