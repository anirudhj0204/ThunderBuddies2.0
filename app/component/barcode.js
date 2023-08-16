"use client"

import React, { useState, useEffect } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

const BarcodeScanner = () => {
  const [data, setData] = useState("");
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
    if (data !== "") {
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
            setData("");
          }
        }}
      />
      <p>{data}</p>
      {/* <button onClick={() => setTorchOn(!torchOn)}>
        Switch Torch {torchOn ? "Off" : "On"}
      </button> */}
      {apiResult && (
        <div>
          {/* <h2>API Result:</h2> */}
          {apiResult && (
        <div>
          {/* <h2>API Result:</h2> */}
          {apiResult.items.map((item, index) => (
            <div>



              {/* ////////////////////// */}


              
              <div class="min-h-screen flex items-center justify-center px-4">
                
                <div class="max-w-4xl  bg-white w-full rounded-lg shadow-xl">
                    <div class="p-4 border-b">
                        <h2 class="text-2xl ">
                            API Result
                        </h2>
                        <p class="text-sm text-gray-500">
                            Product details
                        </p>
                    </div>
                    <div>
                        <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                          <p class="text-gray-600">
                              Title
                          </p>
                          <p>
                              {item.title}
                          </p>
                        </div>

                        <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                          <p class="text-gray-600">
                              Brand
                          </p>
                          <p>
                              {item.brand}
                          </p>
                        </div>

                        <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                          <p class="text-gray-600">
                              Category
                          </p>
                          <p>
                              {item.category}
                          </p>
                        </div>

                        <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                          <p class="text-gray-600">
                              Model
                          </p>
                          <p>
                              {item.model}
                          </p>
                        </div>

                        <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                          <p class="text-gray-600">
                              Lowest Recorded Price
                          </p>
                          <p>
                              $ {item.lowest_recorded_price}
                          </p>
                        </div>

                        <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                          <p class="text-gray-600">
                              Highest Recorded Price
                          </p>
                          <p>
                              $ {item.highest_recorded_price}
                          </p>
                        </div>

                        <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                          <p class="text-gray-600">
                              EAN
                          </p>
                          <p>
                              {item.ean}
                          </p>
                        </div>

                        <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                          <p class="text-gray-600">
                              Dimension
                          </p>
                          <p>
                              {item.dimension}
                          </p>
                        </div>

                        <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                          <p class="text-gray-600">
                              Weight
                          </p>
                          <p>
                              {item.weight}
                          </p>
                        </div>

                        <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                          <p class="text-gray-600">
                              Description
                          </p>
                          <p>
                              {item.description}
                          </p>
                        </div>


                    </div>
                </div>
              </div>



              {/* ////////////////////// */}




              {/*  */}
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
