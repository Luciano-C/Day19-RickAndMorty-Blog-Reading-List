import React, { useState } from "react";
import "../../styles/card.css"

export const Card = () => {
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
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div className="d-flex justify-content-between align-items-center">
                    <button className="btn btn-grad">Learn More!</button>
                    <span className="favorite" onClick={() => changeFavorite()}>{isFavorite ? <i class="fas fa-heart"></i> : <i class="far fa-heart"></i>}</span>
                </div>

            </div>
        </div>
    )

}