// Header.jsx
import React from 'react';
import Search from '../Search/Search';
import './Header.css';
import { NotificationOutlined, MessageOutlined } from '@ant-design/icons';
import { Button, Badge, Tooltip } from 'antd';

function Header() {
  return (
    <header id="header" className="header-container">
      <Search />

      <div className="header-right-area">
        <Tooltip title="Bildirimler"m placement="bottom">
          <Badge count={3} style={{backgroundColor:'red',color:'white'}} offset={[0, 4]}>
            <NotificationOutlined className="header-icon" />
          </Badge>
        </Tooltip>

        <Tooltip title="Mesajlar" placement="bottom">
          <Badge count={7} style={{backgroundColor:'red',color:'white'}} offset={[0, 4]}>
            <MessageOutlined className="header-icon" />
          </Badge>
        </Tooltip>

        <Button type="primary" size="medium" className="post-button">
          Post Paylaş
        </Button>
      </div>
    </header>
  );
}

export default Header;
