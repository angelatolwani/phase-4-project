import JewelryCard from "./JewelryCard";

function JewelryList({ jewelries, handleDeleteItem, handleUpdatedItem }) {
    return (
        <ul className="cards">
                {jewelries.map((jewelry) => {
                    return <JewelryCard key={jewelry.id} jewelry={jewelry} handleDeleteItem={handleDeleteItem} handleUpdatedItem={handleUpdatedItem}/>
                })}
        </ul>
    );
  }
  export default JewelryList;