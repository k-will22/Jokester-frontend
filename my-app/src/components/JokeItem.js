import React from 'react';
import JokeContainer from "./JokeContainer"

function JokeItem ({aJoke}) {

    return (
        <div>
        <ul>
            <li>{aJoke.category} </li>
            <li>{aJoke.joke}</li>
        </ul>
        <button>Favorite</button>
        <br></br>
        <br></br>
        <h1>Jokes</h1>
        <ul>
            <li>{aJoke.category}: {aJoke.joke} </li>
            
        </ul>
        </div>
    )
}

export default JokeItem