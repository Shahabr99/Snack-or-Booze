import React from 'react';
import NavBar from './NavBar';
import axios from 'axios';


function AddItem() {
  function handleSubmit(e) {
    e.preventDefault()
    const response = axios.post('http://localhost:5000')
  }

  return (
    <div>
      <NavBar />
      <main>
      <form onSubmit={handleSubmit} method="post">
        <label htmlFor="type">Type: </label>
        <input type="text" name="type" id="type"/>
        <label htmlFor="id">ID: </label>
        <input type="text" name="id" id="id" />
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="desc">Description: </label>
        <input type="textarea" name="desc" id="desc" />
        <label htmlFor="recipe">Recipe: </label>
        <input type="textarea" name="recipe" id="recipe" />
        <label htmlFor="serve">Serve: </label>
        <input type="textarea" name="serve" id="serve" />
        <button type="submit">Submit</button>
      </form>
      </main>
    </div>
  )
}

export default AddItem;