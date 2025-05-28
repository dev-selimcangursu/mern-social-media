import React from "react";
import "./SidebarMenu.css";

function SidebarMenu({ items }) {
  return (
    <div className="profile-sidebar-menu-wrapper">
      <ul>
        {items.map(({ icon: Icon, label, href, onClick }, idx) => (
          <li key={idx}>
            <a
              href={href}
              onClick={(e) => {
                if (onClick) {
                  e.preventDefault();
                  onClick();
                }
              }}
              className="menu-item"
            >
              <Icon /> {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SidebarMenu;
