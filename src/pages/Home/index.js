import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import sectionTwo from "../../assets/butterandbread.jpg";
import LTO from "../../assets/toast.jpg";

function Home() {
	return (
		<div className="homepage-container">
			<div className="section-one section">
				<div className="landing-description">
					<div className="one-description">
						<div className="descript-one">Butter On Bread,</div>
						<div className="descript-two">
							The World's Bread and Butter!
						</div>
						<div className="landing-button">
							<button className="cont-btn">
								<a href="#section-two" className="cont-btn">
									CONTINUE
								</a>
							</button>
						</div>
					</div>
					<div className="sone-left highlight">
						<div className="landing-product">
							<div className="product-overlay bread">
								<Link to="/products/bread">Bread</Link>
							</div>
						</div>
						<div className="landing-product">
							<div className="product-overlay bonbread">
								<Link to="products/butteronbread">
									Butter on Bread
								</Link>
							</div>
						</div>
					</div>
					<div className="sone-right highlight">
						<div className="landing-product">
							<div className="product-overlay butter">
								<Link to="/products/butter">Butter</Link>
							</div>
						</div>
						<div className="landing-product">
							<div className="product-overlay bontoast">
								<Link to="/products/butterontoast">
									Butter on Toast
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="section-two section" id="section-two">
				<div className="stwo-wording">
					<p>
						Since their creation, Bread and Butter have been staple
						foods throughout the world.
					</p>
					<p>
						Now Butter On Bread brings you the soft, mesmerizing
						taste of Butter combined with the iconic and nostalgic
						taste of Bread!
					</p>
				</div>
				<div className="stwo-image home-image">
					<img
						src={sectionTwo}
						alt="placeholder"
						className="stwo-image"
					></img>
				</div>
			</div>
			<div className="section-three section">
				<div className="sthree-countdown">
					<p>
						LIMITED Time Offer:{" "}
						<span className="countdown-timer">00:00:00</span>
					</p>
				</div>
				<div className="sthree-LTO">
					<div className="sthree-image home-image">
						<img
							src={LTO}
							alt="placeholder"
							className="sthree-image"
						></img>
					</div>
					<div className="sthree-wording">
						<p>NOW OFFERING: TOAST</p>
						<p>Available in six different levels.</p>
						<p>LIMITED TIME OFFER</p>
						<div className="LTO-buy">
							<Link to="/products/toast">Click To Buy</Link>
						</div>
					</div>
				</div>
				<div className="sthree-warning">
					<p>
						The product shown is a limited time offer and may not be
						available during purchase. Considering this is just an
						example website, it most definitely isn't.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Home;
