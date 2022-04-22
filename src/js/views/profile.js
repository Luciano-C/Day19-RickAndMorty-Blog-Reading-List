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
                <ul>
                    <li>Name: {store.characters[arrayPosition]?.name}.</li>
                    <li>Status: {store.characters[arrayPosition]?.status}.</li>
                    <li>Species: {store.characters[arrayPosition]?.species}.</li>
                    <li>Type: {store.characters[arrayPosition]?.type}.</li>
                    <li>Gender: {store.characters[arrayPosition]?.gender}.</li>
                    <li>Origin: {store.characters[arrayPosition]?.origin.name}.</li>
                    <li>Location: {store.characters[arrayPosition]?.location.name}.</li>
                    <li>Number of episodes: {store.characters[arrayPosition]?.episode.length}.</li>
                </ul>
            </div>
        </div>
    )
}

export default Profile;

