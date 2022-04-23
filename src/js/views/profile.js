import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";

import { Context } from "../store/appContext";
import "../../styles/profile.css"
const Profile = () => {
    const { position } = useParams();
    const [character, setCharacter] = useState();

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${position}`)
        .then(response => response.json())
        .then(result => setCharacter(result))
        .catch(error => console.log('error', error));
    }, [])


    return (
        <div className="d-flex justify-content-center">
            <div className="d-flex profile-container">
                <img className="profile-photo" src={character?.image} />
                <ul className="profile-ul">
                    <li className="profile-list-item">Name: {character?.name}.</li>
                    <li className="profile-list-item">Status: {character?.status}.</li>
                    <li className="profile-list-item">Species: {character?.species}.</li>
                    <li className="profile-list-item">Type: {character?.type}.</li>
                    <li className="profile-list-item">Gender: {character?.gender}.</li>
                    <li className="profile-list-item">Origin: {character?.origin.name}.</li>
                    <li className="profile-list-item">Location: {character?.location.name}.</li>
                    <li className="profile-list-item">Number of episodes: {character?.episode.length}.</li>
                </ul>
            </div>
        </div>
    )
}

export default Profile;

