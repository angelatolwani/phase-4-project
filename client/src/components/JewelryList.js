import JewelryCard from "./JewelryCard";

function JewelryList({ jewelries }) {
    return (
        <ul className="cards">
            {jewelries.map((jewelry) => {
                return <JewelryCard key={jewelry.id} jewelry={jewelry} />
            })}
            {console.log('in plant list')}
        </ul>
    );
  }
  export default JewelryList;