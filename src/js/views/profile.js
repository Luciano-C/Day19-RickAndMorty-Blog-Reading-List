import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";

import { Context } from "../store/appContext";
import "../../styles/profile.css"
const Profile = () => {
    const { store, actions } = useContext(Context)
    const { position } = useParams();

    const arrayPosition = parseInt(position) - 1;


    /*    useEffect(() => {
          actions.loadCharacters(1);
          actions.loadPlanets(1);     
       },[]) */

    return (
        <div className="d-flex justify-content-center">
            <div className="d-flex profile-container">
                <img className="profile-photo" src={store.characters[arrayPosition]?.image} />
                <ul className="profile-ul">
                    <li className="profile-list-item">Name: {store.characters[arrayPosition]?.name}.</li>
                    <li className="profile-list-item">Status: {store.characters[arrayPosition]?.status}.</li>
                    <li className="profile-list-item">Species: {store.characters[arrayPosition]?.species}.</li>
                    <li className="profile-list-item">Type: {store.characters[arrayPosition]?.type}.</li>
                    <li className="profile-list-item">Gender: {store.characters[arrayPosition]?.gender}.</li>
                    <li className="profile-list-item">Origin: {store.characters[arrayPosition]?.origin.name}.</li>
                    <li className="profile-list-item">Location: {store.characters[arrayPosition]?.location.name}.</li>
                    <li className="profile-list-item">Number of episodes: {store.characters[arrayPosition]?.episode.length}.</li>
                </ul>
            </div>
        </div>
    )
}

export default Profile;

