import {useState, useEffect} from "react"
import SellersList from "./SellersList"

function SellerDetails() {
    const [sellers, setSellers] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:5555/sellers")
          .then((r) => r.json())
          .then((sellersArray) => {
            setSellers(sellersArray);
            console.log({ sellersArray });
          })
          .catch((err) => console.error(err));
      }, []);

      return (
        <div>
          <SellersList
            sellers={sellers}
            // handleDeleteItem={handleDeleteItem}
            // handleUpdatedItem={handleUpdatedItem}
          />
        </div>
      );
}

export default SellerDetails