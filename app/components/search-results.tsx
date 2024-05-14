import {
    MagicCard,
    MagicContainer,
} from "@/components/magicui/magic-card";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import type { PerformanceRecord } from "@/app/dashboard/page" 
import { Star, PlusCircle, MinusCircle } from "lucide-react";

interface SearchResultsProps {
    searchResults?: PerformanceRecord[];
    addSetToItinerary: (performance: PerformanceRecord) => void
    itineraryIds: string[]
    removeSetFromItinerary: (itineraryId: PerformanceRecord) => void
    addSetToFavoriteIds: (performance: PerformanceRecord) => void
    favoritedIds: string[]
}

export function SearchResults({ searchResults, itineraryIds, favoritedIds, addSetToItinerary, removeSetFromItinerary, addSetToFavoriteIds }: SearchResultsProps) {
    console.log(`itinerary: ${itineraryIds}, favorites: ${favoritedIds}`)
    return (
        <div className="p-6">
            <MagicContainer className="grid w-full grid-cols-2 gap-4 auto-cols-auto grid-flow-col">
                {
                    searchResults?.map(result => (
                        <MagicCard className="w-full cursor-pointer items-center justify-center bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#9c40ff_50%,transparent_100%)] shadow-2xl">
                            <div className="flex w-full flex-col content-center">
                                <div className="flex justify-between">
                                    <div className="text-xl">{ result.artist }</div>
                                    <div className="flex gap-4">
                                        { itineraryIds.includes(result.id) ? <MinusCircle onClick={() => removeSetFromItinerary(result) } /> : <PlusCircle onClick={() => addSetToItinerary(result)} /> }
                                        <Star fill={ favoritedIds.includes(result.id) ? "white" : "transparent" } className="fg-white" onClick={() => addSetToFavoriteIds(result)} />
                                    </div>
                                </div>
                                <div className="flex justify-between pt-4">
                                    <div>Date</div>
                                    <p className="text-xs font-mono self-end">{ result.date }</p>
                                </div>
                                <div className="flex justify-between">
                                    <div>Stage</div>
                                    <p className="text-xs font-mono self-end">{ result.stage }</p>
                                </div>
                                <div className="flex justify-between">
                                    <div>Set Time</div>
                                    <p className="text-xs font-mono self-end">{ result.startTime } - { result.endTime }</p>
                                </div>
                            </div>
                        </MagicCard>
                    ))
                }
            </MagicContainer>
        </div>
    )
}