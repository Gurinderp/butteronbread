import React from "react";
import "./index.css";

function Login() {
	return (
		<div className="login-container">
			<div className="login-p">
				<p className="login-title">Login</p>
				<form className="login-form">
					<label for="email" className="label-name">
						Email:
					</label>
					<br />
					<input
						type="text"
						id="email"
						className="ls-input"
						name="email"
					></input>
					<br />
					<label for="pword" className="label-name">
						Password:
					</label>
					<br />
					<input
						type="password"
						id="pword"
						className="ls-input"
						name="pword"
					></input>
					<br />
					<input
						type="submit"
						className="ls-input ls-btn"
						value="Submit"
					></input>
				</form>
			</div>
			<div className="login-or">
				<p>OR</p>
			</div>
			<div className="signup-p">
				<p className="login-title">Sign Up</p>
				<form className="signup-form">
					<label for="username" className="label-name">
						Username:
					</label>
					<br />
					<input
						type="text"
						id="username"
						className="ls-input"
						name="username"
					></input>
					<br />
					<label for="email" className="label-name">
						Email:
					</label>
					<br />
					<input
						type="text"
						id="email"
						className="ls-input"
						name="email"
					></input>
					<br />
					<label for="pword" className="label-name">
						Password:
					</label>
					<br />
					<input
						type="password"
						id="pword"
						className="ls-input"
						name="pword"
					></input>
					<br />
					<input
						type="submit"
						className="ls-input ls-btn"
						value="Submit"
					></input>
				</form>
			</div>
		</div>
	);
}

export default Login;
