import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Card } from "../component/card"

import { Context } from "../store/appContext";

import "../../styles/home.css";


export const Home = () => {
	/* const { store, actions } = useContext(Context); */

	return (
		<div className="cardBackground">
            <Card />
		</div>
	);
};