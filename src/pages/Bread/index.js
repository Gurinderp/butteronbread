import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import bread from "../../assets/bread.jpg";

function Bread() {
	return (
		<div className="product-container">
			<div className="back-btn">
				<Link to="/products">BACK</Link>
			</div>
			<div className="product-page">
				<div className="prodpage-image">
					<div className="prodpage-image-container">
						<img
							src={bread}
							alt="placeholder"
							className="prodpage-image"
						></img>
					</div>
				</div>
				<div className="prodpage-description">
					<div className="prod-title">Bread</div>
					<div className="prod-description">
						Soft and fluffy food made of flour, water, and yeast or
						another leavening agent, mixed together and baked.{" "}
						<br /> This product is not Gluten-Free.
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

export default Bread;
