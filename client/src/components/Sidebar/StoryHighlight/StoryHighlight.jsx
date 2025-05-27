import React from 'react'
import './StoryHighlight.css'
function StoryHighlight({ name }) {
  return (
    <div className="story-highlight">
      <span className="story-highlight-image"></span>
      <small className="highlight-name">{name}</small>
    </div>
  );
}
export default StoryHighlight