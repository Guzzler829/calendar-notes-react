/*

To do:

- add image array and allow user to add one or list of images that appear toward top



*/


import React, { useState } from 'react';
import './Note.css';

export default function Note(props) {

    const [color, setColor] = useState(props.color);
    const [title, setTitle] = useState(props.title);
    const [text, setText] = useState(props.text);
    const [lastEditString, setLastEditString] = useState(props.timeString);
    const [isEditing, setIsEditing] = useState(false);

    const textContainer = (
        <div className='text-container'>
            <h3>{title}</h3>
            <p>{text}</p>
            <p className='last-edit'>Last edit: {lastEditString}</p>
        </div>
    );
    const editContainer = (
        <div className='text-container text-container-edit'>
            <div className='row title-row'>
                <input title='Edit color' type={'color'} value={color} onChange={ (e) => setColor(e.target.value)}></input>
                <input value={title} onChange={ e => setTitle(e.target.value)} type={'text'} placeholder={'Title...'}></input>
            </div>
            <textarea value={text} onChange={ e => setText(e.target.value)} placeholder={'New note...'}></textarea>
        </div>
    );

    function generateTimeString(_24hour) {
        let d = new Date();
        let hour = 0;
        if(_24hour) {
            hour = d.getHours();
        } else {
            if(d.getHours() < 13){
                hour = d.getHours();
            } else {
                hour = d.getHours() - 12;
            }
        }
        if(hour < 10) {
            hour = '0' + hour;
        }
        let minutes = d.getMinutes();
        if(minutes < 10) {
            minutes = '0' + minutes;
        }
        return hour + ':' + minutes + ', ' +  (d.getMonth() + 1) + '/' + d.getDate() + '/' + d.getFullYear().toString().slice(2, 4);
    }

    function deleteNote() {

    }

    function editNote() {
        if(isEditing) {
            setLastEditString(generateTimeString());
            setIsEditing(false)
        } else {
            setIsEditing(true)
        }
    }

    return (
        <div className='note'>
            <div className='tab' style={{backgroundColor: color}}></div>
            {(isEditing ? editContainer : textContainer)}
            <div className='note-controls'>
                <button className='delete' onClick={ () => deleteNote()}>Delete</button>
                {(isEditing ? <button className='edit edit-submit' onClick={ () => editNote()}>Submit</button> : <button className='edit' onClick={ () => editNote()}>Edit</button>)}
                
            </div>
        </div>
    );
}