import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine ,faTasks } from '@fortawesome/free-solid-svg-icons'
import { faGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Portfolio() {
  return (
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <ul class="list-inline">
              <li class="list-inline-item name">
              2020 © Copyright Antonio Guedes . All Rights Reserved
          </li>
            </ul>
          </div>
          <div class="col-md-4">
            <ul class="list-inline social-buttons">
              <li class="list-inline-item">
                <a href="https://github.com/guedesantonio">
                <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li class="list-inline-item">
                <a href="https://www.linkedin.com/in/antoniogguedes/">
                <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
            </ul>
          </div>
          <div class="col-md-4">
            <ul class="list-inline quicklinks">
              <li class="list-inline-item">
                <a href="mailto:gguedesantonio@gmail.com">
                  gguedesantonio@gmail.com
            </a>
              </li>
              <br/>
                <li class="list-inline-item">
                  <a href="tel:+61 451 631 417">
                    +61 450 628 249
            </a>
                </li>
        </ul>
      </div>
          </div>
        </div>
</footer>
  )
  }
  
  export default Portfolio;