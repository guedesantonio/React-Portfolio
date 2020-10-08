import React from "react";
import PropTypes from "prop-types";
import WOW from "wowjs";
import Typed from 'react-typed';
import "./styles.css"

export default class Background extends React.Component {
  componentDidMount() {
    new WOW.WOW().init();
  }

  render() {
    return (
      <div id="my-background" className="intro background">
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
                <p className="pt-3"><a className="btn btn-primary btn js-scroll px-4" href="#about" role="button">View My Work</a></p>
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
