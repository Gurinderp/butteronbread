import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import bread from "../../assets/bread.jpg";
import bonbread from "../../assets/bonbread.jpg";
import bontoast from "../../assets/bontoast.jpg";
import butter from "../../assets/butter.jpg";
import toast from "../../assets/toast.jpg";

function Products() {
	return (
		<div>
			<div className="card-row top">
				<div className="product-card">
					<div className="card-title">
						<Link to="/products/butter">Butter</Link>
					</div>
					<div className="product-image-container">
						<img
							src={butter}
							alt="placeholder"
							className="card-image"
						></img>
					</div>
					<div className="card-description">
						<p className="cd-title">Description</p>
						<p className="cd-description">
							This will be the product description
						</p>
						<p className="cd-price">Price: $100.00</p>
					</div>
					<div className="see-more">
						<Link to="/products/butter">See More</Link>
					</div>
				</div>
				<div className="product-card right">
					<div className="card-title">
						<Link to="/products/bread">Bread</Link>
					</div>
					<div className="product-image-container">
						<img
							src={bread}
							alt="placeholder"
							className="card-image"
						></img>
					</div>
					<div className="card-description">
						<p className="cd-title">Description</p>
						<p className="cd-description">
							This will be the product description
						</p>
						<p className="cd-price">Price: $100.00</p>
					</div>
					<div className="see-more">
						<Link to="/products/bread">See More</Link>
					</div>
				</div>
			</div>
			<div className="card-row">
				<div className="product-card">
					<div className="card-title">
						<Link to="/products/butteronbread">
							Butter on Bread
						</Link>
					</div>
					<div className="product-image-container">
						<img
							src={bonbread}
							alt="placeholder"
							className="card-image"
						></img>
					</div>
					<div className="card-description">
						<p className="cd-title">Description</p>
						<p className="cd-description">
							This will be the product description
						</p>
						<p className="cd-price">Price: $100.00</p>
					</div>
					<div className="see-more">
						<Link to="/products/butteronbread">See More</Link>
					</div>
				</div>
				<div className="product-card right">
					<div className="card-title">
						<Link to="/products/butterontoast">
							Butter on Toast
						</Link>
					</div>
					<div className="product-image-container">
						<img
							src={bontoast}
							alt="placeholder"
							className="card-image"
						></img>
					</div>
					<div className="card-description">
						<p className="cd-title">Description</p>
						<p className="cd-description">
							This will be the product description
						</p>
						<p className="cd-price">Price: $100.00</p>
					</div>
					<div className="see-more">
						<Link to="/products/butterontoast">See More</Link>
					</div>
				</div>
			</div>
			<div className="card-row">
				<div className="product-card">
					<div className="card-title">
						<Link to="/products/toast">LTO: Toast</Link>
					</div>
					<div className="product-image-container">
						<img
							src={toast}
							alt="placeholder"
							className="card-image"
						></img>
					</div>
					<div className="card-description">
						<p className="cd-title">Description</p>
						<p className="cd-description">
							This will be the product description
						</p>
						<p className="cd-price">Price: $100.00</p>
					</div>
					<div className="see-more">
						<Link to="/products/butterontoast">See More</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Products;
