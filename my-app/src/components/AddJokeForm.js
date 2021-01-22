import React, {useState} from 'react';

function AddJokeForm ({newJoke}) {
    const [formData, setFormData] = useState({ category: "", joke: ""})

    function handleChange (event) {
      setFormData({...formData, [event.target.name]: event.target.value})
    }
    

    function handleSubmit(event){
        event.preventDefault()
        
        const newJokeObj = formData
        
        console.log(newJokeObj)


      fetch("http://localhost:3000/jokes", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newJokeObj),
          })
            .then((r) => r.json())
            .then(newJoke)

    }

    return (
        <form onSubmit={handleSubmit} className= "form">
        <h1>Add A Joke</h1>
        <label htmlFor="joke">Your Joke</label>
        <input
        type = "text"
          id="joke"
          name="joke"
          value={formData.joke}
          onChange={handleChange}
        />

<label htmlFor="category">Category</label>
        <select
          name="category"
          id="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="All">All</option>
          <option value="Misc">Misc</option>
          <option value="Pun">Pun</option>
          <option value="Dark">Dark</option>
          <option value="Programming">Programming</option>
          <option value="Christmas">Christmas</option>
          <option value="Spooky"> Spooky </option>
        </select>

        <button type = "submit">Add Joke</button>
        
        
        </form>
        
    )
}

export default AddJokeForm