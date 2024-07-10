import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import SellerForm from "./SellerForm";


function Form() {
  const [name, setName] = useState('')
  const [metal, setMetal] = useState('')
  const [type, setType] = useState('')
  const [sellerId, setsellerId] = useState('')
  const [image, setImage] = useState('')
  const [price, setPrice] = useState('')

  const [sellers, setSellers] = useState([])

  useEffect(() => {
    fetch("http://127.0.0.1:5555/sellers")
      .then((r) => r.json())
      .then((sellersArray) => {
        setSellers(sellersArray);
        console.log({ sellersArray });
      })
      .catch((err) => console.error(err));
  }, []);

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
        seller_id: Number(sellerId),
        image: image,
        price: parseFloat(price),
      }),
    })
      .then((r) => r.json())
      .then(() => navigate('/'));
  }

    return (
        <div className="new-item-form">
      <h2>Form to add a new item</h2>
      <form onSubmit={handleSubmit}>
        <select
          name="name"
          value={sellerId}
          onChange={(e) => setsellerId(e.target.value)}
          placeholder="Seller name"
        >
          {sellers.map((seller, i) => {
            return <option key={i} value={seller.id}> {seller.name} </option>
          })}
        </select>
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
      <SellerForm />
    </div>
    )
}

export default Form