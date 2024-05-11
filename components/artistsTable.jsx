"use client";

import { Checkbox, Table, Button } from "flowbite-react";
import Data from '@/data/lineup.json'

export default function Component({ searchValue, searchDate }) {
  return (
    <div className="overflow-x-auto">
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Artist</Table.HeadCell>
          <Table.HeadCell>Stage</Table.HeadCell>
          <Table.HeadCell>Start Time</Table.HeadCell>
          <Table.HeadCell>End Time</Table.HeadCell>
          <Table.HeadCell>Add to Schedule</Table.HeadCell>
        </Table.Head>

        <Table.Body className="divide-y">

            {
                Object.values(Data.performances[searchDate]).flat(Infinity).filter(({ artist, stage }) => searchValue ? artist.includes(searchValue) || stage.includes(searchValue) : true ).map(performancesByArtist => {
                    return (
                        // eslint-disable-next-line
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{performancesByArtist.artist}</Table.Cell>
                            <Table.Cell>{performancesByArtist.stage}</Table.Cell>
                            <Table.Cell>{performancesByArtist.startTime}</Table.Cell>
                            <Table.Cell>{performancesByArtist.endTime}</Table.Cell>
                            <Table.Cell>
                            {/* <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                Add
                            </a> */}
                            <div className="grid gap-4 grid-flow-col justify-stretch">
                                <Button>Add</Button>
                                <Button>Must See</Button>
                            </div>
                            </Table.Cell>
                        </Table.Row>
                    )
                })
            }


            
        </Table.Body>
        </Table>
    </div>
  );
}



    