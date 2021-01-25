import React, {useState} from 'react';


function JokeItem ({aJoke}) {
    const [wasItFavorited, setWasItFavorited] = useState(false)

    function handleFavoriteButton (event) {
        event.preventDefault()
        setWasItFavorited(!wasItFavorited)

        const audioEl = document.getElementsByClassName("audio-element")[0]
        audioEl.play()

        const newFavItem = {
            joke_id: aJoke.id,
            user_id: 1,
            joke: aJoke.joke
        }

        console.log(newFavItem)

        
        
        const configObj = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newFavItem)
        }
        
        fetch("http://localhost:3000/favorites", configObj)
        
        

    }
    

    return (

        <div className="quote">
        <ul>
            <li>{aJoke.category} </li>
            <li>{aJoke.joke}</li>
        </ul>
        {wasItFavorited ? <button>Already Favorited</button> : 
        <button onClick = {handleFavoriteButton}>favorite
        <audio className="audio-element">
        <source src="http://static1.grsites.com/archive/sounds/comic/comic007.mp3"></source>
        </audio>
        </button> }
        
        <br></br>
        <br></br>
        <hr style={{marginLeft: 400, marginRight: 400}}/>
        </div>
    )
}

export default JokeItem