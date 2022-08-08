import React, {useState} from "react";

function NewPlantForm({onAddPlant}) {

  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [price, setPrice] = useState("")

  function handleSetName(e) {
    setName(e.target.value)
    console.log(e.target.value)
  }

  function handleSetImage(e) {
    setImage(e.target.value)
    console.log(e.target.value)
  }

  function handleSetPrice(e) {
    setPrice(e.target.value)
    console.log(e.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = {
      name: name,
      price: price,
      image: image
    }
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then((r) => r.json())
      .then((newItem) => onAddPlant(newItem))
  }


  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleSetName} type="text" name="name" placeholder="Plant name" />
        <input onChange={handleSetImage} type="text" name="image" placeholder="Image URL" />
        <input onChange={handleSetPrice} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
