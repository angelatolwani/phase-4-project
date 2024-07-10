import { useState, useEffect } from "react"


function FilterComponent({ seller_id, setSeller_id, metal, setMetal, jewelryType, setJewelryType }) {
  const [sellers, setSellers] = useState([])



  useEffect(() => {
    fetch("http://127.0.0.1:5555/sellers")
      .then((r) => r.json())
      .then((sellersArray) => {
        setSellers(sellersArray);
        console.log("Sellers list: " + {sellersArray});
      })
      .catch((err) => console.error(err));
  }, []);


  return (
    <div className='filter_grid'>
      <div className='filters'>
        <select 
          name='metal' 
          value={metal}
          onChange={(e) => setMetal(e.target.value)}
          >
          <option value="">Metals</option>
          <option value='gold'>Gold</option>
          <option value='silver'>Silver</option>
        </select>
      </div>
      <div className='filters'>
      <select
          name="name"
          value={seller_id}
          onChange={(e) => setSeller_id(e.target.value)}
        >
          <option value="">Sellers</option>
          {sellers.map((seller) => {
            return <option key={seller.id} value={seller.id}> {seller.name} </option>
          })}
        </select>
      </div>
      <div className='filters'>
        <select 
          name='category' 
          value={jewelryType}
          onChange={(e) => setJewelryType(e.target.value)}
        >
          <option value="">Category</option>
          <option value='ring'>Rings</option>
          <option value='earrings'>Earrings</option>
          <option value='bracelet'>Bracelets</option>
          <option value='necklace'>Necklaces</option>
        </select>
      </div>
      <div className='filters'>
        <select name='price' id='price'>
          <option>Price</option>
          <option>Low to High</option>
          <option>High to Low</option>
        </select>
      </div>
    </div>
  );
}

export default FilterComponent;
