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
  const [index, setIndex] = useState(0)
  const [user, setUser] = useState("")
  const [addedJoke, setAddedJoke] = useState([])

  console.log(addedJoke)

  return (
    <div className="App">
      <Header />
      {loggedIn ? <h3>Welcome {user}!</h3> : null}
      <Route path="/">
            {loggedIn ? <NavBar setLoggedIn={setLoggedIn} setIndex={setIndex} /> :
            <LoginContainer setLoggedIn={setLoggedIn} setUser={setUser} />}
        </Route>
        <Switch>
        <Route path="/jokes">
            {loggedIn ? <JokeContainer index={index} setIndex={setIndex} /> : <Redirect to="/" />}
        </Route>
        <Route path="/favorites">
            {loggedIn ? <MyFavorites addedJoke={addedJoke} /> : <Redirect to="/" />}
        </Route>
        <Route path="/add">
            {loggedIn ? <AddJokeForm addedJoke={addedJoke} setAddedJoke={setAddedJoke} /> : <Redirect to="/" />}
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
    </Switch>
    </div>
  );
}

export default App;