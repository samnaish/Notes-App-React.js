import React from 'react';

const Sidebar = () => {
   return (
      <div className="app__sidebar">
				<div className="app__sidebar-header">
					<h1>Notes</h1>
					<button>Add</button>
				</div>
				<div className="app__sidebar-notes">
					<div className="app__sidebar-note">
						<div className="sidebar__note-title">
							<strong>TITLE</strong>
							<button>Delete</button>
						</div>
						<p>Note preview</p>
						<small className="note-meta"></small>
					</div>
				</div>
			</div>
   )
}
export default Sidebar;