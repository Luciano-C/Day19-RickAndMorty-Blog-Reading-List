import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css"



const DropdownItem = (props) => {
	return (
		<div className="d-flex justify-content-around">
			<span>{props.name}</span>
			<span><i className="fas fa-trash"></i></span>
		</div>
	)
}





export const Navbar = () => {
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
					<ul className="dropdown-menu dropdown-menu-start">
						<DropdownItem name="Luke Skywalker" />
					</ul>
				</div>


			</div>
		</nav>
	);
};
