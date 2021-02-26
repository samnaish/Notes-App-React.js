import React from 'react'

const Mainbar = () => {
	return (
		<div className="app__main">
			<div className="app__main-note-edit">
				<input type="text" id="title" autoFocus/>
				<textarea id="body" placeholder="Write your text here..."/>
			</div>
			<div className="app__main-note-preview">
				<h1 className="preview__title">TITLE</h1>
				<div className="markdown__preview">
					note preview
				</div>
			</div>
		</div>
	)
}

export default Mainbar;