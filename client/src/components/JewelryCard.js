

function JewelryCard( {jewelry}) {
    return (
        <li className="card">
          <img src={jewelry.image} alt="jewelry-image" />
          <h4>{jewelry.name}</h4>
          <p>Price: ${jewelry.price}</p>
          <form>
            <input
              type="number"
              step="0.01"
              placeholder="New price..."
              name="price"
              value='updated-price'
            //   onChange={e => setUpdatedPrice(parseFloat(e.target.value))}
            />
            <button type="submit">Update Price</button>
          </form>
          <div className="btn-group">
          <button> 
                Delete 
          </button>
          </div>
          {console.log('in plant card')}
        </li>
      );
}

export default JewelryCard