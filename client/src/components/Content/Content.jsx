import React from 'react';
import './Content.css';
import Header from './Header/Header';

function Content({children}) {
  return (
    <main id="main" className="main-content">
      <Header />
      {children}
    </main>
  );
}

export default Content;
