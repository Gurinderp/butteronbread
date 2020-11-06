import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

function Nav() {
	return (
		<div className="nav-container">
			<div className="nav-logo">
				<Link to="/">
					BUTTER
					<br />
					BREAD
				</Link>
			</div>
			<div className="nav-links">
				<Link to="/">Home</Link>
				<Link to="/products">Products</Link>
				<Link to="/login">Login</Link>
			</div>
		</div>
	);
}

export default Nav;
