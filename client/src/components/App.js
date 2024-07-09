import { Outlet } from "react-router-dom"
import Header from "./Header";
import { useState } from "react";

function App() {
  const [seller_id, setSeller_id] = useState('')

  console.log(seller_id)

  return (
    <div className="app">
      <header className="App-header">
       <Header seller_id={seller_id} setSeller_id={setSeller_id}/>
      </header>
      <Outlet />
    </div>
  );
}

export default App;
