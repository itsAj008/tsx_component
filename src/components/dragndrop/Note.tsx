
import { forwardRef } from 'react';
import {notesItems} from '../types'

type noteProps = {
    note : notesItems,
    initialPosition:any,
} & React.HTMLAttributes<HTMLDivElement>;

const Note = forwardRef<HTMLDivElement, noteProps>(({note , initialPosition, ...props}, ref) => {
    
  return (
    <div className={`absolute border border-black w-44 cursor-move p-2 bg-slate-100`}
    ref = {ref}
     style={{userSelect:"none", top:`${initialPosition?.y}px `, left:`${initialPosition?.x}px` } } {...props}>
        📌 {note.text}
      
    </div>
  )
});

export default Note
