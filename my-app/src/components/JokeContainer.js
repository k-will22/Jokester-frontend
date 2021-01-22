import React, {useState, useEffect} from 'react';
import JokeItem from "./JokeItem"

function JokeContainer () {
const [jokes, setJokes] = useState ([])

    return (
        <div className = "Joke Related">
    <h1>Joke Container</h1>
    <JokeItem />

        </div>
    )
}

export default JokeContainer