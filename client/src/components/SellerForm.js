import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

function SellerForm() {
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [logo, setLogo] = useState('')
  const [website, setWebsite] = useState('')
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("sellers/form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        location: location,
        logo: logo,
        website: website
      }),
    })
      .then((r) => r.json())
      .then(() => navigate('/sellers'));
  }

    return (
    <div className="new-plant-form">
      <h2>Form to add a new seller</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="seller_name"
          placeholder="Seller name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="text"
          name="logo"
          placeholder="Logo"
          value={logo}
          onChange={(e) => setLogo(e.target.value)}
        />
        <input
          type="text"
          name="website"
          placeholder="Website's URL"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
        <button type="submit">Add Seller</button>
      </form>
    </div>
    )
}

export default SellerForm