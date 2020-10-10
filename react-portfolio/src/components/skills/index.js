import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine ,faTasks } from '@fortawesome/free-solid-svg-icons'
import { faJsSquare } from '@fortawesome/free-brands-svg-icons'

export default class Skills extends Component {
  render() {
      return (
<section className="page-section" id="skills">
<div className="container">
<div className="row">
    <div className="col-lg-12 text-center">
    <h2 className="section-heading text-uppercase">My Main Skills</h2>
    <h3 className="section-subheading text-muted">Here are my main strengths.</h3>
    </div>
</div>
<div className="row text-center">
    <div className="col-md-4">
    <span className="social-buttons fa-stack fa-4x">
        <FontAwesomeIcon icon={faJsSquare} />
    </span>
    <h4 className="service-heading">JavaScript / React Development</h4>
    <p className="text-muted column-description">Lately, I have been working as a software developer, building
        web-based systems using mainly JavaScript, React, JQuery, Bootstrap and other related technologies.</p>
    <hr className="d-lg-none"/>
    </div>
    <div className="col-md-4">
    <span className="fa-stack fa-4x">
     <FontAwesomeIcon icon={faChartLine} /> 
    </span>
    <h4 className="service-heading">Business Analysis</h4>
    <p className="text-muted column-description">In a great period of my career, I was responsible for understanding
        business needs and translating them into requirement specifications as well as developing training materials
        and supporting users.</p>
    <hr className="d-md-none"/>
    </div>
    <div className="col-md-4">
    <span className="fa-stack fa-4x">
      <FontAwesomeIcon icon={faTasks} />
    </span>
    <h4 className="service-heading">Problem Solving</h4>
    <p className="text-muted column-description">During all my career as an engineer I have been a problem solver. Being able to work with tools
        that were given, I always was able to develop solutions optimizing costs, time and efficiency. Never afraid of commiting mistakes, to 
        learn and develop the desired outcome.
    </p>
    </div>
</div>
</div>
</section>


     )
  };
}