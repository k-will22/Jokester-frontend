import React from "react";
import Header from "./Header"
import NavBar from "./NavBar"
import JokeContainer from "./JokeContainer"
import { Redirect, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <JokeContainer />

      
    </div>
  );
}

export default App;
