import React from "react";
import BarcodeScanner from "../component/barcode";

const InfoPage = () => {
  return (
    <div>
      <h1>Scan a Barcode</h1>
      <BarcodeScanner />
    </div>
  );
};

export default InfoPage;
