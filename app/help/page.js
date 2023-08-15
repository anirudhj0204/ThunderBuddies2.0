"use client";

import { useState } from "react";
import Beacon from "../component/Beacon";
import PersonIcon from "../component/PersonIcon"
import Image from "next/image";
import HomeIcon from "../../public/home.png"
import Link from "next/link";

const page = () => {

  const [aisle_no1, setAisle_no] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('clicked');

    const success = async (position) => {
      const lati = (position.coords.latitude);
      const longi = (position.coords.longitude);
      console.log(lati, longi, aisle_no1);

      try {
        const response = await fetch("/api/locate/new", {
            method: "POST",
            body: JSON.stringify({
                lat: lati,
                long: longi,
                aisle_no: aisle_no1
            })
        })

      } 
      catch (error) {
          console.log(error);
      }
    }


    const error = () => {
      console.log("Unable to fetch location");
    }

    navigator.geolocation.getCurrentPosition(success, error);
    
  }


  return (
    <div>
        
        <Link href="/">
          <Image class="mt-12 mx-52 -mb-16"
            src={HomeIcon} alt="Picture of the author" width={40} height={40} />
        </Link>
        

        <input
          type="number" 
          class="w-72 my-44 mx-24 px-4 py-1 text-gray-800 rounded-full focus:outline-none border-2"
          placeholder="Aisle Number"
          required
          value={aisle_no1}
          onChange={(e) => setAisle_no(e.target.value)}
        />
        <div onClick={handleSubmit}>
              <Beacon />
              <PersonIcon />
        </div>
        {/* <button type="submit">click</button> */}
    </div>
  )
}

export default page