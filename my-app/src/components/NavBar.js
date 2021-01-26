import React from 'react';
import { NavLink, useHistory } from "react-router-dom";

function NavBar({setLoggedIn, setIndex}) {

    const history = useHistory()

    function handleLogout() {
        setLoggedIn(false)
        setIndex(0)
        history.push("/")
    }

    return (
        <div className="navbar">
            <NavLink to="/jokes" className="border" style={{ textDecoration: 'none' }}>Jokes</NavLink>&nbsp;
            <NavLink to="/favorites" className="border" style={{ textDecoration: 'none' }}>Favorites</NavLink>&nbsp;
            <NavLink to="/add" className="border" style={{ textDecoration: 'none' }}>Add Joke</NavLink>&nbsp;
            <button onClick={handleLogout} className="logout" style={{ textDecoration: 'none' }}>Logout</button>
        </div>
    )
}

export default NavBar