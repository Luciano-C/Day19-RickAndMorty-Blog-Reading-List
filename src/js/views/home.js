import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Card } from "../component/card"

import { Context } from "../store/appContext";

import "../../styles/home.css";
import CardGroup from "../component/cardgroup";



export const Home = () => {
	
	const { store, actions } = useContext(Context);
	

	return (
		<div>
            <CardGroup title="Characters" arrayToMap={store.characters} char_1 = "Status" char_2="Species" char_3="Species"  parameters={{mp0: "image", mp1: "status", mp2: "species", mp3: "gender"}} maxInput={store.maxCharactersPages} functionToLoad={actions.loadCharacters} setPage={actions.setCurrentPage} page={store.currentPage} cardType="profile"/>
			<CardGroup title="Planets" arrayToMap={store.planets} char_1="Type" char_2="Dimension" parameters={{mp0: "", mp1: "type", mp2: "dimension", mp3: ""}} maxInput={store.maxPlanetsPages} functionToLoad={actions.loadPlanets} setPage={actions.setCurrentPlanetPage} page={store.currentPlanetPage} cardType="planetProfile"/>
		</div>
	);
};