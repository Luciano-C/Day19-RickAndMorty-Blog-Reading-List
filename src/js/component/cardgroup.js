import React, { useState, useContext } from "react";
import { Card } from "./card";
import "../../styles/cardGroup.css"

import { Context } from "../store/appContext";

const CardGroup = (props) => {
    
    const arrayToMap = props.arrayToMap;
    const mapParameters = props.parameters;
    const maxInput = props.maxInput;
    const functionToLoad = props.functionToLoad;
    
    const [inputValue, setInputValue] = useState("");
    const [page, setPage] = useState(1);
    const aditionalText = useState(`(Page 1 of ${maxInput})`)
    
    
    const inputButtonHandler = () => {
        if (inputValue > Number(props.maxInput) || inputValue < 1) {
            alert("Ingrese un número válido de página")
        }
        else {
            setPage(inputValue)
            functionToLoad(inputValue)
            
            /* setAditionalText(`(Page ${page} of ${maxInput})`) */
        }
    }



    return (
        <div className="d-flex flex-column fst-italic fw-bold">
            <h2>{props.title} {`(Page ${page} of ${maxInput})`}</h2>
            <div className="inputDiv">
                <input type="number" min="1" max={props.maxInput} onChange={(e) => setInputValue(e.target.value)} placeholder="Page number"/>
                <button className="inputButton" onClick={() => inputButtonHandler()}>Set page</button>
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