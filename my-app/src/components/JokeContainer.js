import React, {useEffect, useState} from 'react';
import AddJokeForm from './AddJokeForm';
import JokeItem from "./JokeItem"
import Search from "./Search"


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

    <AddJokeForm newJoke = {newJoke} />

    const displayJokes = jokes.slice(index[0], index + 1)

    const jokesByCategory = displayJokes.filter((jk) => {
        if (category === "All") {
            return jk
        } else {
         return jk.category === category
        }
    });

    const filteredJokes = jokesByCategory.filter((jk) => {
        return jk.joke.toLowerCase().includes(searchTerm.toLowerCase())
    })

    const renderEachJoke = filteredJokes.slice(0).reverse().map((joke) => {
    return <JokeItem aJoke={joke} key={joke.id} index={index} setIndex={setIndex} />
    })

    function handleGetJoke() {
        setIndex((jokeIndex) => (jokeIndex + 1) % jokes.length)
    }

    return (
        <div>
        <Search 
            setSearchTerm={setSearchTerm}
            setCategory={setCategory} />
        <h1>Jokes</h1>
        <button onClick={handleGetJoke}>
        <span>Get New Joke</span>
        </button>
        <br></br><br></br>
        <hr style={{marginLeft: 400, marginRight: 400}}/>
        <div>{renderEachJoke}</div>
        </div>
      
    )
}

export default JokeContainer
