import { Label, TextInput } from "flowbite-react";
import { HiSearch } from "react-icons/hi";
import { useState } from "react"

export default function Component({ setSearchValue, randomArtist }) {

    return (
        <div className="w-screen">
            <div className="mx-8">
                <div className="block">
                    <Label htmlFor="artist" />
                </div>
                <div className="mt-3">
                    <TextInput id="artist" type="text" icon={HiSearch} placeholder={ randomArtist } required
                        onChange={event => { setSearchValue(event.target.value) }}
                    />
                </div>
            </div>
        </div>
    );
}