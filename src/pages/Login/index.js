import React from "react";
import "./index.css";

function Login() {
	return (
		<div className="login-container">
			<div className="login-p">
				<p>Login</p>
				<form className="login-form">
					<label for="email">Email:</label>
					<br />
					<input type="text" id="email" name="email"></input>
					<br />
					<label for="pword">Password:</label>
					<br />
					<input type="password" id="pword" name="pword"></input>
					<input type="submit" value="Submit"></input>
				</form>
			</div>
			<div className="login-or">
				<p>OR</p>
			</div>
			<div className="signup-p">
				<p>Sign Up</p>
				<form className="signup-form">
					<label for="username">Username:</label>
					<br />
					<input type="text" id="username" name="username"></input>
					<br />
					<label for="email">Email:</label>
					<br />
					<input type="text" id="email" name="email"></input>
					<br />
					<label for="pword">Password:</label>
					<br />
					<input type="password" id="pword" name="pword"></input>
					<input type="submit" value="Submit"></input>
				</form>
			</div>
		</div>
	);
}

export default Login;
