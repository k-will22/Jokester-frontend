import React from 'react';
import JokeContainer from "./JokeContainer"

function JokeItem ({aJoke}) {

    function handleFavorite() {
        const audioEl = document.getElementsByClassName("audio-element")[0]
        audioEl.play()
    }

    return (
        <div>
        <ul>
            <li>{aJoke.category} </li>
            <li>{aJoke.joke}</li>
        </ul>
        <button onClick={handleFavorite}>Favorite
        <audio className="audio-element">
        <source src="http://static1.grsites.com/archive/sounds/comic/comic007.mp3"></source>
        </audio>
        </button>
        <br></br>
        <br></br>
        </div>
    )
}

export default JokeItem