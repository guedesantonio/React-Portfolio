import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.css';
import "./styles/index.scss";
import Skills from './components/skills';

function App() {
 return (
   <div>
    <Navbar/>
    <Skills/>
    </div>
 );
}

export default App;
