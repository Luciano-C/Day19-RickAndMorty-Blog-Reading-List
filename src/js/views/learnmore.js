import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";

import { Context } from "../store/appContext";

const LearnMore = () => {
    const { store, actions } = useContext(Context)
    const { position } = useParams();
    
    const arrayPosition = parseInt(position) - 1;
    
    
  /*    useEffect(() => {
        actions.loadCharacters(1);
        actions.loadPlanets(1);     
     },[]) */

    console.log(position)
  

    return (
        <div>
            <h1 style={{ color: "white" }}>Aqui va algo</h1>
            <img style={{ width: "25vw", height: "35vw", objectFit: "cover" }} src={store.characters[arrayPosition]?.image} />
        </div>
    )
}

export default LearnMore;