import React, {useState} from 'react';
import { useHistory } from "react-router-dom";

function AddJokeForm ({newJoke, addedJoke, setAddedJoke}) {
    const [formData, setFormData] = useState({ category: "", joke: ""})
    const history = useHistory()

    function handleChange (event) {
      setFormData({...formData, [event.target.name]: event.target.value})
    }
    
    function handleSubmit(event){
        event.preventDefault()
        
        const newJokeObj = formData
       setAddedJoke([...addedJoke, newJokeObj])
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
            setFormData({ category: "", joke: ""})
            history.push("/favorites")

    }

    return (
      <div>
        <br></br>
        <form onSubmit={handleSubmit} className= "form" autoComplete="off" style={{marginLeft: 200, marginRight: 200}}>
        <h1>Add A Joke</h1>
        <label htmlFor="joke">Your Joke</label>&nbsp;
        <input
        type = "text"
          id="joke"
          name="joke"
          value={formData.joke}
          onChange={handleChange}
        />
&nbsp; &nbsp;
<label htmlFor="category">Category</label>&nbsp;
        <select
          name="category"
          id="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="Misc">Misc</option>
          <option value="Pun">Pun</option>
          <option value="Dark">Dark</option>
          <option value="Programming">Programming</option>
          <option value="Christmas">Christmas</option>
          <option value="Spooky"> Spooky </option>
        </select>
        &nbsp;
        <br></br><br></br><button type = "submit">Add Joke</button>
        </form>
        <br></br><br></br>
      </div>
    )
}

export default AddJokeForm