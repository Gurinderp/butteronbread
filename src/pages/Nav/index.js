import React from "react";
import "./index.css"
import { Link } from "react-router-dom";

function Nav() {
    return(
        <div>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/login">Login</Link>
        </div>
    )
}

export default Nav;