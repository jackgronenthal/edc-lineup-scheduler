"use client"

import { Calendar } from "@/components/ui/calendar";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import {
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
  MagnifyingGlassIcon,
  RocketIcon,
  DragHandleHorizontalIcon
} from "@radix-ui/react-icons";

import { useState } from "react";

import { Search } from "../components/artist-search";
import { SearchResults } from "../components/search-results";
import { Itinerary } from "../components/interary";

export type PerformanceRecord =  {
    stage: string
    startTime: string
    endTime: string
    artist: string
    date: string
    id: string
  }

export default function BentoDemo() {

    let [ stagedResults, setStagedResults ] = useState<PerformanceRecord[]>([])
    let [ itinerary, setItinerary ] = useState<PerformanceRecord[]>([])
    let [ itineraryIds, setItineraryIds] = useState<string[]>([])

    function addSetToItinerary(performance: PerformanceRecord) {
        if(itineraryIds.includes(performance.id)) { return }
        setItineraryIds(prevState => [...prevState, performance.id])
        setItinerary(prevState => [...prevState, performance])
    }

    function removeSetFromItinerary(performance: PerformanceRecord) {
        if(!itineraryIds.includes(performance.id)) { return }
        setItineraryIds(prevState => prevState.filter(performanceId => performanceId != performance.id))
        setItinerary(prevState => prevState.filter(itineraryItem => itineraryItem.id != performance.id))
    }

    const features = [
        {
          Icon: MagnifyingGlassIcon,
          name: "Full artist search",
          description: "Search through the whole lineup in one place.",
          href: "/",
          cta: "",
          className: "col-span-3 lg:col-span-2",
          background: (
              //       <Command className="absolute right-10 top-10 w-[70%] origin-top translate-x-0 border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:-translate-x-10">
              <Search setStagedResults={ setStagedResults }/>
          ), 
        },
        {
          Icon: RocketIcon,
          name: "Schedule",
          description: "Search for artists to find when they're performing.",
          href: "/",
          cta: "",
          className: "col-span-3 lg:col-span-2",
          background: (
              <SearchResults searchResults={stagedResults} addSetToItinerary={ addSetToItinerary } itineraryIds={ itineraryIds } removeSetFromItinerary={ removeSetFromItinerary }/>
          ), 
        },
        {
          Icon: DragHandleHorizontalIcon,
          name: "Itinerary",
          description: "Your itinerary.",
          href: "/",
          cta: "",
          className: "lg:row-start-1 lg:row-end-3 lg:col-start-3 lg:col-end-4",
          background: (
              //       <Command className="absolute right-10 top-10 w-[70%] origin-top translate-x-0 border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:-translate-x-10">
              <Itinerary itinerary={ itinerary } />
          )
        },
      ];

    return (
        <div className="p-8">
            <BentoGrid>
                {features.map((feature, idx) => (
                    <BentoCard key={idx} {...feature} />
                ))}
            </BentoGrid>
        </div>
    );
}
