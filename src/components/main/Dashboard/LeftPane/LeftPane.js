import React from 'react';

export const LeftPane = ({ data, onSelectNoteHandler, activeNote }) => {
  return (
    <div className="col-md-6 p-0">
      <div className="list-group">
        {
          data.map((note, key) => {
            return (
              <button
                key={key}
                type="button"
                className={`list-group-item list-group-item-action ${note.id === activeNote ? 'active' : ''}`}
                onClick={() => onSelectNoteHandler(note.id)}>
                {note.title}
              </button>
            )
          })
        }
      </div>
    </div>
  )
}