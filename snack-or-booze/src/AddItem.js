import React, {useState} from 'react';


function AddItem() {
  const [item, setItem] = useState({
    type: null,
    id: null,
    name: null,
    description: null,
    recipe: null,
    serve: null
  })

  function handleChange(e) {
    const {name, value} = e.target;
    setItem(item => ({
      ...item,
      [name]: value
    }))
  }


  function handleSubmit(e) {
    e.preventDefault()
    console.log("received")
  }

  return (
    <div>
      <form onSubmit={handleSubmit} method="post">
        <label htmlFor="type">Type: </label>
        <input type="text" name="type" id="type" value={item.type} onChange={handleChange}/>
        <label htmlFor="id">ID: </label>
        <input type="text" name="id" id="id" value={item.id} onChange={handleChange}/>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" value={item.name} onChange={handleChange}/>
        <label htmlFor="desc">Description: </label>
        <input type="textarea" rows="5" cols="20" name="desc" id="desc" value={item.desc} onChange={handleChange}/>
        <label htmlFor="recipe">Recipe: </label>
        <input type="textarea" rows="5" cols="20" name="recipe" id="recipe" value={item.recipe} onChange={handleChange}/>
        <label htmlFor="serve">Serve: </label>
        <input type="textarea" rows="5" cols="20" name="serve" id="serve" value={item.serve} onChange={handleChange}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default AddItem;