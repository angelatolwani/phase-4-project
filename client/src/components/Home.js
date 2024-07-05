import JewelryList from "./JewelryList";

function Home() {
  return (
    <div>
        <div className="filter_grid">
      <div className="filters">
        <select name="metal" id="metal">
          <option value="gold">Gold</option>
          <option value="silver">Silver</option>
        </select>
      </div>
      <div className="filters">
        <select name="type" id="type">
          <option value="rings">Rings</option>
          <option value="earrings">Earrings</option>
          <option value="bracelets">Bracelets</option>
          <option value="necklaces">Necklaces</option>
        </select>
        </div>
        <div className="filters">
        <select name="sellers" id="sellers">
          <option value="name1">Name 1</option>
          <option value="name2">Name 2</option>
          <option value="name3">Name 3</option>
          <option value="name4">Name 4</option>
        </select>
        </div>
        <div className="filters">
        <select name="price" id="price">
          <option value="20">Up to $20</option>
          <option value="50">Up to $50</option>
          <option value="100">Up to $100</option>
          <option value="150+">$150+</option>
        </select>
        </div>
      </div>
      <JewelryList />
    </div>
  );
}

export default Home;
