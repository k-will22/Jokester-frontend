import React from 'react';

function JokeItem ({aJoke}) {


    return (
        <div>
        <h1>Jokes</h1>
        <ul>
            <li>{aJoke.category}: {aJoke.joke} </li>
            
        </ul>
        </div>
    )
}

export default JokeItem