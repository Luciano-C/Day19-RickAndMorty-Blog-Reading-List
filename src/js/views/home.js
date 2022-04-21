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
            <CardGroup title="Characters" arrayToMap={store.characters} parameters={{mp0: "image", mp1: "status", mp2: "species", mp3: "gender"}}/>
			<CardGroup title="Planets" arrayToMap={store.planets} parameters={{mp0: "", mp1: "type", mp2: "dimension", mp3: ""}}/>
		</div>
	);
};