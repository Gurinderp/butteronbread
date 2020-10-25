import React from "react";
import "./index.css"
import { Link } from "react-router-dom";

function Butter() {
    return (
        <div>
            <div><Link to="/products">Back</Link></div>
            <div>Butter</div>
        </div>
    )
}

export default Butter;