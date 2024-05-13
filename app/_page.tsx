// "use client"
// import { Flowbite, Checkbox, Label, Card } from "flowbite-react";


// import Image from "next/image";
// import { Button } from "flowbite-react";
// import Search from "@/components/search"
// import DatePicker from "@/components/datePicker"
// import Artists from '@/components/artistsTable'
// import { useState } from "react";
// import Data from '@/data/lineup.json'
// import ArtistCard from '@/components/artistCard'
// import DotPattern from "@/components/magicui/dot-pattern";
// import { cn } from "@/lib/utils";
// import {
//   MagicCard,
//   MagicContainer,
// } from "@/components/magicui/magic-card";


// export default function Home() {

//   type Performance = {
//     stage: string
//     startTime: string
//     endTime: string
//     artist: string
//     date: string
//     id: string
//   }

//   const [ searchValue, setSearchValue ] = useState(String());
//   const [ randomArtist, setRandomArtist ] = useState( Data.artists[Math.floor(Math.random() * Data.artists.length)] );
//   const [ searchDate, setSearchDate ] = useState("04/17/2024");
//   const [ searchAllDates, setDateSearchSensitivity ] = useState(false)
//   const [ itinerary, setItinerary ] = useState<Performance[]>([])
//   const [ itineraryIds, setItineraryIds ] = useState<string[]>([])

//   function addPerformanceToItinerary(performance: any, mustSee = false) {
//     performance = { ...performance, mustSee }
//     if(!itineraryIds.includes(performance.id)) {
//       setItinerary(prevState => [...prevState, performance])
//       setItineraryIds(prevState => [...prevState, performance.id])
//     }
//   }

//   function removePerformanceFromItinerary(performance: Performance) {
//     if(itineraryIds.includes(performance.id)) {
//       setItineraryIds(prevState => prevState.filter(e => e !== performance.id))
//       setItinerary(prevState => prevState.filter(e => e.id !== performance.id))
//     }
//   }

//   return (
//     // <main className="flex min-h-screen flex-col items-center justify-between p-24">

//       <div className="flex h-screen bg-slate-50">
//         <DotPattern className={cn("[mask-image:radial-gradient(1500px_circle_at_center,white,transparent)]")} />
//         <div className="mt-6 mx-auto">
//           <Search setSearchValue={setSearchValue} randomArtist={ randomArtist } />
//           <div className="grid gap-4 grid-flow-col mx-8 my-1">
//             <div className="col-span-9 grow">
//               <DatePicker setSearchDate={ setSearchDate } />
//             </div>
           
//             <div className="col-span-1">
//                 {/* <div className="grid h-full gap-4 grid-cols-2 justify-stretch content-center"> */}
//                 <div className="flex flex-row-reverse h-full">
//                     <Label htmlFor="artist">Search All Dates</Label>
//                     <Checkbox onChange={ event => setDateSearchSensitivity(event.target.checked) }/>
//                 </div>
              
//             </div>
//           </div>

//           <div className="flex flex-row flex-wrap max-w-full gap-4 mx-8 my-3">
//             { Object.values(itinerary).map((performance: any) => (<ArtistCard performance={performance} />)) }
//           </div>

//           <div className="mx-8 my-3">
//             <Artists 
//               searchValue={searchValue} 
//               searchDate={ searchDate } 
//               searchAllDates={ searchAllDates } 
//               addPerformanceToItinerary={ addPerformanceToItinerary }
//               removePerformanceFromItinerary={ removePerformanceFromItinerary }
//               currentItineraryIds={ itineraryIds }
//               />
//           </div>
          
          
//         </div>
//       </div>
//   );
// }
