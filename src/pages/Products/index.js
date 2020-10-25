import React from "react"
import "./index.css";
import { Link } from "react-router-dom"

function Products() {
    return (
        <div>
            <div>Product 1 <Link to="/products/butteronbread">Bonbread</Link></div>
            <div>Product 2 <Link to="/products/butterontoast">Bontoast</Link></div>
            <div>Product 3 <Link to="/products/butter">Butter</Link></div>
            <div>Product 4 <Link to="/products/bread">Bread</Link></div>
            <div>Product 4 <Link to="/products/toast">Toast</Link></div>
        </div>
    )
}

export default Products;