import React, { useState, useEffect, useContext } from "react";
import mpb from "../../img/PngItem_1644924.png"
import "../../styles/notfound.css"



const NotFound = () => {
    return (
        <div className="d-flex justify-content-center">
            <div className="d-flex justify-content-center flex-column align-items-center notfound-div">
                <img className="mbp-image" src={mpb} />
                <h1 className="oohwee">Oooh wee, looks like the page you were looking for doesn't exist, ooh weee.</h1>
            </div>
        </div>
    )
}


export default NotFound;