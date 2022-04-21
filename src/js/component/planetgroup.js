import React, { useState, useContext } from "react";
import { Card } from "./card";
import "../../styles/cardGroup.css"

import { Context } from "../store/appContext";

const PlanetGroup = () => {
    const { store, actions } = useContext(Context);
    const planets = store.planets;

    return (
        <div className="d-flex flex-column text-start fst-italic fw-bold">
            <h2>Planets</h2>
            <div className="d-flex justify-content-center">
                <ul className="cardGroupContainer">
                {planets.map((x, i) => <Card key={i} char_1="Type" char_2="Dimension"  name={x.name} value_1={x.type} value_2={x.dimension}/>)}
                </ul>
            </div>
        </div>




    )
}

export default PlanetGroup;