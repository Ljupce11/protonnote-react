import React from 'react';

export const SpinnerOverlay = () => {
  return (
    <div className="overlay w-100 h-100 d-flex justify-content-center align-items-center">
      <div class="spinner-border text-primary" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  )
}