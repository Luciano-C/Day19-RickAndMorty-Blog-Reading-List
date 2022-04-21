import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Card } from "../component/card"

import { Context } from "../store/appContext";

import "../../styles/home.css";
import CardGroup from "../component/cardgroup";
import PlanetGroup from "../component/planetgroup";


export const Home = () => {
	/* const { store, actions } = useContext(Context); */

	return (
		<div>
            <CardGroup/>
			<PlanetGroup/>
		</div>
	);
};