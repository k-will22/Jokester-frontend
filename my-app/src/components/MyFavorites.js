import React, {useEffect, useState} from 'react';
import FavoriteItem from "./FavoriteItem"

function MyFavorites ({addedJoke, setAddedJoke, favorite}) {
    const [allFavorites, setAllFavorites] = useState([])
    const [edJoke, setEdJoke] = useState("")

    useEffect(() => {
        fetch("http://localhost:3000/favorites")
        .then(r=>r.json())
        .then(arrayOfFavorites => setAllFavorites(arrayOfFavorites))
    }, [])

    function deleteFav (favToDelete) {
        const newFavArray = allFavorites.filter((fav) => fav.id !== favToDelete.id)
        setAllFavorites(newFavArray)
    }

    function handleDelete(event) {
        const newJokeArray = addedJoke.filter((jk) => jk.joke !== event.target.value)
        setAddedJoke(newJokeArray)

        fetch("http://localhost:3000/jokes")
        .then(r=> r.json())
        .then(jokeArray => {
            const deletedJoke = jokeArray.filter((jk) => jk.joke === event.target.value)
            console.log(deletedJoke)
        fetch(`http://localhost:3000/jokes/${deletedJoke[0].id}`, {
        method: "DELETE",
            });
        })
    }

    function handleEdit(event, edJoke) {
        event.preventDefault()
        console.log(edJoke)
        console.log(event.target.value)
       
        // const newJokeArray = addedJoke.filter((jk) => jk.joke !== event.target.value)
        // setAddedJoke(newJokeArray)

        // fetch("http://localhost:3000/jokes")
        // .then(r=> r.json())
        // .then(jokeArray => {
        //     const editedtJoke = jokeArray.filter((jk) => jk.joke === event.target.value)

        //     const edited = {
        //         joke: event.target.value
        //     }
  
        // fetch(`http://localhost:3000/jokes/${editedJoke[0].id}`, {
        //     method: "PATCH",
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(edited),
        //   })
        //   .then(response => response.json())
        //   .then(data => {
        //     console.log('Success:', data);
        //   })
        // })
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
               <div className = "added joke" key={jk.joke}>
               <ul>
                   <li>{jk.category} - {jk.joke}</li>
               </ul>
               <button value={jk.joke} onClick={handleDelete}> delete </button>
               <form onSubmit={handleEdit}>
                   <input onChange={event => setEdJoke(event.target.value)} type="text"></input>&nbsp;
                   <button type="submit">Edit</button>
               </form>
            
               <br></br>
               <br></br>
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