import React from "react";
import { useHistory } from "react-router-dom";

function LoginContainer({setLoggedIn, setUser}) {
    const history = useHistory()
    
    function handleLogin(username) {
        setLoggedIn(true)
        history.push("/jokes")
    }

    return (
    <div>
    <h1>Login</h1>
    <input type="text" onChange={event => setUser(event.target.value) } autocomplete="off"></input>&nbsp;
    <button onClick={handleLogin}>Login</button>
    </div>
    )
}

export default LoginContainer
