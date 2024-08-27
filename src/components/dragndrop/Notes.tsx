
import { useEffect, useRef } from 'react'
import {notesItems} from '../types'
import Note from './Note'
import React from 'react';


type notesrefrype = notesItems[];

type notesProps = {
  notes : notesItems[],
  setNotes : React.Dispatch<React.SetStateAction<notesItems[]>>
}

function Notes({notes, setNotes}:notesProps ) {
  useEffect(()=> {
    const savedNotes:notesItems[] = JSON.parse(localStorage.getItem('notes') || '') || []

    const updatedNotes:any = notes.map((note) => {
        const savedNote = savedNotes.find((n) => n.id === note.id);
        if(savedNote) {
            return {...note , position: savedNote.position}
        } else {
            const position = determineNewPosition()
            return {...note, position}
        }
    }) 
    setNotes(updatedNotes)
    localStorage.setItem('notes',JSON.stringify(updatedNotes))

  },[notes.length])

  const noteRefs = useRef<React.RefObject<HTMLDivElement>[]>([])

  const handleDragStart = (note:any,e:any) => {
    const noteRef:any = noteRefs.current[note.id].current;
    const rect = noteRef?.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top; 
    const startPos = note.position;

    console.log(rect ,e.clientX , rect.left)

    const handleMouseMove = (e:any) => {
        const newX = e.clientX - offsetX;
        const newY = e.clientY - offsetY;

        noteRef.style.left = `${newX}px`;
        noteRef.style.top = `${newY}px`;

    }

    const handleMouseUp = () => {
        document.removeEventListener('mouseup',handleMouseUp)
        document.removeEventListener('mousemove',handleMouseMove)

        const finalRect = noteRef?.getBoundingClientRect();
        const newPosition = {x: finalRect?.left , y : finalRect?.top}

        if(checkOverlap(note.id)){
            console.log('overlapping')
            noteRef.style.left = `${startPos.x}px`;
            noteRef.style.top = `${startPos.y}px`;
                
        } else {
            updateNotePosition(note.id,newPosition)
        }

    }

   document.addEventListener('mouseup',handleMouseUp)
   document.addEventListener('mousemove',handleMouseMove)

   const checkOverlap = (id:any) => {
    const currentRef = noteRefs.current[note.id].current;
    const currentRect = currentRef?.getBoundingClientRect();

     return notes.some((note) => {
        if(note.id ===id) return false

        const otherNoteRef = noteRefs.current[note.id].current;
        const otherRect = otherNoteRef?.getBoundingClientRect();
        console.log(currentRect);
        console.log(otherRect)

        const overlap = !( 
            currentRect?.right < otherRect?.left || 
            currentRect?.left > otherRect?.right || 
            currentRect?.bottom < otherRect?.top ||
            currentRect?.top > otherRect?.bottom
            );

        return overlap
     })

 

   } 

   const updateNotePosition = (id,newPosition) => {
    const updatedNotes = notes.map(note => note.id ===id ? {...note , Position : newPosition} : note)
    setNotes(updatedNotes)
    localStorage.setItem('notes',JSON.stringify(updatedNotes))
   }

  }

  function determineNewPosition(){
        const maxX = window.innerWidth - 250;
        const maxY = window.innerHeight - 250;

        return {
            x:Math.floor(Math.random() * maxX ),
            y:Math.floor(Math.random() * maxY )
        }
  }


  return (
    <div>
        {notes.map((note) => {
        if (!noteRefs.current[note.id]) {
            noteRefs.current[note.id] = React.createRef<HTMLDivElement>();
        }

        return (
            <Note
            key={note.id}
            ref={noteRefs.current[note.id]}
            initialPosition={note.position}
            note={note}
             onMouseDown={ (e) => handleDragStart(note,e)}
            />
        );
        })}
  </div>
);
};

export default Notes
