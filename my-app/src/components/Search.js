import React from 'react';

function Search ({setCategory, setSearchTerm}) {

    function handleCategory(event) {
        setCategory(event.target.value)
    }

    function handleeSearch(event) {
        setSearchTerm(event.target.value)
    }

    return (
        <div>
            <br></br>
            <br></br>
        <label>Search</label>&nbsp;
        <input onChange={handleeSearch} type="text" ></input>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <label>Filter By Category</label>&nbsp;
        <select onChange={handleCategory}>
        <option value="All">All</option>
        <option value="Misc">Misc</option>
        <option value="Pun">Pun</option>
        <option value="Dark">Dark</option>
        <option value="Programming">Programming</option>
        <option value="Spooky">Spooky</option>
        <option value="Christmas">Christmas</option>
        </select>
        </div>
    )
}

export default Search