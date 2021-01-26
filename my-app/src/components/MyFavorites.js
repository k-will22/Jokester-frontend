import React, {useEffect, useState} from 'react';
import FavoriteItem from "./FavoriteItem"

function MyFavorites ({addedJoke, setAddedJoke, favorite}) {
    const [allFavorites, setAllFavorites] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/favorites")
        .then(r=>r.json())
        .then(arrayOfFavorites => setAllFavorites(arrayOfFavorites))
    }, [])

    function deleteFav (favToDelete) {
        const newFavArray = allFavorites.filter((fav) => fav.id !== favToDelete.id)
        setAllFavorites(newFavArray)
    }

    function handleDelete(addedJokeToDelete) {
        
        const newJokeArray = addedJoke.filter((jk) => jk.joke !== addedJokeToDelete.joke)
        setAddedJoke(newJokeArray)
        //fetch 
        // fetch(`http://localhost:300/jokes/${}`)

        
    }



   const a = allFavorites.map((fav) => {
   return ( 
       <div>
   <FavoriteItem key = {fav.id} fav = {fav} deleteFav = {deleteFav}/>
   <br></br>
   </div>);
   })

   
       const newJokes = addedJoke.map(jk => {
           return (
               <div>
               <ul>
                   <li>{jk.category} - {jk.joke}</li>
                   <button onClick={handleDelete}> delete </button>
                   <button>edit</button>
               </ul>
               </div>
           )
       })



    return (
        <div>
            <div>
        <h1>Favorite Jokes</h1>
        <ul>
           {a}
        </ul>
        </div>
        <h1>Added Jokes</h1>
        {newJokes}
        </div>
    )

  
}

export default MyFavorites