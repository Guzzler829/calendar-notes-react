import React from 'react';
import './DateCell.css';

export default function DateCell(props) {
    return (
        <div className='date-cell'>
            {props.date}
        </div>
    );
}