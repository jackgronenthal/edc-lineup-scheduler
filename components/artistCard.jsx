import { Card, Button, Dropdown } from "flowbite-react";
import { HiXCircle } from "react-icons/hi";
import RetroGrid from '@/components/magicui/retro-grid'

export default function Component({ performance }) {
    return (
        <div className="relative flex max-w-[20rem]  overflow-hidden rounded-lg border bg-white md:shadow-xl">
            <div className="grid grid-rows-1 gap-4 content-start">
                <span className={`bg-black items-center justify-center m-10 pointer-events-none z-10 h-full whitespace-pre-wrap bg-clip-text text-center text-2xl font-bold leading-none tracking-tighter  ${ performance.mustSee ? "text-transparent bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff]" : String()}`}>
                    { performance.artist }
                </span>
                <span className="">
                    { performance.stage }
                </span>
            </div>
        
            {performance.mustSee ? <RetroGrid /> : <></>}
        </div>
        // <Card className="">
        //     <div className="flex flex-col items-center content-center">
        //         <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{performance.artist}</h5>
        //         <span className="text-sm text-gray-500 dark:text-gray-400">{performance.stage}</span>
        //         <span className="text-sm text-gray-500 dark:text-gray-400">{performance.date}</span>
        //         <p className="my-1">{performance.startTime}-{performance.endTime}</p>
        //     </div>
        //     <div className="grid grow">
        //         <Button size="sm" label={HiXCircle}>Delete</Button>
        //     </div>
            
        // </Card>
    )
}



