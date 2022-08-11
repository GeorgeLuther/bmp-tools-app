import { useState } from "react";
import { BullLogo } from "../../assets/SvgIcons";
import Scanner from "../Labeling/Scanner/Scanner";
import ItemSearch from "../Inventory/ItemSearch";
import ItemsList from "../Inventory2/InventoryList";

import "./App.css";
function App() {
  const [scanData, setScanData] = useState("");
  return (
    <div className="App">
      <BullLogo />
      <ItemSearch scanData={scanData} />
      <Scanner setScanData={setScanData} />
      <ItemsList></ItemsList>
    </div>
  );
}

export default App;
