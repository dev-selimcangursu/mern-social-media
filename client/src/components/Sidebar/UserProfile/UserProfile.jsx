import React from "react";
import "./UserProfile.css";

function UserProfile({ name, username, image }) {
  return (
    <div className="profile-sidebar-picture-wrapper">
      <img
        src={`http://www.localhost:5000/public/users/${image}`}
        alt="profile"
      />
      <p className="profile-name">{name || "İsim yok"}</p>
      <p className="profile-username">{username || "Kullanıcı adı yok"}</p>
    </div>
  );
}

export default UserProfile;
