import { useState } from "react";
import NotesList from "./components/NotesList";
import { nanoid } from 'nanoid'

const App  = () => {
  const [notes, setNotes] =useState([
   { id: nanoid(),
    text: "This is myt first note",
    date: "22/12/2022"
   },
   { id: nanoid(),
    text: "This is my second note",
    date: "22/12/2022"
   },
   { id: nanoid(),
    text: "This is my third note",
    date: "22/12/2022"
   },
   { id: nanoid(),
    text: "This is my new note",
    date: "23/12/2022"
   }
  ]);


  const addNote = (text) => {
    const date = new Date(); 
    const newNote = {
      id: nanoid(),
      text: text, 
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note)=> note.id !== id);
    setNotes(newNotes);
  }

  return <div className="container"> 
      <NotesList notes={notes} handleAddNote={addNote} handleDeleteNote={deleteNote}/>
  
  </div>
}

export default App;