import React, { useState, useContext } from "react";
import { Card } from "./card";
import "../../styles/cardGroup.css"

import { Context } from "../store/appContext";

const CardGroup = (props) => {
    const { store, actions } = useContext(Context);
    
    const characters = store.characters;

    return (
        <div className="container d-flex flex-column text-start fst-italic fw-bold">
            <h2>{props.title}</h2>
            <div className="d-flex justify-content-center">
                <ul className="cardGroupContainer">
                    {characters.map((x, i) => <Card key={i} char_1="Status" char_2="Species" char_3="Gender" name={x.name} gender={x.gender} status={x.status} species={x.species} src={x.src} />)}
                </ul>
            </div>
        </div>




    )
}

export default CardGroup;