import React from 'react';
import { faEdit, faPlus, faSave, faTimes, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Icon = ({ type }) => {
  if (type === 'faPlus') {
    return (
      <FontAwesomeIcon icon={faPlus} className="mr-2" />
    )
  } else if (type === 'faTrashAlt') {
    return (
      <FontAwesomeIcon icon={faTrashAlt} className="mr-2" />
    )
  } else if (type === 'faTimes') {
    return (
      <FontAwesomeIcon icon={faTimes} className="mr-2" />
    )
  } else if (type === 'faSave') {
    return (
      <FontAwesomeIcon icon={faSave} className="mr-2" />
    )
  } else if (type === 'faEdit') {
    return (
      <FontAwesomeIcon icon={faEdit} className="mr-2" />
    )
  } else return null
}