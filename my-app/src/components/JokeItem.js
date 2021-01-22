import React from 'react';

function JokeItem () {

        function playAudio() {
          const audioEl = document.getElementsByClassName("audio-element")[0]
          const newJokeList = document.querySelector(".newJokeList")
          const newJoke = "New Joke "
          newJokeList.append(newJoke)
          setTimeout(function(){audioEl.play()}, 2000)
        }

    return (
        <div>
        <h1>Jokes</h1>
        <ul>
            <li>Joke 1</li>
            <li>Joke 2</li>
            <li>Joke 3</li>
        </ul>
        <div>
        <button onClick={playAudio}>
          <span>Get New Joke</span>
        </button>
        <audio className="audio-element">
          <source src="http://static1.grsites.com/archive/sounds/comic/comic007.mp3"></source>
        </audio>
        <div className="newJokeList">

        </div>
      </div>
        </div>
    )
}

export default JokeItem