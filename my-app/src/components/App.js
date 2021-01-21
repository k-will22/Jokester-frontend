import React from "react";
import Header from "./Header"
import NavBar from "./NavBar"
import JokeContainer from "./JokeContainer"
import LoginContainer from "./LoginContainer"

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <JokeContainer />
      <LoginContainer />
    </div>
  );
}

export default App;


