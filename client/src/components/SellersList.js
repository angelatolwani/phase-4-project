import SellersCard from "./SellersCard";

function SellerList({sellers}) {
    return (
        <ul className="cards">
        {sellers.map((seller) => {
            return <SellersCard key={seller.id} seller={seller} />
        })}
    </ul>
    )
}

export default SellerList