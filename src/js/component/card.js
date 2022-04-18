import React, { useState } from "react";
import "../../styles/card.css"

export const Card = (props) => {
    const [isFavorite, setIsfavorite] = useState(false);


    const changeFavorite = () => {
        if (isFavorite === true) {
            setIsfavorite(false);
        }
        else {
            setIsfavorite(true)
        }
    }
    return (
        <div className="card">
            <img src={props.src} className="card-img-top" alt="..." />
            <div>
                <h5 className="text-start ps-3 fw-bold mt-3">{props.name}</h5>
                <p className="card-text text-start ps-3">Gender: {props.gender}</p>
                <p className="card-text text-start ps-3">Hair color: {props.hair}</p>
                <p className="card-text text-start ps-3">Eye color: {props.eyes}</p>
                <div className="d-flex justify-content-between align-items-center">
                    <button className="btn btn-grad">Learn More!</button>
                    <span className="favorite" onClick={() => changeFavorite()}>{isFavorite ? <i className="fas fa-heart"></i> : <i className="far fa-heart"></i>}</span>
                </div>

            </div>
        </div>
    )

}