import React from 'react';

function FavoriteItem ({fav, deleteFav}) {
    function handleFavDeleteButton (event) {
        event.preventDefault()
        const configObj = {
            method: "DELETE"
        }
        console.log(fav.id)

        fetch(`http://localhost:3000/favorites/${fav.id}`, configObj)
        .then (r=> r.json())
        .then(deleteFav)
    }
    return (
        <div>
            {fav.joke}
            <button onClick = {handleFavDeleteButton}>Not Funny Anymore</button>
        </div>
    )

}

export default FavoriteItem
