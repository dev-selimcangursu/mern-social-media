import React from 'react'
import './StoryHighlight.css'
function StoryHighlight({ name }) {
  return (
    <div className="story-highlight">
      <span className="story-highlight-image">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkB6My7QsOx8_BbQJnKpNvxaeTvYgfHeT4Ww&s" alt="" />
      </span>
      <small className="highlight-name">{name}</small>
    </div>
  );
}
export default StoryHighlight