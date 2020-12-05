import React from 'react';
import { Button } from '../../../shared/Button/Button';

export const Header = ({ editMode, onEnableNewNote }) => {
  return (
    <div className="col-md-12 bg-light py-3 border">
      <Button
        icon="faPlus"
        theme="primary"
        text="New note"
        disabled={editMode}
        action={onEnableNewNote} />
    </div>
  )
}