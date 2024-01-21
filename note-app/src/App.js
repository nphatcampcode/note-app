import { useEffect, useState } from "react";
import NotesList from "./components/NotesList";
import { nanoid } from "nanoid";
import Search from "./components/Search";
import Header from "./components/Header";

const App = () => {
	const [notes, setNotes] = useState([
		{
			id: nanoid(),
			text: 'This is my first note!',
			date: '24/01/2024',
		},
	]);

	const [searchText, setSearchText] = useState('');

	const [darkMode, setDarkMode] = useState(false);
//random quotes
useEffect(() => {
  // Function to fetch a random quote
  const fetchRandomQuote = async () => {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();

      // Set the quote as the initial note text
      setNotes((prevNotes) => [
        {
          id: nanoid(),
          text: data.content,
          date: data.author,
        },
        ...prevNotes.slice(1), // Keep the rest of the notes
      ]);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  // Fetch a random quote when the component mounts
  fetchRandomQuote();
}, []); // Empty dependency array ensures that this effect runs only once








	useEffect(() => {
    try {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		if (savedNotes && savedNotes.length > 0) {
			setNotes(savedNotes);
		}
  } catch (error) {
    console.log("Error parsing JSON from localStorage:", error);
    }
	} ,[]);

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);

	const addNote = (text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			date: date.toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

	return (
		<div className={`${darkMode && 'dark-mode'}`}>
			<div className='container'>
				<Header handleToggleDarkMode={setDarkMode} />
				<Search handleSearchNote={setSearchText} />
				<NotesList
					notes={notes.filter((note) =>
						note.text.toLowerCase().includes(searchText)
					)}
					handleAddNote={addNote}
					handleDeleteNote={deleteNote}
				/>
			</div>
		</div>
	);
};

export default App;