"use client";

import ListItem from "../component/ListItem";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import HomeIcon from "../../public/home.png";

const page = () => {

  const [location, setLocation] = useState([]);

  const fetchLocations = async () => {
    const response = await fetch("/api/locate");
    const data = await response.json();

    setLocation(data);
  };

  useEffect(() => {
    fetchLocations();
  }, []);
  
  return (
    <div>

      <Link href="/">
        <Image class="mt-12 mx-52 -mb-16"
          src={HomeIcon} alt="Picture of the author" width={40} height={40} />
      </Link>

      <h1 style={{margin: "2px", marginTop: "90px", paddingBottom: "20px", fontSize: "35px"}}><b>Customer List:</b></h1>
      <div>
        {location.map((element) => (
          <ListItem
            aisle_no={element.aisle_number}
          />
        ))}
      </div>
    </div>
  )
}

export default page