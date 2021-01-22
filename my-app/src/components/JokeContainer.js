import React, {useEffect, useState} from 'react';
import JokeItem from "./JokeItem"


function JokeContainer () {
    const [jokes, setJokes] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [category, setCategory] = useState("All")

    useEffect(()=>{
        fetch("")
        .then(r=> r.json())
        .then(jokesData => setJokes(jokesData))
    }, [])

    const renderEachJoke = jokes.map((joke)=> <JokeItem aJoke = {joke} />)


    return (
        <div>{renderEachJoke} </div>
      
    )
}

export default JokeContainer