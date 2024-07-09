import { useState, useEffect } from "react"


function FilterComponent({seller_id, setSeller_id}) {
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
        <select name='metal' id='metal'>
          <option value='gold'>Gold</option>
          <option value='silver'>Silver</option>
        </select>
      </div>
      <div className='filters'>
      <select
          name="name"
          value={seller_id}
          onChange={(e) => setSeller_id(e.target.value)}
          placeholder="Seller name"
          defaultValue=""
        >
          <option value="">Select Seller</option>
          {sellers.map((seller) => {
            return <option key={seller.id} value={seller.id}> {seller.name} </option>
          })}
        </select>
      </div>
      <div className='filters'>
        <select name='type' id='type'>
          <option value='rings'>Rings</option>
          <option value='earrings'>Earrings</option>
          <option value='bracelets'>Bracelets</option>
          <option value='necklaces'>Necklaces</option>
        </select>
      </div>
      <div className='filters'>
        <select name='price' id='price'>
          <option value='20'>Up to $20</option>
          <option value='50'>Up to $50</option>
          <option value='100'>Up to $100</option>
          <option value='150+'>$150+</option>
        </select>
      </div>
    </div>
  );
}

export default FilterComponent;
