import React, {useEffect, useState} from 'react';
import AddJokeForm from './AddJokeForm';
import JokeItem from "./JokeItem"
import Search from "./Search"


function JokeContainer () {
    const [jokes, setJokes] = useState([])
    const [index, setIndex] = useState(0)
    const [searchTerm, setSearchTerm] = useState("")
    const [category, setCategory] = useState("All")

    console.log(searchTerm)
    console.log(category)

    useEffect(()=>{
        fetch("http://localhost:3000/jokes")
        .then(r=> r.json())
        .then(setJokes)
    }, [])

    function newJoke (jokeToAdd) {
        setJokes([...jokes, jokeToAdd])
    }

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
        const audioEl = document.getElementsByClassName("audio-element")[0]
        setTimeout(function(){audioEl.play()}, 2000)
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
        <audio className="audio-element">
        <source src="http://static1.grsites.com/archive/sounds/comic/comic007.mp3"></source>
        </audio>
        </button>
        <br></br><br></br>
        <div>{renderEachJoke}</div>
        <div>{ <AddJokeForm newJoke = {newJoke} /> }</div>
        <div>{renderEachJoke} </div>
        { <AddJokeForm newJoke = {newJoke} /> }
        </div>
      
    )
}

export default JokeContainer