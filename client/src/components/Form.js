/** 
 * 1) POST method -> add item 
 * 2) handleOnChange -> add to control
 * 3) redirect to home page -> to display all items of the seller (who adds the item)
 * 
 * **/

function Form() {
    return (
        <div className="new-plant-form">
      <h2>Form to add a new item</h2>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Seller name"
        />
        <input
          type="text"
          name="jewelry_name"
          placeholder="Jewelry name"
        />
        <input
          type="text"
          name="metal"
          placeholder="Metal"
        />
        <input
          type="text"
          name="type"
          placeholder="Type"
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
        />
        <button type="submit">Add Item</button>
      </form>
    </div>
    )
}

export default Form