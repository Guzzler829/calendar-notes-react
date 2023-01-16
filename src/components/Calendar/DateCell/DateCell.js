import React from 'react';
import './DateCell.css';

export default function DateCell(props) {
    if(props.disabled) {
        return <div className='date-cell date-cell-disabled'></div>;
    } else {
        return (
            <div className='date-cell'>
                {props.date}
            </div>
        );
    }
}