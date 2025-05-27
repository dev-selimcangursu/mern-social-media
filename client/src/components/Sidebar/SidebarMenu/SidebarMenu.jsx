import React from 'react'
import './SidebarMenu.css'

function SidebarMenu({ items }) {
  return (
    <div className="profile-sidebar-menu-wrapper">
      <ul>
        {items.map(({ icon: Icon, label, href }, idx) => (
          <li key={idx}>
            <a href={href}><Icon /> {label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SidebarMenu