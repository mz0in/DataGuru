import React from 'react'
import "../css/menu.css"
import {
    Link
  } from "react-router-dom";
const MenuList = () => (
    <div className="menu-list">
        <Link to="/" className="menu-element" style={{ textDecoration: 'none' }}>
             First
        </Link>
        <Link to="/second" className="menu-element" style={{ textDecoration: 'none' }}>
             Corona
        </Link>
        <Link to="/third" className="menu-element" style={{ textDecoration: 'none' }}>
             Third
        </Link>
    </div>
)

export default MenuList;