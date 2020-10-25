import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

function Toast() {
    return (
        <div>
            <div><Link to="/products">Back</Link></div>
            <div>Toast</div>
        </div>
    )
}

export default Toast;