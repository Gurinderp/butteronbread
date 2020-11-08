import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import bonbread from "../../assets/bonbread.jpg";

function Bonbread() {
	return (
		<div className="product-container">
			<div className="back-btn">
				<Link to="/products">BACK</Link>
			</div>
			<div className="product-page">
				<div className="prodpage-image">
					<div className="prodpage-image-container">
						<img
							src={bonbread}
							alt="placeholder"
							className="prodpage-image"
						></img>
					</div>
				</div>
				<div className="prodpage-description">
					<div className="prod-title">Butter on Bread</div>
					<div className="prod-description">
						This is sample text for the description. Two or three
						sentences should be long enough. I guess I will make it
						three sentences just in case.
					</div>
					<div className="prod-price">
						$100.00 <button>-</button>
						<span className="product-amount">0</span>
						<button>+</button>
					</div>
					<div className="add-cart">
						<button>ADD TO CART</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Bonbread;
