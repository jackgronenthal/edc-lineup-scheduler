"use client"

import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command"

import { useState, useEffect } from "react"
import Data from '@/data/lineup.json'

export function Search() {

    let [ search, setSearch ] = useState(String())
    let [ showSuggestions, setShowSuggestions ] = useState(true)
    let [ results, setResults ] = useState<JSX.Element[]>([])
    
    const suggestedArtists = [ "Sara Landry", "Fisher", "LSDream" ] 

    function handleInput(query: string) {
        setSearch(query)
    }

    function handleSelect(artist: string) {
        console.log(artist)
    }

    function matchArtistsAgainstSearch(query: string) {
        return Object.keys(Data.artists).filter(artist => artist.toLowerCase().includes(query.toLowerCase()))
    }

    function constructArtistCommandItems(artists: string[]): JSX.Element[] {
        return artists.map(artist => createArtistCommandItem(artist))
    }

    function createArtistCommandItem(artist: string) {
        let genre = Object.values(Data.artists).filter(({ name }) => name.toLowerCase() == artist.toLowerCase())[0].genre
        return (
            <CommandItem value={artist} onSelect={() => handleSelect(artist)}>
                    <div className="flex w-full flex-row justify-between content-center">
                        <div>{artist}</div>
                        <p className="text-xs font-mono self-end">{genre}</p>
                    </div>
            </CommandItem>
        )
    }

    useEffect(() => {
        setShowSuggestions(!search) // Disable Suggestions
        let matches = matchArtistsAgainstSearch(search)
        let results = constructArtistCommandItems(matches)
        setResults(results)
    }, [ search ])

    return (
        <div className="p-6">
            <Command onChange={(event: any) => handleInput(event.target.value)}>
                <CommandInput placeholder="Search for an artist..." />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    { showSuggestions && <CommandGroup heading="Suggestions">
                        {suggestedArtists.map(createArtistCommandItem)}
                    </CommandGroup> }
                    { !showSuggestions && (results) }
                </CommandList>
            </Command>
        </div>
    )
}