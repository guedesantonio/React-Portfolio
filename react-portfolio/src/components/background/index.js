import React from "react";
import PropTypes from "prop-types";
import WOW from "wowjs";
import Typed from 'react-typed';
import "./styles.css"
import resume from "../../utils/img/About/ANTONIO GUEDES CV.pdf";

export default class Background extends React.Component {
  componentDidMount() {
    new WOW.WOW().init();
  }

  render() {
    return (
      <div id="home" className="intro background">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
        <div className="top-container flex">
          <div className="intro-content display-table">
            <div className="table-cell">
              <div className="container">
                <h1 className="intro-title mb-4">Hello, I am Antonio Guedes</h1>
                <p className="intro-subtitle"><span className="text-slider-items">
                </span><strong className="text-slider"><Typed strings={['Front End Developer', 'Back End Developer', 'Software Engineer']} typeSpeed={80} backDelay={1100} backSpeed={30} loop /></strong></p>
                <p className="pt-3"><a class="btn btn-primary btn-xl text-uppercase" href={resume}>View Resume</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
		);
  }
}

Background.propTypes = {
  aboutRef: PropTypes.object,
  bounceIn: PropTypes.string
};
