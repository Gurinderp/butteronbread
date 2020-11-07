import React from "react";
import "./index.css";
import placeholder from "../../assets/placeholderimage.png";

function Home() {
	return (
		<div className="homepage-container">
			<div className="section-one section">
				<div className="landing-description">
					<div className="one-description">
						<div className="descript-one">Butter On Bread</div>
						<div className="descript-two">
							The World's Bread and Butter!
						</div>
						<div className="landing-button">
							<button onclick="" className="cont-btn">
								Continue
							</button>
						</div>
					</div>
					<div className="sone-left highlight">
						<div className="landing-product">
							<div className="product-overlay bread">
								<p>Bread</p>
							</div>
						</div>
						<div className="landing-product">
							<div className="product-overlay butter">
								<p>Butter</p>
							</div>
						</div>
					</div>
					<div className="sone-right highlight">
						<div className="landing-product">
							<div className="product-overlay bonbread">
								<p>Butter on Bread</p>
							</div>
						</div>
						<div className="landing-product">
							<div className="product-overlay bontoast">
								<p>Butter on Toast</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="section-two section">
				<div className="stwo-wording">
					<p>WORD SECTION! HERE IS THE WORD SECTION!</p>
				</div>
				<div className="stwo-image home-image">
					<img
						src={placeholder}
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
							src={placeholder}
							alt="placeholder"
							className="sthree-image"
						></img>
					</div>
					<div className="sthree-wording">
						<p>WORD SECTION! HERE IS THE WORD SECTION!</p>
					</div>
				</div>
				<div className="sthree-warning">
					This is the warning that will appear in the warning section.
					Two sample sentences should be enough for now.
				</div>
			</div>
		</div>
	);
}

export default Home;
