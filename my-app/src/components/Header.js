import LoginContainer from "./LoginContainer"
import React from 'react';
<<<<<<< HEAD

function Header () {
return (
    <LoginContainer />
)
}

export default LoginContainer
=======
import { Link } from "react-router-dom";

function Header () {
return (
    <div>
    <h1>Header</h1>
    <Link to="/login">Login</Link>
    </div>
)
}

export default Header
>>>>>>> main
