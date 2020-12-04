import React from 'react';

import { ActionButtons } from '../ActionButtons/ActionButtons';
import { SpinnerOverlay } from '../../../shared/SpinnerOverlay/SpinnerOverlay';

export const RightPane = ({ onSubmitFormHandler, isLoading, activeNote, editMode, formData, onChangeHandler, onCancelHandler, onDeleteHandler, setEditMode }) => {
  return (
    <div className="col-md-6 p-0">
      <form onSubmit={onSubmitFormHandler}>
        {
          isLoading &&
          <SpinnerOverlay />
        }
        <div className="form-group m-0">
          <input
            required
            type="text"
            className="form-control"
            placeholder={activeNote || editMode ? "Enter note title" : ""}
            disabled={!editMode}
            value={formData.title}
            onChange={(e) => onChangeHandler(e, 'title')} />
        </div>

        <div className="form-group m-0">
          <textarea
            required
            rows="7"
            className="form-control"
            placeholder={activeNote || editMode ? "Enter note text" : ""}
            disabled={!editMode}
            value={formData.text}
            onChange={(e) => onChangeHandler(e, 'text')} />
        </div>

        <ActionButtons
          activeNote={activeNote}
          editMode={editMode}
          onCancelHandler={onCancelHandler}
          updateEditMode={(value) => setEditMode(value)}
          onDeleteHandler={onDeleteHandler} />

      </form>
    </div>
  )
}