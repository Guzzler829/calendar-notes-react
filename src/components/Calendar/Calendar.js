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
import React, { useCallback } from 'react';
import { useState, useEffect } from 'react';
import './Calendar.css';

import calendar from 'calendar-js';

export default function Calendar(props) {

    let d = new Date();
    let initialYear = d.getFullYear();
    let initialMonth = d.getMonth();

    const [cal, setCal] = useState(calendar());
    //console.log(cal);

    const [year, setYear] = useState(initialYear);
    const [month, setMonth] = useState(initialMonth);

    const [dateCells, setDateCells] = useState([]);

    const changeDate = useCallback((day) => {
        document.title = cal.months()[month] + ' ' + day + ', ' + year;
    }, [cal, year, month]);

    const updateCalendarDates = useCallback(() => {
        let calendarArray = [];
        const selectedMonthCalendar = cal.of(year, month)
        // console.log({ selectedMonthCalendar })
        for(let i = 0; i < selectedMonthCalendar.calendar.length; i++) {
            for(let j = 0; j < selectedMonthCalendar.calendar[0].length; j++) {
                calendarArray.push(selectedMonthCalendar.calendar[i][j]);
            }
        }
        setDateCells(calendarArray.map( (day, i) => day ? <div  key={i} className='date-cell' onClick={() => changeDate(day)}>{day}</div> : <div key={i} className='date-cell date-cell-disabled'></div>));
        return dateCells;
    }, [changeDate, year, month, dateCells, cal]);

    // useEffect(updateCalendarDates, [updateCalendarDates, year, month]);
    //WHY DOESNT IT WORK WHY WHY WHY WHY WHY WHY WHY WHY WHY WHY WHY WHY WHY WHY WHY WHY WHY WHY WHY WHY 

    const [mount, setMount] = useState(false)
    useEffect(() => {
        if(!mount) {
            setMount(true);
            updateCalendarDates();
        }
    },[updateCalendarDates, mount]);

    function changeYear(increment) {
        setYear(year + increment);
        console.log(year)
    }

    function changeMonth(increment) {
        setMonth(month + increment);

        if(month === -1) {
            setMonth(11);
            console.log(month);
            return;
        } else if (month === 12) {
            setMonth(0);
            console.log(month);
            return;
        }

        console.log(month);
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
                <h2>{cal.months()[month] + ' : ' + (month)}</h2>
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