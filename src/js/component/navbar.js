import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import logo from "../../img/logo.png"


import { Context } from "../store/appContext";

const DropdownItem = (props) => {

	const { store, actions } = useContext(Context);

	return (
		<div className="d-flex justify-content-between ">
			<span className="ms-1">{props.name}</span>
			<span className="me-1" onClick={() => { actions.deleteFavorite(props.name) }}><i className="fas fa-trash"></i></span>
		</div>
	)
}

export const Navbar = () => {

	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar mb-3">
			<Link to="/">
				<img src={logo} className="logo ms-3" />
			</Link>
			<div className="ml-auto">

				<div className="btn-group favorites-button">
					<button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">
						Favorites ({store.favoritesList.length})
					</button>
					{store.favoritesList.length > 0 ?
						<ul className="dropdown-menu">
							{store.favoritesList.map((x, i) => <li key={i}><DropdownItem name={x.name}/></li>)}
						</ul> :
						<ul className="dropdown-menu">
							<li className="text-center">(empty)</li>
						</ul>}
				</div>


			</div>
		</nav>
	);
};
