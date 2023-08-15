"use client"

import React, { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import HomeIcon from "../../public/home.png";


const VisitorCounter = () => {
  const [inValue, setInValue] = useState(0);

  useEffect(() => {
    const fetchData = () =>{ 
        fetch('http://localhost:5000/in-value')
      .then((response) => response.json())
      .then((data) => setInValue(data.inValue));
    };

    fetchData();

    const intervalId = setInterval(fetchData, 1000);
    
  }, []);

  

  return (
    <div>

        <Link href="/">
          <Image class="mt-12 mx-52 -mb-16"
            src={HomeIcon} alt="Picture of the author" width={40} height={40} />
        </Link>

        <h1 class="text-3xl mt-24 mx-5"><b>Counter Info</b></h1>

        <div class="container">
          <div
            class="flex flex-col md:grid grid-cols-9 mx-10 ml-36 mt-5 p-2 text-blue-50"
          >

            <div class="flex flex-row-reverse md:contents">
              <div
                class="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 mr-auto shadow-md"
              >
                <p class="leading-tight text-justify">
                  Counter 1
                </p>
                <h3 class="font-semibold text-lg mb-1">Capacity: {inValue}</h3>
              </div>
              <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
                </div>
                <div
                  class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"
                ></div>
              </div>
            </div>

            <div class="flex flex-row-reverse md:contents">
              <div
                class="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 mr-auto shadow-md"
              >
                <p class="leading-tight text-justify">
                  Counter 2
                </p>
                <h3 class="font-semibold text-lg mb-1">Capacity: 5</h3>
              </div>
              <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
                </div>
                <div
                  class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"
                ></div>
              </div>
            </div>

            <div class="flex flex-row-reverse md:contents">
              <div
                class="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 mr-auto shadow-md"
              >
                <p class="leading-tight text-justify">
                  Counter 3
                </p>
                <h3 class="font-semibold text-lg mb-1">Capacity: 7</h3>
              </div>
              <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
                </div>
                <div
                  class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"
                ></div>
              </div>
            </div>
 
          </div>
        </div>

    </div>
  );
};

export default VisitorCounter;
