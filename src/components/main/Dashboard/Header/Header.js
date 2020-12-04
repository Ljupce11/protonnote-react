import React from 'react';
import { Button } from '../../../shared/Button/Button';

export const Header = ({ editMode, onEnableNewNote }) => {
  return (
    <div className="col-md-12 bg-light py-3 border">
      <Button disabled={editMode} icon="faPlus" action={onEnableNewNote} theme="primary" text="New note" />
    </div>
  )
}