import React, { useState, useContext } from "react";
import { Card } from "./card";
import "../../styles/cardGroup.css"

import { Context } from "../store/appContext";

const CardGroup = (props) => {
    const {store, actions} = useContext(Context)
    const arrayToMap = props.arrayToMap;
    const mapParameters = props.parameters;
    const maxInput = props.maxInput;
    const functionToLoad = props.functionToLoad;
    
    const [inputValue, setInputValue] = useState("");

    // Manejo de páginas. maxinput corresponde al máximo de páginas en la api, estas son obtenidas con fetch en info y se almacenan en store
    const inputButtonHandler = () => {
        if (inputValue > Number(props.maxInput) || inputValue < 1) {
            alert("Ingrese un número válido de página")
        }
        else {
            props.setPage(inputValue)
            functionToLoad(inputValue)
        }
    }


// Se mapea y se entregan las características necesarias al componente Card
// index se calcula en función de la página e índice (i).
    return (
        <div className="d-flex flex-column fst-italic fw-bold">
            <h2>{props.title} {`(Page ${props.page} of ${maxInput})`}</h2>
            <div className="inputDiv">
                <input type="number" min="1" max={props.maxInput} onChange={(e) => setInputValue(e.target.value)} placeholder="Page number"/>
                <button className="inputButton" onClick={() => inputButtonHandler()}>Set page</button>
            </div>
            <div className="d-flex justify-content-center">
                <ul className="cardGroupContainer">
                    {arrayToMap.map((x, i) => <Card key={i} char_1={props.char_1} char_2={props.char_2} char_3={props.char_3} name={x.name} value_1={x[mapParameters.mp1]} value_2={x[mapParameters.mp2]} value_3={x[mapParameters.mp3]} src={x[mapParameters.mp0]} index={props.page * 20 - 19 + i} cardType={props.cardType} />)}      
                </ul>
            </div>
        </div>




    )
}

export default CardGroup;