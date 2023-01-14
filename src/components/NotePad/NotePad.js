import React, { useState, useEffect } from 'react';
import './NotePad.css';
import Note from '../Note/Note';

export default function NotePad(props) {

    const defaultColor = '#214eff';

    const [notes, setNotes] = useState(props.notes);
    const [color, setColor] = useState(defaultColor);
    const [title, setTitle] = useState(props.title);
    const [text, setText] = useState(props.text);
    const [timeFormatToggle, setTimeFormatToggle] = useState(false);

    useEffect( () => {
        
    }, []);

    const addNote = (title, text, noteColor, lastEdit) => {
        setNotes(notes => [...notes, <Note title={title} text={text} timeString={lastEdit} color={noteColor}/>]);
        //setColor(defaultColor);
        setTitle('');
        setText('');
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
                        <input title='Edit color' type={'color'} value={color} onChange={ (e) => setColor(e.target.value)}></input>
                        <input value={title} onChange={ e => setTitle(e.target.value)} type={'text'} placeholder={'Title...'}></input>
                    </div>
                    <textarea value={text} onChange={ e => setText(e.target.value)} placeholder={'New note...'}></textarea>
                </div>
                <button onClick={() => addNote(title, text, color, generateTimeString(timeFormatToggle))}>fix the ugly and moronic css for the scaling of these inputs<span>+</span></button>
            </div>
        </div>
    );
}