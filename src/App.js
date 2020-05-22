import React from 'react';
import logo from './logo.svg';
import './App.css';
import './application.css';
import  Header from "./components/Header";
import  Sidebar from "./components/Sidebar";

const App = () => {
  return <div><Header></Header>
  <Sidebar></Sidebar>
  </div>
};

export default App;
