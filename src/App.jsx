import React, { useState } from 'react';
import uuid from 'react-uuid'
import './App.css';

import Sidebar from './components/Sidebar'
import Mainbar from './components/Mainbar'

function App() {
	const [notes, setNotes] = useState([]);

	const onAddNote = () => {
		console.log('added');
		const newNote = {
			id: uuid(),
			title: "untitled note",
			body: "",
			lastModified: Date.now(),
		}
		setNotes([newNote,...notes]);
	}

  return (
    <div className="app__container">
			<Sidebar notes={notes} onAddNote={onAddNote}/>
			<Mainbar/>
    </div>
  );
}

export default App;