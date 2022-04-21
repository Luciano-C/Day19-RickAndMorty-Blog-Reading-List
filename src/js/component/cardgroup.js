import React, { useState, useContext } from "react";
import { Card } from "./card";
import "../../styles/cardGroup.css"

/* import { Context } from "../store/appContext"; */

const CardGroup = (props) => {
    const arrayToMap = props.arrayToMap;
    const mapParameters = props.parameters;

    
    const functionToLoad = props.functionToLoad;
    const [page, setPage] = useState(1);
    const [aditionalText, setAditionalText] = useState(`(Page 1 of ${props.maxInput})`)
    
    
    const inputButtonHandler = (page) => {
        if (page > Number(props.maxInput) || page < 1) {
            alert("Ingrese un número válido de página")
        }
        else {
            functionToLoad(page)
            setAditionalText(`(Page ${page} of ${props.maxInput})`)
        }
    }



    return (
        <div className="d-flex flex-column fst-italic fw-bold">
            <h2>{props.title} {aditionalText}</h2>
            <div className="inputDiv">
                <input type="number" min="1" max={props.maxInput} onChange={(e) => setPage(e.target.value)} placeholder="Number of page."/>
                <button className="inputButton" onClick={() => inputButtonHandler(page)}>Set page</button>
            </div>
            <div className="d-flex justify-content-center">
                <ul className="cardGroupContainer">
                    {arrayToMap.map((x, i) => <Card key={i} char_1="Status" char_2="Species" char_3="Gender" name={x.name} value_1={x[mapParameters.mp1]} value_2={x[mapParameters.mp2]} value_3={x[mapParameters.mp3]} src={x[mapParameters.mp0]} />)}      
                </ul>
            </div>
        </div>




    )
}

export default CardGroup;