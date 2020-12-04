import React from 'react';
import { Button } from '../../../shared/Button/Button';

export const ActionButtons = ({ activeNote, editMode, updateEditMode, onDeleteHandler, onCancelHandler }) => {
  if (activeNote) {
    if (editMode) {
      return (
        <div className="d-flex justify-content-between border p-2">
          <Button icon="faTimes" action={onCancelHandler} theme="outline-secondary" text="Cancel" />
          <div className="d-flex">
            <Button icon="faSave" type="submit" theme="outline-success" className="mr-2" text="Save" />
            <Button icon="faTrashAlt" action={onDeleteHandler} theme="outline-danger" text="Delete" />
          </div>
        </div>
      )
    } else {
      return (
        <div className="d-flex justify-content-end border p-2">
          <Button icon="faEdit" action={() => updateEditMode(true)} theme="outline-primary" text="Edit" />
        </div>
      )
    }
  } else {
    if (editMode) {
      return (
        <div className="d-flex justify-content-between border p-2">
          <Button icon="faTimes" action={onCancelHandler} theme="outline-secondary" text="Cancel" />
          <div className="d-flex">
            <Button icon="faPlus" type="submit" theme="outline-primary" text="Create" />
          </div>
        </div>
      )
    } else {
      return null
    }
  }
}