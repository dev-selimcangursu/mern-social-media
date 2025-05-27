import React from 'react'
import './UserProfile.css'
function UserProfile({ name, username, image }) {
  return (
    <div className="profile-sidebar-picture-wrapper">
      <img src={image} alt={name} />
      <p className="profile-name">{name}</p>
      <p className="profile-username">{username}</p>
    </div>
  );
}

export default UserProfile