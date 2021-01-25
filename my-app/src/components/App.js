import React, { useState } from "react";
import Header from "./Header"
import NavBar from "./NavBar"
import LoginContainer from "./LoginContainer"
import JokeContainer from "./JokeContainer"
import MyFavorites from "./MyFavorites"
import AddJokeForm from "./AddJokeForm"
import { Redirect, Route, Switch } from "react-router-dom";

function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <div className="App">
      <Header />
      <Route path="/">
            {loggedIn ? <NavBar setLoggedIn={setLoggedIn} /> :
            <LoginContainer setLoggedIn={setLoggedIn} />}
        </Route>
        <Switch>
        <Route path="/jokes">
            {loggedIn ? <JokeContainer /> : <Redirect to="/" />}
        </Route>
        <Route path="/favorites">
            {loggedIn ? <MyFavorites /> : <Redirect to="/" />}
        </Route>
        <Route path="/add">
            {loggedIn ? <AddJokeForm /> : <Redirect to="/" />}
        </Route>
    </Switch>
    </div>
  );
}

export default App;