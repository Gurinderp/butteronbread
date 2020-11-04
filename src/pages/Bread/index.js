import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

function Bread() {
	return (
		<div>
			<div>
				<Link to="/products">Back</Link>
			</div>
			<div>Bread</div>
		</div>
	);
}

export default Bread;
