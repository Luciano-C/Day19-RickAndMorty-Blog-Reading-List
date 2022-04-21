import React, { useState, useContext } from "react";
import { Card } from "./card";
import "../../styles/cardGroup.css"

import { Context } from "../store/appContext";

const CardGroup = () => {
    const { store, actions } = useContext(Context);
    const characters = store.characters;

    return (
        <div className="d-flex flex-column text-start fst-italic fw-bold">
            <h2>Characters</h2>
            <div className="d-flex justify-content-center">
                <ul className="cardGroupContainer">
                    {characters.map((x, i) => <Card key={i} char_1="Status" char_2="Species" char_3="Gender" name={x.name} value_1={x.status} value_2={x.species} value_3={x.gender} src={x.image} />)}
                </ul>
            </div>
        </div>




    )
}

export default CardGroup;