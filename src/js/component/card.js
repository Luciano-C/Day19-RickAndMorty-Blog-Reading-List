import React, { useState, useContext } from "react";
import "../../styles/card.css"
import { Link } from "react-router-dom";


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
            {props.src !== undefined ? <img src={props.src} className="card-img-top" alt="..." /> : <></>}
            <div>
                <h5 className="text-start ps-3 fw-bold mt-3">{props.name}</h5>
                <p className="card-text text-start ps-3">{props.char_1}{props.char_1 !== undefined ? ":" : ""} {props.value_1}</p>
                <p className="card-text text-start ps-3">{props.char_2}{props.char_2 !== undefined ? ":" : ""} {props.value_2}</p>
                <p className="card-text text-start ps-3">{props.char_3}{props.char_3 !== undefined ? ":" : ""} {props.value_3}</p>
                <div className="d-flex justify-content-between align-items-center button-container">
                    <Link to={`/${props.cardType}/` + props.index}>
                        <button className="btn btn-grad">Learn More!</button>
                    </Link>

                    <span className="favorite" onClick={() => favoriteButtonHandler(props.name)}>{isFavorite(props.name) ? <i className="fas fa-heart"></i> : <i className="far fa-heart"></i>}</span>
                </div>

            </div>
        </div>
    )

}