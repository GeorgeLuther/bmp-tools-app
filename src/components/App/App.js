import { useState } from "react";
import { BullLogo } from "../../assets/SvgIcons";
import "./App.css";
import Scanner from "../Labels/Scanner";
import ItemSearch from "../Inventory/ItemSearch";

function App() {
  const [scanData, setScanData] = useState("");
  return (
    <div className="App">
      <BullLogo />
      <Scanner setScanData={setScanData} />
      <ItemSearch scanData={scanData} />
    </div>
  );
}

export default App;
