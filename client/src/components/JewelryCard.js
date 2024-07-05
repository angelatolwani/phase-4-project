function JewelryCard() {
    return (
        <li className="card">
          <img src="https://t4.ftcdn.net/jpg/05/79/13/69/360_F_579136942_Bj9ReQ4A7CDNZaWU03vkrHeiHzBeXILe.jpg" alt="jewelry-image" />
          <h4>Necklace</h4>
          <p>Price: $100</p>
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
        </li>
      );
}

export default JewelryCard