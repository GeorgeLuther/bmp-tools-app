import React, { useState, useRef, useEffect, useContext } from "react";
import QrScanner from "qr-scanner";
import "./Scanner.css";
//import ScanContext from "../../contexts/ScanContext";

function Scanner(props) {
  const ref = useRef();
  const [qrOutput, setQrOutput] = useState("currently no QR code recognized");
  //TODO: check is hasCamera.then() composed right? move out make a single state for no camera, isScanning, qrFound
  const [scanMode, setScanMode] = useState(false); //no camera, scanning, qr found
  const [isQrFound, setIsQrFound] = useState(false);

  useEffect(() => {
    if (ref.current) {
      const qrScanner = new QrScanner(
        ref.current,
        (result) => (
          setQrOutput(`${result.data}`),
          console.log(result),
          setScanMode("qr found")
        ),
        {
          returnDetailedScanResult: true,
          maxScansPerSecond: 1,
          highlightCodeOutline: true,
        }
      );
      const cameraSuccess = () => {
        qrScanner.start();
        setQrOutput("scanning...");
        setScanMode("scanning");
        console.info("camera found, scanning");
      };
      const cameraFail = () => {
        console.warn("camera not found");
        setQrOutput("no camera found");
        setScanMode("no camera");
      };
      QrScanner.hasCamera().then(cameraSuccess, cameraFail);
      console.log(qrScanner.$overlay);
    }
  }, [ref]);

  return (
    //if no camera then get camera or show error
    //
    <div className="scanner">
      <video ref={ref} className="qr-monitor" playsInline></video>
      <p className="qr-output">{qrOutput}</p>
      {/* only show if  */}
      {isQrFound ? (
        <button onClick={() => props.setScanData(qrOutput)}>
          Find in Inventory
        </button>
      ) : (
        <></>
      )}
    </div>
  );
}
//camera monitor
export default Scanner;
