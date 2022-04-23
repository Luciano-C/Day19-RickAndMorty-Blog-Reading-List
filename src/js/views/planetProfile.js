import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";

import { Context } from "../store/appContext";
import "../../styles/profile.css"
const PlanetProfile = () => {
    const { position } = useParams();
    const [planet, setCharacter] = useState();
// useEffect hace fetch de personaje con la posición de router
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/location/${position}`)
        .then(response => response.json())
        .then(result => setCharacter(result))
        .catch(error => console.log('error', error));
    }, [])


    return (
        <div className="d-flex justify-content-center">
            <div className="d-flex profile-container">
                <img className="profile-photo" src="https://www.tonica.la/__export/1589659313867/sites/debate/img/2020/05/16/rick-and-morty-portada.jpg_423682103.jpg" />
                <ul className="profile-ul">
                    <li className="profile-list-item">Name: {planet?.name}.</li>
                    <li className="profile-list-item">Type: {planet?.type}.</li>
                    <li className="profile-list-item">Dimension: {planet?.dimension}.</li>
                </ul>
            </div>
        </div>
    )
}

export default PlanetProfile;