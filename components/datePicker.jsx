"use client";

import { Datepicker } from "flowbite-react";

export default function Component({ setSearchDate }) {

    const handleSelectedDateChange = event => {
        if (String(event).includes("May 17")) { setSearchDate("04/17/2024") }
        if (String(event).includes("May 18")) { setSearchDate("04/18/2024") }
        if (String(event).includes("May 19")) { setSearchDate("04/19/2024") }
    }

    return <Datepicker minDate={new Date(2024, 4, 17)} maxDate={new Date(2024, 4, 19)} onSelectedDateChanged={ event => handleSelectedDateChange(event) }/>;
}