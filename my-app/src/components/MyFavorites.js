import React, {useEffect, useState} from 'react';
import FavoriteItem from "./FavoriteItem"

function MyFavorites ({favorite}) {
    const [allFavorites, setAllFavorites] = useState([])

    //fetch here and add joke to fav table 

    useEffect(() => {
        fetch("http://localhost:3000/favorites")
        .then(r=>r.json())
        .then(arrayOfFavorites => setAllFavorites(arrayOfFavorites))
    }, [])

    function deleteFav (favToDelete) {
        const newFavArray = allFavorites.filter((fav) => fav.id !== favToDelete.id)
        setAllFavorites(newFavArray)
    }

    

   const a = allFavorites.map((fav) => <FavoriteItem key = {fav.id} fav = {fav} deleteFav = {deleteFav}/>);


   
 

    return (
        <div>
        <h1>Favorite Jokes</h1>
        <ul>
           {a}
        </ul>
        </div>
    )
}

export default MyFavorites