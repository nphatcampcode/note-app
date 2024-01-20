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

  return <div className="container"> 
      <NotesList notes={notes}/>
  
  </div>
}

export default App;