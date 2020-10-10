import React from "react";
import ufmgImg from "../../utils/img/Courses/ufmg-logo-225.png";
import sydneyImg from "../../utils/img/Courses/universityofsydneyLogo.jpg";
import udemyImg from "../../utils/img/About/udemy-2-logo.png";


function Studies() {
  return <section class="page-section" id="studies">
  <div class="container">
    <div class="row">
      <div class="col-lg-12 text-center">
        <h2 class="section-heading text-uppercase">My Most Important and Recent Courses</h2>
        <br/><br/><br/>
      </div>
    </div>
    <div class="row text-center">
      <div class="col-lg-6">
        <span class="fa-4x">
          <img class="course-img" src={ufmgImg} alt=""/>
        </span>
        <h4 class="service-heading">Bachelor in Engineering - Civil </h4>
        <h5>UFMG - 2015</h5>
        <p class="text-muted column-description">This course gave me a multidisciplinary set of skills from the
          integration of the areas of logical thinking, administration, problem solving, economics and statistics.</p>
          <br/>
        <p>More info: <a href="https://ufmg.br/cursos/graduacao/2401/91074">Course page...</a></p>

        <hr/>
      </div>
      <div class="col-lg-6">
        <span class="fa-4x">
          
          <img class="course-img" src={sydneyImg} alt=""/>
        </span>
        <h4 class="service-heading">Full Stack Developer</h4>
        <h5>University of Sydney - 2020</h5>
        <p class="text-muted column-description">This course improved my comprehension of the following technologies:
          HTML5, CSS3, JavaScript, jQuery, Bootstrap, Express.js, React.js, Node.js, Database Theory, MongoDB, MySQL, Command Line, Git and more.</p>
        <p>More info: <a href="https://techbootcamp.sydney.edu.au/wp-content/uploads/sites/3/2019/02/sydney_curriculum_overview_fullstackflex_pt.pdf">Course page...</a></p>
        <hr/>
      </div>
      <div class="col-lg-6">
        <span class="fa-4x">
          <img class="course-img" src={udemyImg} alt=""/>
        </span>
        <h4 class="service-heading">The Advanced Web Developer Bootcamp Course</h4>
        <h5>Udemy - 2019</h5>
        <p class="text-muted column-description">This course improved my comprehension of the following technologies:
          React 16, Redux, D3, ES2015, Testing, CSS Flexbox, Animations, SVG, AJAX and more.</p>
        <p>More info: <a href="https://www.udemy.com/the-advanced-web-developer-bootcamp/">Course page...</a></p>
        <hr class="d-lg-none"/>
      </div>
      <div class="col-lg-6">
        <span class="fa-4x">
          <img class="course-img" src={udemyImg} alt=""/>
        </span>
        <h4 class="service-heading">Node & React: Fullstack Web Development</h4>
        <h5>Udemy - 2019</h5>
        <p class="text-muted column-description">This course improved my comprehension  to combine the React, Redux, Express, and MongoDB technologies to build
           a fullstack web application.</p>
        <p>More info: <a href="https://www.udemy.com/course/node-with-react-fullstack-web-development/">Course page...</a></p>
      </div>
    </div>
  </div>
</section>
  }
  
  export default Studies;