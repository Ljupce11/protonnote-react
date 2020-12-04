import React from 'react';
import { Icon } from '../Icon/Icon';

export const Button = ({ text, action, type, theme, className, icon, disabled }) => {
  return (
    <button
      disabled={disabled}
      type={type ? type : 'button'}
      onClick={action}
      className={`btn btn-${theme} ${className}`}>
      {
        icon &&
        <Icon type={icon} />
      }
      <span>{text}</span>
    </button>
  )
}