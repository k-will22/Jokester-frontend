import React from 'react';
import { Link } from "react-router-dom";

function NavBar () {
    return (
        <div>
            <Link to="/jokes">Jokes</Link>
            <Link to="/favorites">Favorites</Link>
            <Link to="/add">Add Joke</Link>
        </div>
    )
}

export default NavBar