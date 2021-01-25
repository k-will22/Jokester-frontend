import React from "react";
import { useHistory } from "react-router-dom";

function LoginContainer({setLoggedIn}) {
    const history = useHistory()

    function handleLogin() {
        setLoggedIn(true)
        history.push("/jokes")
    }

    return (
    <div>
    <h1>Login</h1>
    <input type="text" autoComplete="off"></input>&nbsp;
    <button onClick={handleLogin}>Login</button>
    </div>
    )
}

export default LoginContainer

