import React from 'react';
import '../style.css'
  

function LoadingCircle() {
  return (
    <div className="loading-circle">
      <svg viewBox="25 25 50 50">
        <circle cx="50" cy="50" r="20" />
      </svg>
    </div>
  );
}

export default LoadingCircle;