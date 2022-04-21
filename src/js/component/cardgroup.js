import React, { useState, useContext } from "react";
import { Card } from "./card";
import "../../styles/cardGroup.css"

import { Context } from "../store/appContext";

const CardGroup = (props) => {
   /*  const { store, actions } = useContext(Context); */
    const arrayToMap = props.arrayToMap;
    const mapParameters = props.parameters;
    
    return (
        <div className="d-flex flex-column text-start fst-italic fw-bold">
            <h2>{props.title}</h2>
            <div className="d-flex justify-content-center">
                <ul className="cardGroupContainer">
                    {arrayToMap.map((x, i) => <Card key={i} char_1="Status" char_2="Species" char_3="Gender" name={x.name} value_1={x[mapParameters.mp1]} value_2={x[mapParameters.mp2]} value_3={x[mapParameters.mp3]} src={x[mapParameters.mp0]} />)}
                    
                </ul>
            </div>
        </div>




    )
}

export default CardGroup;