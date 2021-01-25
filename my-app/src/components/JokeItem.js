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
            <li>Category: {aJoke.category} </li>
            <br></br>
            <li>{aJoke.joke}</li>
        </ul>
        <br></br>
        <br></br>
        <button onClick={handleFavorite}>Favorite
        <audio className="audio-element">
        <source src="http://static1.grsites.com/archive/sounds/comic/comic007.mp3"></source>
        </audio>
        </button>
        <br></br>
        <br></br>
        <hr style={{marginLeft: 400, marginRight: 400}}/>
        </div>
    )
}

export default JokeItem