import React from 'react'
import './ProfileStats.css'
function ProfileStats({ stats }) {
  return (
    <div className="profile-sidebar-main-summary-wrapper">
      {stats.map((item, index) => (
        <div key={index} className="profile-sidebar-main-summary">
          <p>{item.value}</p>
          <small>{item.label}</small>
        </div>
      ))}
    </div>
  );
}
export default ProfileStats