import React, {useState} from 'react';

function AddJokeForm ({newJoke}) {
    const [category, setCategory] = useState("")
    const [joke, setJoke] = useState("")

    function handleSubmit(event){
        event.preventDefault()

        const formData = {
            category,
            joke
        }

      fetch("http://localhost:3000/jokes", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          })
            .then((r) => r.json())
            .then((newJoke) => {

            });

    }

    return (
        <form onSubmit={handleSubmit} className= "form">
        <h1>Add A Joke</h1>
        <label htmlFor="joke">Your Joke</label>
        <textarea
          id="joke"
          name="joke"
          value={joke}
          onChange={(event) => setJoke(event.target.value)}
        />

<label htmlFor="category">Category</label>
        <select
          name="category"
          id="category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="All">All</option>
          <option value="Misc">Misc</option>
          <option value="Pun">Pun</option>
          <option value="Dark">Dark</option>
          <option value="Programming">Programming</option>
          <option value="Christmas">Christmas</option>
          <option value="Spooky"> Spooky </option>
        </select>


        
        
        </form>
        
    )
}

export default AddJokeForm