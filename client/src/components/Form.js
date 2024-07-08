import { useState } from "react"
import { useNavigate } from "react-router-dom";

function Form() {
  const [name, setName] = useState('')
  const [metal, setMetal] = useState('')
  const [type, setType] = useState('')
  const [seller_id, setSeller_id] = useState('')
  const [image, setImage] = useState('')
  const [price, setPrice] = useState('')

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        metal: metal,
        type: type,
        seller_id: Number(seller_id),
        image: image,
        price: parseFloat(price),
      }),
    })
      .then((r) => r.json())
      .then(() => navigate('/'));
  }

    return (
        <div className="new-plant-form">
      <h2>Form to add a new item</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Seller name"
          value={seller_id}
          onChange={(e) => setSeller_id(e.target.value)}
        />
        <input
          type="text"
          name="jewelry_name"
          placeholder="Jewelry name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="metal"
          placeholder="Metal"
          value={metal}
          onChange={(e) => setMetal(e.target.value)}
        />
        <input
          type="text"
          name="type"
          placeholder="Type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit">Add Item</button>
      </form>
    </div>
    )
}

export default Form