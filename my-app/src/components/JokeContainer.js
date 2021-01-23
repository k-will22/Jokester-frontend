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
        const audioEl = document.getElementsByClassName("audio-element")[0]
        setTimeout(function(){audioEl.play()}, 2000)
        setIndex((jokeIndex) => (jokeIndex + 1) % jokes.length)
    }

    
    return (
        <div>
        <h1>Jokes</h1>
        <button onClick={handleGetJoke}>
        <span>Get New Joke</span>
        <audio className="audio-element">
        <source src="http://static1.grsites.com/archive/sounds/comic/comic007.mp3"></source>
        </audio>
        </button>
        <br></br><br></br>
        <div>{renderEachJoke}</div>
        <div>{ <AddJokeForm newJoke = {newJoke} /> }</div>
        </div>
      
    )
}

export default JokeContainer