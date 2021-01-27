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

    function handleChange(event) {
        console.log(event.target.value)
        setEdJoke({category: "", joke: event.target.value})
    }

    function handleEdit(event) {
        event.preventDefault()
        console.log(event.target.value)     
    
       console.log(edJoke)
        const newJokeArray = addedJoke.filter((jk) => jk.joke !== event.target.value)
        console.log(newJokeArray)
        setAddedJoke([...newJokeArray, edJoke])
        console.log(addedJoke)
    

        fetch("http://localhost:3000/jokes")
        .then(r=> r.json())
        .then(jokeArray => {
            const editedJoke = jokeArray.filter((jk) => jk.joke === event.target.value)
            console.log(editedJoke)
            const edited = {
                joke: edJoke
            }

            console.log(edited)
  
        fetch(`http://localhost:3000/jokes/${editedJoke[0].id}`, {
            method: "PATCH",
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(edited),
          })
          .then(response => response.json())
          .then(data => {
            console.log(data);
          })
        })
    }

   const a = allFavorites.map((fav) => {
   return ( 
       <div>
   <FavoriteItem key = {fav.id} fav = {fav} deleteFav = {deleteFav}/>
   <br></br>
   </div>);
   })

   console.log(addedJoke)
       const newJokes = addedJoke.map(jk => {
           return (
               <div>
               <div className = "added joke" key={jk.joke} style={{marginLeft: 400, marginRight: 400}}>
                <br></br>
               <ul>
                   <li>{jk.joke}</li>
               </ul>
               <button value={jk.joke} onClick={handleDelete}> delete </button>
                    <br></br>
                   <input onChange={handleChange} type="text"></input>&nbsp;
                   <button value={jk.joke} onClick={handleEdit}>Edit</button>
               <br></br>
               <br></br>           
               </div>
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