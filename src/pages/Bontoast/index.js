import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

function Bontoast() {
	return (
		<div>
			<div>
				<Link to="/products">Back</Link>
			</div>
			<div>Bontoast</div>
		</div>
	);
}

export default Bontoast;
