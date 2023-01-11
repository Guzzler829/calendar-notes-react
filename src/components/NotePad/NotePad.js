import React, { useRef, useState, useEffect } from 'react';
import './NotePad.css';
import Note from '../Note/Note';

export default function NotePad(props) {

    const [notes, setNotes] = useState(props.notes);
    const [color, setColor] = useState('#214eff');
    const [timeFormatToggle, setTimeFormatToggle] = useState(false);

    const titleInput = useRef(null);
    const colorInput = useRef(null);
    const textInput = useRef(null);

    useEffect( () => {
        
    }, []);

    const addNote = (title, text, noteColor, lastEdit) => {
        setNotes(notes => [...notes, <Note title={title} text={text} timeString={lastEdit} color={noteColor}/>]);
    };

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

    return (
        <div className='notepad'>
            <div className='note-container'>
                {notes.map( (note, i) => (
                    <Note 
                        key={note.props.title + i.toString() /* this is sketchy and should be updated */ } 
                        title={note.props.title} 
                        text={note.props.text} 
                        timeString={note.props.timeString}
                        color={note.props.color} 
                    />)
                )}
            </div>
            <div className='input-container'>
                <div className='text-boxes'>
                    <div className='row title-row'>
                        <input title='Edit color' ref={colorInput} type={'color'} value={color} onChange={ (e) => setColor(e.target.value)}></input>
                        <input ref={titleInput} type={'text'} placeholder={'Title...'}></input>
                    </div>
                    <textarea ref={textInput} placeholder={'New note...'}></textarea>
                </div>
                <button onClick={() => addNote(titleInput.current.value, textInput.current.value, colorInput.current.value, generateTimeString(timeFormatToggle))}><span>+</span></button>
            </div>
        </div>
    );
}