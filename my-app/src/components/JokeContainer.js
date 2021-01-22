import React, {useEffect, useState} from 'react';
import AddJokeForm from './AddJokeForm';
import JokeItem from "./JokeItem"


function JokeContainer () {
    const [jokes, setJokes] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [category, setCategory] = useState("All")

    useEffect(()=>{
        fetch("http://localhost:3000/jokes")
        .then(r=> r.json())
        .then(jokesData => setJokes(jokesData))
    }, [])

    function newJoke (jokeToAdd) {
        setJokes([...jokes, jokeToAdd])
    }

    const renderEachJoke = jokes.map((joke)=> <JokeItem aJoke = {joke} key={joke.id} />)


    return (
        <div>
        <div>{renderEachJoke} </div>
        <div>{ <AddJokeForm newJoke = {newJoke} /> }</div>
        </div>
      
    )
}

export default JokeContainer