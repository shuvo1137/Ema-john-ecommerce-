import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Component/Header";
import Shop from "./Component/Shop/Shop";
import Order from "./Component/Orders/Order";
import Inventory from "./Component/Inventory/Inventory";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Shop></Shop>}></Route>
        <Route path="/home" element={<Shop></Shop>}></Route>
        <Route path="/order" element={<Order></Order>}></Route>
        <Route path="/inventory" element={<Inventory></Inventory>}></Route>
      </Routes>
    </div>
  );
}

export default App;
