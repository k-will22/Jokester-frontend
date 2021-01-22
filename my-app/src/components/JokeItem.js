import React from 'react';

function JokeItem ({aJoke}) {


    return (
        <div>
        <h1>Jokes</h1>
        
            <li>{aJoke.category} </li>
            <li>{aJoke.joke}</li>
            
        
        </div>
    )
}

export default JokeItem