// components/PostCard/PostCard.jsx
import React from "react";
import "./PostCard.css";
import { HeartOutlined, MessageOutlined } from "@ant-design/icons";

function PostCard({ user, image, description }) {
  return (
    <div className="post-card">
      <div className="post-card-header">
        <img className="post-avatar" src={user.avatar} alt={user.name} />
        <span className="post-username">{user.name}</span>
      </div>

      <div className="post-card-image">
        <img src={image} alt="Gönderi" />
      </div>

      <div className="post-card-body">
        <p className="post-description">{description}</p>
        <div className="post-actions">
          <HeartOutlined className="post-icon" />
          <MessageOutlined className="post-icon" />
        </div>
      </div>
    </div>
  );
}

export default PostCard;
