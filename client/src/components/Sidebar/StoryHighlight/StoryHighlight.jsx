import React from "react";
import "./StoryHighlight.css";

function StoryHighlight({ getStories = [] }) {
  return (
    <div className="story-highlight-list">
      {getStories.map((story, index) => (
        <div className="story-highlight" key={index}>
          <span className="story-highlight-image">
            <img src={story.media_url} alt={story.name} />
          </span>
          <small className="highlight-name">{story.user_id.fullname}</small>
        </div>
      ))}
    </div>
  );
}

export default StoryHighlight;
