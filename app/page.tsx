"use client"
import { Flowbite } from "flowbite-react";


import Image from "next/image";
import { Button } from "flowbite-react";
import Search from "@/components/search"
import DatePicker from "@/components/datePicker"
import Artists from '@/components/artistsTable'
import { useState } from "react";
import Data from '@/data/lineup.json'

export default function Home() {

  const [searchValue, setSearchValue] = useState(String());
  const [randomArtist, setRandomArtist] = useState( Data.artists[Math.floor(Math.random() * Data.artists.length)] );
  const [searchDate, setSearchDate] = useState("04/17/2024");


  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="flex h-screen">
        <div className="mt-6 mx-auto">
          <Search setSearchValue={setSearchValue} randomArtist={ randomArtist } />
          <div className="mx-8 my-1">
            <DatePicker setSearchDate={ setSearchDate } />
          </div>

          <div className="mx-8 my-3">
            <Artists searchValue={searchValue} searchDate={ searchDate } />
          </div>
          
          
        </div>
      </div>
      



      

    // </main>
  );
}
