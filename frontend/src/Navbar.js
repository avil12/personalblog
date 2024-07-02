import React from 'react';
import Header from './components/Header';
import Welcome from './components/Welcome';
import BlogInfo from './components/BlogInfo';
import './App.css';

function NavbarApp() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <BlogInfo />
    </div>
  );
}

export default NavbarApp;
