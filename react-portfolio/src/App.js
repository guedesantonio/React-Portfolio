import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.css';
import "./utils/index.scss";
import "./utils/css/app.css";
import Skills from './components/skills';
import Technologies from './components/technologies';
import Studies from './components/studies';
import Portfolio from './components/portfolio';
import Footer from './components/footer';

function App() {
 return (
   <div>
    <Navbar/>
    <Skills/>
    <Technologies/>
    <Studies/>
    <Portfolio/>
    <Footer/>
    </div>
 );
}

export default App;
