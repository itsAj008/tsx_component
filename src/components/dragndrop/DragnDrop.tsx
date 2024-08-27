import React, { useState } from 'react'
import {notesData} from '../data'
import Notes from './Notes'

import { notesItems } from '../types'

function DragnDrop() {

  const [notes, setNotes] = useState<notesItems[]>(notesData)
  return (
    <div>
        
        <Notes notes={notes} setNotes={setNotes}/>
    </div>
  )
}

export default DragnDrop
