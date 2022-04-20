import React, { useState, useContext } from "react";
import "../../styles/card.css"


import { Context } from "../store/appContext";

export const Card = (props) => {
    /* const [isFavorite, setIsfavorite] = useState(false); */

    const { store, actions } = useContext(Context);


    const isFavorite = (name) => {
        return store.favoritesList.map(x => x.name).includes(name);
    };


    const favoriteButtonHandler = (name) => {
        
        if (isFavorite(name) === true) {
            actions.deleteFavorite(name);
           /*  setIsfavorite(false); */
        }
        else {
            actions.addFavorite(name);
            /* setIsfavorite(true) */
        }
    }


    return (
        <div className="card">
            <img src={props.src} className="card-img-top" alt="..." />
            <div>
                <h5 className="text-start ps-3 fw-bold mt-3">{props.name}</h5>
                <p className="card-text text-start ps-3">{props.char_1}: {props.status}</p>
                <p className="card-text text-start ps-3">{props.char_2}: {props.species}</p>
                <p className="card-text text-start ps-3">{props.char_3}: {props.gender}</p>
                <div className="d-flex justify-content-between align-items-center">
                    <button className="btn btn-grad">Learn More!</button>
                    <span className="favorite" onClick={() => favoriteButtonHandler(props.name)}>{isFavorite(props.name) ? <i className="fas fa-heart"></i> : <i className="far fa-heart"></i>}</span>
                </div>

            </div>
        </div>
    )

}