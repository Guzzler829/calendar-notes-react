import React, { useRef, useState } from 'react';
import './Note.css';

export default function Note(props) {

    const [color, setColor] = useState(props.color);
    const [title, setTitle] = useState(props.title);
    const [text, setText] = useState(props.text);
    const [lastEditString, setLastEditString] = useState(props.timeString);
    const [isEditing, setIsEditing] = useState(false);

    const colorInput = useRef(null);
    const titleInput = useRef(null);
    const textInput = useRef(null);

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
                <input title='Edit color' ref={colorInput} type={'color'} value={color} onChange={ (e) => setColor(e.target.value)}></input>
                <input ref={titleInput} type={'text'} placeholder={'Title...'}></input>
            </div>
            <textarea ref={textInput} placeholder={'New note...'}></textarea>
        </div>
    );

    function deleteNote() {

    }

    function editNote() {
        if(isEditing) {
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
                <button className='edit' onClick={ () => editNote()}>Edit</button>
            </div>
        </div>
    );
}