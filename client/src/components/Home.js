import React, { useEffect, useState } from "react";
import JewelryList from "./JewelryList";
import FilterComponent from "./FIlterComponent";

function Home() {
  const [jewelries, setJewelries] = useState([]);
  const [sellerId, setsellerId] = useState()
  const [metal, setMetal] = useState('')
  const [jewelryType, setJewelryType] = useState('')
  const [lowToHigh, setLowToHigh] = useState(true)


  useEffect(() => {
    fetch("http://127.0.0.1:5555/")
      .then((r) => r.json())
      .then((jewelryArray) => {
        setJewelries(jewelryArray)
      })
      .catch((err) => console.error(err));
  }, []);

  const handleUpdatedItem = (updatedItem) => {
    const updatedItemArray = jewelries.map((jewelry) => {
      if (jewelry.id === updatedItem.id) return updatedItem;
      else return jewelry;
    });
    setJewelries(updatedItemArray);
  };

  const handleDeleteItem = (id) => {
    const updatedJewelryArray = jewelries.filter((jewelry) => {
      return jewelry.id !== id;
    });
    setJewelries(updatedJewelryArray);
  };

  const filteredJewelry = sellerId ? jewelries.filter(jewelry => jewelry.seller_id === Number(sellerId)) : jewelries
  const filterByMetal = metal ? filteredJewelry.filter(jewelry => jewelry.metal.toLowerCase() === metal.toLowerCase()) : filteredJewelry
  const filterByCategory = jewelryType ? filterByMetal.filter(jewelry => jewelry.type.toLowerCase() === jewelryType.toLowerCase()) : filterByMetal
  const sortedJeweleries = lowToHigh ? filterByCategory.sort((a,b) => a.price - b.price) : filterByCategory.sort((a,b) => b.price - a.price)

  return (
    <div>
      {}
      <FilterComponent 
        sellerId={sellerId} 
        setsellerId={setsellerId} 
        metal={metal} 
        setMetal={setMetal}
        jewelryType={jewelryType}
        setJewelryType={setJewelryType}
        lowToHigh={lowToHigh}
        setLowToHigh={setLowToHigh} 
      />
      <JewelryList
        jewelries = {sortedJeweleries}
        handleDeleteItem={handleDeleteItem}
        handleUpdatedItem={handleUpdatedItem}
      />
      
    </div>
  );
}

export default Home;
