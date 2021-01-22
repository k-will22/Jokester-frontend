import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

function JokeItem () {

    function handleLaugh() {
        return (
            <ReactAudioPlayer
                src="comic007.mp3"
                autoPlay
                controls
            />
        )
    }

    return (
        <div>
        <h1>Jokes</h1>
        <ul>
            <li>Joke 1</li>
            <li>Joke 2</li>
            <li>Joke 3</li>
        </ul>
        <button onClick={handleLaugh}>Laugh</button>
        <ReactAudioPlayer
                src="comic007.mp3"
                autoPlay
                controls
            />
        </div>
    )
}

export default JokeItem