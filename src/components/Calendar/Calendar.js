/*
|--------|
|Outline:|
|--------|

Calendar Component
    Subcomponents
        * Top component is year; click to choose/cycle with arrows
        * Second component is month with arrows to cycle as so:   <- January ->
    Functions
        * change layout of calendar and notepad (vertical, horizontal) with css and js function that adds/removes classes
        * group dates in series to create a new entity that can have its own notes (useful for trips/several day events)
        * change date-cells' background colors - default change color when notes added to a date
        * mark dates with colored markers (perhaps a circle in the corner)

*/
import React from 'react';
import { useState, useEffect } from 'react';
import './Calendar.css';

import calendar from 'calendar-js';

export default function Calendar(props) {

    let d = new Date();
    let initialYear = d.getFullYear();
    let initialMonth = d.getMonth();

    let cal = calendar();

    const [year, setYear] = useState(initialYear);
    const [month, setMonth] = useState(initialMonth);

    const [dateCells, setDateCells] = useState([]);

    useEffect( () => {
        updateCalendarDates();
        console.log(dateCells)
    }, []);

    function updateCalendarDates() {
        let calendarArray = [];
        for(let i = 0; i < 5; i++) {
            for(let j = 0; j < 7; j++) {
                calendarArray.push(cal.of(year, month).calendar[i][j]);
            }
        }
        setDateCells(calendarArray.map( (day, i) => day ? <div  key={i} className='date-cell' onClick={() => changeDate(day)}>{day}</div> : <div key={i} className='date-cell date-cell-disabled'></div>));
    }

    function changeDate(day) {
        document.title = cal.months()[month] + ' ' + day + ', ' + year;
    }

    function changeYear(increment) {
        setYear(year + increment);
        updateCalendarDates()
    }

    function changeMonth(increment) {
        setMonth(month + increment);
        if(month < 0) {
            setMonth(11);
        } else if(month > 11) {
            setMonth(0);
        }
        updateCalendarDates();
    }

    return (
        <div className='calendar'>
            <div className='year-container'>
                <button className='arrow arrow-left' onClick={() => changeYear(-1)}></button>
                <h1>{year}</h1>
                <button className='arrow arrow-right' onClick={() => changeYear(1)}></button>
            </div>
            
            <div className='month-container'>
                <button className='arrow arrow-left' onClick={() => changeMonth(-1)}></button>
                <h2>{cal.months()[month]}</h2>
                <button className='arrow arrow-right' onClick={() => changeMonth(1)}></button>
            </div>
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