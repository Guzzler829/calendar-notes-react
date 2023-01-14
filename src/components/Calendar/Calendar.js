/*
|--------|
|Outline:|
|--------|

Calendar Component
    Subcomponents
        *Top component is year; click to choose
        *Second component is month with arrows to cycle as so:   <- January ->
    Functions
        *change layout of calendar and notepad (vertical, horizontal) with css and js function that adds/removes classes
        *group dates in series to create a new entity that can have its own notes (useful for trips/several day events)
        *change date-cells' background colors
        *mark dates with colored markers (perhaps a circle in the corner)

*/
import React from 'react';
import { useState, useEffect } from 'react';

import './Calendar.css';

export default function Calendar(props) {

    let d = new Date();

    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const [year, setYear] = useState(d.getFullYear());
    const [month, setMonth] = useState(monthNames[d.getMonth()]);

    return (
        <div className='calendar'>
            <h1>{year}</h1>
            <h2>{month}</h2>
        </div>
    );
}