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
    favorited: boolean
}

export default function BentoDemo() {

    let [ stagedResults, setStagedResults   ] = useState<PerformanceRecord[]>([])
    let [ itinerary, setItinerary           ] = useState<PerformanceRecord[]>([])
    let [ itineraryIds, setItineraryIds     ] = useState<string[]>([])
    let [ favoritedIds, setFavoritedIds     ] = useState<string[]>([])
    let [ doPerformExactSearch, setDoPerformExactSearch ] = useState(true)
    let [ searchResults, setSearchResults   ] = useState<string[]>([])


    function addSetToItinerary(performance: PerformanceRecord) {
        performance.favorited = false
        if(itineraryIds.includes(performance.id)) { return }
        setItineraryIds(prevState => [...prevState, performance.id])
        setItinerary(prevState => [...prevState, performance])
    }

    function removeSetFromItinerary(performance: PerformanceRecord) {
        if(!itineraryIds.includes(performance.id)) { return }
        if(favoritedIds.includes(performance.id)) {
            setFavoritedIds(prevState => prevState.filter(performanceId => performanceId != performance.id))
        }
        setItineraryIds(prevState => prevState.filter(performanceId => performanceId != performance.id))
        setItinerary(prevState => prevState.filter(itineraryItem => itineraryItem.id != performance.id))
    }

    function removeSetFromFavoriteIds(performance: PerformanceRecord) {
        setFavoritedIds(prevState => prevState.filter(performanceId => performanceId != performance.id))
        let curItineraryItem = itinerary.filter(it => it.id == performance.id)[0]
        curItineraryItem.favorited = false
        let otherPerformances = itinerary.filter(it => it.id != performance.id)
        setItinerary([...otherPerformances, curItineraryItem])
    }

    function addSetToFavoriteIds(performance: PerformanceRecord) {

        // Checking if event indicates removal of favorite
        if(favoritedIds.includes(performance.id)) {
            removeSetFromFavoriteIds(performance)
        } else {
            setFavoritedIds(prevState => [ ...prevState, performance.id ])
            let curItineraryItem = itinerary.filter(it => it.id == performance.id)[0]
            
            if(itineraryIds.includes(performance.id) && curItineraryItem) {
                let otherPerformances = itinerary.filter(it => it.id != performance.id)
                setItinerary([...otherPerformances, curItineraryItem])
            } else {
                setItineraryIds(prevState => [...prevState, performance.id])
                performance.favorited = true
                setItinerary(prevState => [...prevState, performance])
            }
        }
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
              <Search 
                setStagedResults={ setStagedResults } 
                doPerformExactSearch={ doPerformExactSearch } 
                setDoPerformExactSearch={ setDoPerformExactSearch } 
            />
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
              <SearchResults 
                searchResults={stagedResults} 
                addSetToItinerary={ addSetToItinerary } 
                itineraryIds={ itineraryIds } 
                favoritedIds={ favoritedIds }
                removeSetFromItinerary={ removeSetFromItinerary }
                addSetToFavoriteIds={ addSetToFavoriteIds }
            />
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
