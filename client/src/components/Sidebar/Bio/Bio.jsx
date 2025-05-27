import React from 'react'
import './Bio.css'
function Bio({ text }) {
  return (
    <div className="profile-sidebar-description-wrapper">
      <p>{text}</p>
    </div>
  );
}

export default Bio