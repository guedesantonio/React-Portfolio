import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.css';
import "./utils/index.scss";
import "./utils/css/app.css";
import Skills from './components/skills';
import Technologies from './components/technologies';
import Studies from './components/studies';

function App() {
 return (
   <div>
    <Navbar/>
    <Skills/>
    <Technologies/>
    <Studies/>
    </div>
 );
}

export default App;
