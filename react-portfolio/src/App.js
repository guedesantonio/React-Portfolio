import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.css';
import "./utils/index.scss";
import "./utils/css/app.css";
import Skills from './components/skills';
import Technologies from './components/technologies';

function App() {
 return (
   <div>
    <Navbar/>
    <Skills/>
    <Technologies/>
    </div>
 );
}

export default App;
