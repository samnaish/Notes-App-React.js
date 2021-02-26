import React from 'react';

const Sidebar = ({ notes, onAddNote, onDeleteNote }) => {
   return (
      <div className="app__sidebar">
				<div className="app__sidebar-header">
					<h1>Notes</h1>
					<button onClick={onAddNote}>Add</button>
				</div>
				<div className="app__sidebar-notes">
				{
					notes.map((note) => {
						return (
							<div key={note.id} className="app__sidebar-note">
								<div className="sidebar__note-title">
									<strong>{note.title}</strong>
									<button onClick={() => onDeleteNote(note.id)}>Delete</button>
								</div>

								<p>{note.body && note.body.substr(0, 100) + "..."}</p>

								<small className="note-meta">Last Modified {new Date(note.lastModified).toLocaleDateString("en-GB", {
									hour: "2-digit",
									minute: "2-digit"
								})}
								</small>
							</div>

						)
					})
				}
				</div>
			</div>
   )
}
export default Sidebar;