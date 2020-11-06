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
							<button>Continue</button>
						</div>
					</div>
					<div className="sone-left highlight">
						<div className="landing-product">
							<img src={placeholder} alt="placeholder"></img>
						</div>
						<div className="landing-product">
							<img src={placeholder} alt="placeholder"></img>
						</div>
					</div>
					<div className="sone-right highlight">
						<div className="landing-product">
							<img src={placeholder} alt="placeholder"></img>
						</div>
						<div className="landing-product">
							<img src={placeholder} alt="placeholder"></img>
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
				<div className="sthree-countdown">Limited Time Offer</div>
				<div className="sthree-image home-image">
					<img src={placeholder} alt="placeholder"></img>
				</div>
				<div className="sthree-wording">LTO Description</div>
				<div className="sthree-warning">Warning Section</div>
			</div>
		</div>
	);
}

export default Home;
