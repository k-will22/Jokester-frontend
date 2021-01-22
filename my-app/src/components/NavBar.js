import React from 'react';
import { NavLink } from "react-router-dom";

function NavBar () {
    return (
        <div className="navbar">
            <NavLink to="/login" className="border" style={{ textDecoration: 'none' }}>Login</NavLink>&nbsp;
            <NavLink to="/jokes" className="border" style={{ textDecoration: 'none' }}>Jokes</NavLink>&nbsp;
            <NavLink to="/favorites" className="border" style={{ textDecoration: 'none' }}>Favorites</NavLink>&nbsp;
            <NavLink to="/add" className="border" style={{ textDecoration: 'none' }}>Add Joke</NavLink>
        </div>
    )
}

export default NavBar