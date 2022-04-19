import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css"

import { Context } from "../store/appContext";

const DropdownItem = (props) => {

	const { store, actions } = useContext(Context);

	return (
		<div className="d-flex justify-content-around">
			<span>{props.name}</span>
			<span onClick={() => { actions.deleteFavorite(props.name) }}><i className="fas fa-trash"></i></span>
		</div>
	)
}





export const Navbar = () => {

	const { store, actions } = useContext(Context);


	return (
		<nav className="navbar mb-3">
			<Link to="/">
				<img src="https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo-0.png" className="star-wars-logo ms-3" />
			</Link>
			<div className="ml-auto">

				{/* <button className="btn btn-primary me-5">Favorites</button> */}
				<div className="btn-group favorites-button">
					<button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
					</button>
					{store.favoritesList.length > 0 ? <ul className="dropdown-menu">
						{store.favoritesList.map((x, i) => <li key={i}><DropdownItem name={x.name} /></li>)}
					</ul> :
						<ul className="dropdown-menu">
							<li className="text-center">(empty)</li>
						</ul>}
				</div>


			</div>
		</nav>
	);
};
