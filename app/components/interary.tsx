"use client"

import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { PerformanceRecord } from "../dashboard/page"

export type ItineraryEntry = {
    artist: string
    date: string
    stage: string
    startTime: string
    endTime: string
}

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}

const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: "artist",
        header: "Artist",
    },
    {
        accessorKey: "stage",
        header: "Stage",
    },
    {
        accessorKey: "date",
        header: "Date",
    }
]

function DataTable<TData, TValue>({
    columns,
    data,
}: DataTableProps<TData, TValue>) {
    const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
    })
   
    return (
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    )
}

async function getData(): Promise<Payment[]> {
    // Fetch data from your API here.
    return [
      {
        artist: "728ed52f",
        stage: "100",
        date: "pending",
      },
      // ...
    ]
}

interface ItineraryProps {
    itinerary?: PerformanceRecord[]
}

export function Itinerary({ itinerary }: ItineraryProps) {   
    return (
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={itinerary || []} />
      </div>
    )
}