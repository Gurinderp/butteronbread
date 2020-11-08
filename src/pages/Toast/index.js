import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import toast from "../../assets/toast.jpg";

function Toast() {
	return (
		<div className="product-container">
			<div className="back-btn">
				<Link to="/products">BACK</Link>
			</div>
			<div className="product-page">
				<div className="prodpage-image">
					<div className="prodpage-image-container">
						<img
							src={toast}
							alt="placeholder"
							className="prodpage-image"
						></img>
					</div>
				</div>
				<div className="prodpage-description">
					<div className="prod-title">Toast</div>
					<div className="prod-description">
						Sliced bread browned on both sides by exposure to
						radiant heat. <br />
						Available for a limited time in six different levels.{" "}
						<br />
						This product is not Gluten-Free.
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

export default Toast;
