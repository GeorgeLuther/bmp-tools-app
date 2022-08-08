import React, { useState, useRef, useEffect, useContext } from "react";
import QrScanner from "qr-scanner";
import "./Scanner.css";
import ScanContext from "../../contexts/ScanContext";

function Scanner(props) {
  const ref = useRef();
  const [scanData, setScanData] = useContext(ScanContext);

  const [qrOutput, setQrOutput] = useState("currently no QR code recognized");
  const [isScanning, setIsScanning] = useState(false);
  const [isQrFound, setIsQrFound] = useState(false);

  useEffect(() => {
    if (ref.current) {
      const qrScanner = new QrScanner(
        ref.current,
        (result) => (
          setQrOutput(`${result.data}`), console.log(result), setIsQrFound(true)
        ),
        {
          returnDetailedScanResult: true,
          maxScansPerSecond: 1,
          highlightCodeOutline: true,
        }
      );
      QrScanner.hasCamera().then(qrScanner.start(), setQrOutput("scanning..."));
    }
  }, [ref]);

  return (
    <div className="Scanner">
      <video ref={ref} className="qr-monitor" playsInline></video>
      <p className="qr-output">{qrOutput}</p>
      {isQrFound ? (
        <button onClick={() => setScanData({ qrOutput })}>
          Find in Inventory
        </button>
      ) : (
        <button disabled></button>
      )}
    </div>
  );
}
//camera monitor
export default Scanner;
