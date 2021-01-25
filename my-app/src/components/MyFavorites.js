import React from 'react';

function MyFavorites ({addedJoke}) {

    const newJokes = addedJoke.map(jk => {
        return (
            <div>
            <ul>
                <li>{jk.category} - {jk.joke}</li>
            </ul>
            </div>
        )
    })
  

    return (
        <div>
        <h1>Favorite Jokes</h1>
        <ul>
            <li>Favorite Joke 1</li>
            <li>Favorite Joke 2</li>
            <li>Favorite Joke 3</li>
        </ul>
        <h1>Added Jokes</h1>
        {newJokes}  
        </div>
    )
}

export default MyFavorites