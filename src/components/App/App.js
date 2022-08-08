import { useState, createContext } from "react";
import { BullLogo } from "../../assets/SvgIcons";
import "./App.css";
import Scanner from "../Labels/Scanner";

const ScanContext = createContext({ content: null });

function App() {
  const [scanData, setScanData] = useState("");
  return (
    <ScanContext.Provider value={{ scanData, setScanData }}>
      <div className="App">
        <BullLogo />
        <Scanner scanData={scanData} setScanData={setScanData} />
      </div>
    </ScanContext.Provider>
  );
}

export default App;
