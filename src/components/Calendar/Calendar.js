/*
|--------|
|Outline:|
|--------|

Calendar Component
    Subcomponents
        *Top component is year; click to choose/cycle with arrows
        *Second component is month with arrows to cycle as so:   <- January ->
    Functions
        *change layout of calendar and notepad (vertical, horizontal) with css and js function that adds/removes classes
        *group dates in series to create a new entity that can have its own notes (useful for trips/several day events)
        *change date-cells' background colors - default change color when notes added to a date
        *mark dates with colored markers (perhaps a circle in the corner)

*/
import React from 'react';
import { useState, useEffect } from 'react';
import './Calendar.css';

import calendar from 'calendar-js';

import DateCell from './DateCell/DateCell';

export default function Calendar(props) {

    let d = new Date();
    let initialYear = d.getFullYear();
    let initialMonth = d.getMonth();

    let cal = calendar();

    const [year, setYear] = useState(initialYear);
    const [month, setMonth] = useState(initialMonth);

    const [linearCalendar, setLinearCalendar] = useState([]);
    const [dateCells, setDateCells] = useState([]);

    useEffect( () => {
        let calendarArray = [];
        for(let i = 0; i < 5; i++) {
            for(let j = 0; j < 7; j++) {
                calendarArray.push(cal.of(initialYear, initialMonth).calendar[i][j]);
            }
        }
        //console.log(calendarArray)
        setLinearCalendar(calendarArray);
        setDateCells(linearCalendar.map( (day) => day ? <DateCell date={day} key={day} /> : <DateCell date={' '} key={day} />));
        console.log(dateCells)
    }, []);

    return (
        <div className='calendar'>
            <h1>{year}</h1>
            <h2>{cal.months()[month]}</h2>
            <ul className='week-day-names'>
                <li>Sun</li>
                <li>Mon</li>
                <li>Tue</li>
                <li>Wed</li>
                <li>Thu</li>
                <li>Fri</li>
                <li>Sat</li>
            </ul>
            <div className='date-cells-container'>
                {dateCells}
            </div>
        </div>
    );
}