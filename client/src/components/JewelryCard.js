import {useState} from 'react'

function JewelryCard( {jewelry, handleDeleteItem, handleUpdatedItem}) {
  const [updatedPrice, setUpdatedPrice] = useState()

  const handleDeleteClick = async() => {
    const response = await fetch(`http://127.0.0.1:5555/${jewelry.id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      alert("Deleted Successfully")
      handleDeleteItem(jewelry.id);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedPrice = {...jewelry, price: e.target.value}
    handleUpdate(updatedPrice)
  }

  const handleUpdate = async() => {
    fetch(`http://127.0.0.1:5555/${jewelry.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type":"application/json",
        },
        body: JSON.stringify({price: updatedPrice})
      })
    .then((response) => response.json())
    .then((data) => handleUpdatedItem(data))
  }

    return (
        <li className="card">
          <img src={jewelry.image} alt="jewelry-image" />
          <h4>{jewelry.name}</h4>
          <p>Price: ${jewelry.price}</p>
          <p>Seller: {jewelry.seller.name}</p>
          <form onSubmit={handleSubmit}>
            <input
              type="number"
              step="0.01"
              placeholder="New price..."
              name="price"
              value={updatedPrice}
              onChange={e => setUpdatedPrice(parseFloat(e.target.value))}
            />
            <button type="submit">Update Price</button>
          </form>
          <div className="btn-group">
          <button onClick={handleDeleteClick}> 
                Delete 
          </button>
          </div>
        </li>
      );
}

export default JewelryCard