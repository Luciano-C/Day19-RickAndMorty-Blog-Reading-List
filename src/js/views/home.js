import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Card } from "../component/card"

import { Context } from "../store/appContext";

import "../../styles/home.css";
import CardGroup from "../component/cardgroup";


export const Home = () => {
	/* const { store, actions } = useContext(Context); */

	return (
		<div>
            <CardGroup/>
		</div>
	);
};