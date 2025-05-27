// Search.jsx
import React from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './Search.css';

function Search() {
  return (
    <Input
      size="large"
      placeholder="Ara"
      prefix={<SearchOutlined />}
      allowClear
      className="search-input"
      aria-label="Arama"
    />
  );
}

export default Search;
