import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

function Bonbread() {
	return (
		<div>
			<div>
				<Link to="/products">Back</Link>
			</div>
			<div>Bonbread</div>
		</div>
	);
}

export default Bonbread;
