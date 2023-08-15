"use client"

import React, { useState, useEffect } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

const BarcodeScanner = () => {
  const [data, setData] = useState("Not Found");
  const [torchOn, setTorchOn] = useState(false);
  const [apiResult, setApiResult] = useState(null);

  

  const callApi = async (barcodeData) => {
    try {
      const apiUrl = 'http://localhost:4000';  // Change this to match your server's URL
      const apiEndpoint = `/barcode?upc=${barcodeData}`; // Modify this to match your server's endpoint
      const fullApiUrl = `${apiUrl}${apiEndpoint}`;
  
      const response = await fetch(fullApiUrl);

      if (response.ok) {
        const result = await response.json();
        setApiResult(result);
      } else {
        console.error("API Call Failed ");
        console.error(response.status);
      }
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  useEffect(() => {
    if (data !== "Not Found") {
      callApi(data);
    }
  }, [data]);

  return (
    <>
      <BarcodeScannerComponent
        width={500}
        height={500}
        torch={torchOn}
        onUpdate={(err, result) => {
          if (result) {
            setData(result.text);
          } else {
            setData("Not Found");
          }
        }}
      />
      <p>{data}</p>
      <button onClick={() => setTorchOn(!torchOn)}>
        Switch Torch {torchOn ? "Off" : "On"}
      </button>
      {apiResult && (
        <div>
          <h2>API Result:</h2>
          {apiResult && (
        <div>
          <h2>API Result:</h2>
          {apiResult.items.map((item, index) => (
            <div key={index}>
              <p>EAN: {item.ean}</p>
              <p>Title: {item.title}</p>
              <p>Description: {item.description}</p>
              <p>Brand: {item.brand}</p>
              <p>Category: {item.category}</p>
              <p>Price: {item.offers[0].price}</p>
              <p>Merchant: {item.offers[0].merchant}</p>
              <img src={item.images[0]} alt={`Image ${index}`} />
            </div>
          ))}
        </div>
      )}
        </div>
      )}
    </>
  );
};

export default BarcodeScanner;
