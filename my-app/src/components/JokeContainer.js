import React, {useEffect, useState} from 'react';
import AddJokeForm from './AddJokeForm';
import JokeItem from "./JokeItem"


function JokeContainer () {
    const [jokes, setJokes] = useState([])
    const [index, setIndex] = useState(0)
    const [searchTerm, setSearchTerm] = useState("")
    const [category, setCategory] = useState("All")

    useEffect(()=>{
        fetch("http://localhost:3000/jokes")
        .then(r=> r.json())
        .then(setJokes)
    }, [])

    function newJoke (jokeToAdd) {
        setJokes([...jokes, jokeToAdd])
    }

    const displayJokes = jokes.slice(index, index + 1)

    const renderEachJoke = displayJokes.map((joke) => {
    return <JokeItem aJoke={joke} key={joke.id} index={index} setIndex={setIndex} />
    })

    function handleGetJoke() {
        setIndex((jokeIndex) => (jokeIndex + 1) % jokes.length)
    }
    

    return (
        <div>
        <h1>Jokes</h1>
        <button onClick={handleGetJoke}>Get New Joke</button>
        <br></br><br></br>
        <div>{renderEachJoke}</div>
        <div>{ <AddJokeForm newJoke = {newJoke} /> }</div>
        </div>
      
    )
}

export default JokeContainer