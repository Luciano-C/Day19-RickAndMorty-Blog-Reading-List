import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css"


export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img src="https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo-0.png" className="star-wars-logo ms-3"/>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary me-5">Favorites</button>
				</Link>
			</div>
		</nav>
	);
};
