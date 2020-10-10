import React from "react";
import jobSeeker from "../../utils/img/Portfolio/Job-Seeker.png";
import wantToWatch from "../../utils/img/Portfolio/Want-to-Watch-Series-Manager.png";
import workDay from "../../utils/img/Portfolio/work-day-scheduler.gif";
import codeQuiz from "../../utils/img/Portfolio/code-quiz.gif";
import passwordGenerator from "../../utils/img/Portfolio/password-generator.png";
import employeeTracker from "../../utils/img/Portfolio/Employee-Tracker.png";
import noteTaker from "../../utils/img/Portfolio/note-taker.gif";
import teamProfile from "../../utils/img/Portfolio/Team-Profile-Generator.png";
import weatherDashboard from "../../utils/img/Portfolio/Weather-dashboard.png";

function Portfolio() {
  return (
    <div id="portfolio">
      <section class="page-section" id="books">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <h2 class="section-heading text-uppercase">Portfolio</h2>
              <br /><br /><br /><br />
            </div>
          </div>
          <div class="row">
            <div class="col-md-4 col-sm-6 portfolio-item">
              <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                <div class="portfolio-hover">
                  <div class="portfolio-hover-content">
                    <i class="fas fa-plus fa-3x" />
                  </div>
                </div>
                <img class="img-fluid" src={jobSeeker} alt="" />
              </a>
              <div class="portfolio-caption">
                <h4>Job seeker app</h4>
                <a href="https://github.com/guedesantonio/JOB-SEARCH-APP"><p class="text-muted">GitHub Repo</p></a>
                <a href="https://guedesantonio.github.io/JOB-SEARCH-APP/"><p class="text-muted">Deployed Link</p></a>
                <hr class="d-sm-none" />
              </div>
            </div>
            <div class="col-md-4 col-sm-6 portfolio-item">
              <a class="portfolio-link" data-toggle="modal" href="#portfolioModal2">
                <div class="portfolio-hover">
                  <div class="portfolio-hover-content">
                    <i class="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img class="img-fluid" src={wantToWatch} alt="" />
              </a>
              <div class="portfolio-caption">
                <h4>Want-to-Watch-Series-Manager</h4>
                <a href="https://github.com/Psiko345/Want-to-Watch-Series-Manager"><p class="text-muted">GitHub Repo</p></a>
                <a href="https://damp-dusk-40026.herokuapp.com/"><p class="text-muted">Deployed Link</p></a>
                <hr class="d-sm-none" />
              </div>
            </div>
            <div class="col-md-4 col-sm-6 portfolio-item">
              <a class="portfolio-link" data-toggle="modal" href="#portfolioModal3">
                <div class="portfolio-hover">
                  <div class="portfolio-hover-content">
                    <i class="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img class="img-fluid" src={workDay} alt="" />
              </a>
              <div class="portfolio-caption">
                <h4>Work-Day-Scheduler</h4>
                <a href="https://github.com/guedesantonio/Work-Day-Scheduler"><p class="text-muted">GitHub Repo</p></a>
                <a href="https://guedesantonio.github.io/Work-Day-Scheduler/"><p class="text-muted">Deployed Link</p></a>
                <hr class="d-sm-none" />
              </div>
            </div>
            <div class="col-md-4 col-sm-6 portfolio-item">
              <a class="portfolio-link" data-toggle="modal" href="#portfolioModal4">
                <div class="portfolio-hover">
                  <div class="portfolio-hover-content">
                    <i class="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img class="img-fluid" src={codeQuiz} alt="" />
              </a>
              <div class="portfolio-caption">
                <h4>Code-Quiz</h4>
                <a href="https://github.com/guedesantonio/Code-Quiz"><p class="text-muted">GitHub Repo</p></a>
                <a href="https://guedesantonio.github.io/Code-Quiz/"><p class="text-muted">Deployed Link</p></a>
                <hr class="d-sm-none" />
              </div>
            </div>
            <div class="col-md-4 col-sm-6 portfolio-item">
              <a class="portfolio-link" data-toggle="modal" href="#portfolioModal5">
                <div class="portfolio-hover">
                  <div class="portfolio-hover-content">
                    <i class="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img class="img-fluid" src={passwordGenerator} alt="" />
              </a>
              <div class="portfolio-caption">
                <h4>Password-Generator</h4>
                <a href="https://github.com/guedesantonio/Password-Generator"><p class="text-muted">GitHub Repo</p></a>
                <a href="https://guedesantonio.github.io/Password-Generator/"><p class="text-muted">Deployed Link</p></a>
                <hr class="d-sm-none" />
              </div>
            </div>
            <div class="col-md-4 col-sm-6 portfolio-item">
              <a class="portfolio-link" data-toggle="modal" href="#portfolioModal6">
                <div class="portfolio-hover">
                  <div class="portfolio-hover-content">
                    <i class="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img class="img-fluid" src={weatherDashboard} alt="" />
              </a>
              <div class="portfolio-caption">
                <h4>Weather-Dashboard</h4>
                <a href="https://github.com/guedesantonio/Weather-Dashboard"><p class="text-muted">GitHub Repo</p></a>
                <a href="https://guedesantonio.github.io/Weather-Dashboard/"><p class="text-muted">Deployed Link</p></a>
                <hr class="d-sm-none" />
              </div>
            </div>
            <div class="col-md-4 col-sm-6 portfolio-item">
              <a class="portfolio-link" data-toggle="modal" href="#portfolioModal7">
                <div class="portfolio-hover">
                  <div class="portfolio-hover-content">
                    <i class="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img class="img-fluid" src={employeeTracker} alt="" />
              </a>
              <div class="portfolio-caption">
                <h4>Employee Tracker</h4>
                <a href="https://github.com/guedesantonio/Employee-Tracker"><p class="text-muted">GitHub Repo</p></a>
                <a href="https://drive.google.com/file/d/1hGJstr4FPXz8M642CLtMm9xgpa1vZnmn/view"><p class="text-muted">Click here to see the functionality of this app.</p></a>
                <hr class="d-sm-none" />
              </div>
            </div>
            <div class="col-md-4 col-sm-6 portfolio-item">
              <a class="portfolio-link" data-toggle="modal" href="#portfolioModal8">
                <div class="portfolio-hover">
                  <div class="portfolio-hover-content">
                    <i class="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img class="img-fluid" src={noteTaker} alt="" />
              </a>
              <div class="portfolio-caption">
                <h4>Note Taker APP</h4>
                <a href="https://github.com/guedesantonio/Note-Taker"><p class="text-muted">GitHub Repo</p></a>
                <a href="https://fast-brook-67955.herokuapp.com/"><p class="text-muted">Deployed link.</p></a>
                <hr class="d-sm-none" />
              </div>
            </div>
            <div class="col-md-4 col-sm-6 portfolio-item">
              <a class="portfolio-link" data-toggle="modal" href="#portfolioModal9">
                <div class="portfolio-hover">
                  <div class="portfolio-hover-content">
                    <i class="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img class="img-fluid" src={teamProfile} alt="" />
              </a>
              <div class="portfolio-caption">
                <h4>Team-Profile-Generator</h4>
                <a href="https://github.com/guedesantonio/Team-Profile-Generator"><p class="text-muted">GitHub Repo</p></a>
                <a href="https://drive.google.com/file/d/1KQnTliIxf2PLpnME1_WLn7zAExDcEONh/view"><p class="text-muted">Click here to see the functionality of this app.</p></a>
                <hr class="d-sm-none" />
              </div>
            </div>
          </div>
          <br /><br />
          <div id="goodreads" class="row">
            <div class="col-md-12">
              <h5>For more: <a href="https://github.com/guedesantonio">GitHub Profile</a></h5>
            </div>
          </div>
        </div>
      </section>

      <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
              <div class="lr">
                <div class="rl"></div>
              </div>
            </div>
            <div class="container">
              <div class="row">
                <div class="col-lg-8 mx-auto">
                  <div class="modal-body">
                    <h2 class="text-uppercase">IT’s the Job!</h2>
                    <img class="img-fluid" src={jobSeeker} alt="" />
                    <p>
                      A Job searching application that run in the browser and feature dynamically updated HTML and CSS using JavaScript (jQuery). This project is a app with search functionality to find current open positions in the UK for multiple cities and also reccomend relevant books to read for that positons subject. It uses the ADZUNA API to retrieve data for the positions and Google Books API to retrieve data for the books, AJAX to hook into the API to retrieve the data in JSON format, dynamically updated HTML and CSS powered by jQuery, and displays a search history which the user can click to access past positons searched via local storage.
            </p>
                    <br />
              Deployed Link: <a href="https://guedesantonio.github.io/JOB-SEARCH-APP/">Here</a>
                    <br /><br />
                    <button class="btn btn-primary" data-dismiss="modal" type="button">
                      <i class="fas fa-times"></i>
              Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
              <div class="lr">
                <div class="rl"></div>
              </div>
            </div>
            <div class="container">
              <div class="row">
                <div class="col-lg-8 mx-auto">
                  <div class="modal-body">
                    <h2 class="text-uppercase">Want-to-Watch-Series-Manager</h2>
                    <img class="img-fluid" src={wantToWatch} alt="" />
                    <p>
                      Want-to-Watch Movie Manager is a website which allows users to search movies available in the market and keep track of them. </p>
                    <br />
                  Deployed Link: <a href="https://damp-dusk-40026.herokuapp.com/">Here</a>
                    <br /><br />
                    <button class="btn btn-primary" data-dismiss="modal" type="button">
                      <i class="fas fa-times"></i>
                  Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
              <div class="lr">
                <div class="rl"></div>
              </div>
            </div>
            <div class="container">
              <div class="row">
                <div class="col-lg-8 mx-auto">
                  <div class="modal-body">
                    <h2 class="text-uppercase">Work-Day-Scheduler</h2>
                    <img class="img-fluid" src={workDay} alt="" />
                    <p>
                      A planner for a typical work day (0900 to 1700) created using HTML and JavaScript (jQuery). This web page also incorporates the usage of the Moment.js library to display the date and time. Events can be entered in the row corresponding to the time, which can then be saved. The color/focus of the row changes with the time: grey being time past, light blue being the current hour and dark blue for events later in the day.</p>
                    <br />
                  Deployed Link: <a href="https://guedesantonio.github.io/Work-Day-Scheduler/">Here</a>
                    <br /><br />
                    <button class="btn btn-primary" data-dismiss="modal" type="button">
                      <i class="fas fa-times"></i>
                  Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="portfolio-modal modal fade" id="portfolioModal4" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
              <div class="lr">
                <div class="rl"></div>
              </div>
            </div>
            <div class="container">
              <div class="row">
                <div class="col-lg-8 mx-auto">
                  <div class="modal-body">
                    <h2 class="text-uppercase">Code-Quiz</h2>
                    <img class="img-fluid" src={codeQuiz} alt="" />
                    <p>
                      An timed code quiz with multiple-choice questions. This app will run in the browser and feature dynamically updated HTML and CSS powered by a JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes. The important part of coding this application was to do it only with pure Javascript and no JS library.</p>
                    <br />
                  Deployed Link: <a href="https://guedesantonio.github.io/Code-Quiz/">Here</a>
                    <br /><br />
                    <button class="btn btn-primary" data-dismiss="modal" type="button">
                      <i class="fas fa-times"></i>
                  Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="portfolio-modal modal fade" id="portfolioModal5" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
              <div class="lr">
                <div class="rl"></div>
              </div>
            </div>
            <div class="container">
              <div class="row">
                <div class="col-lg-8 mx-auto">
                  <div class="modal-body">
                    <h2 class="text-uppercase">Password-Generator</h2>
                    <img class="img-fluid" src={passwordGenerator} alt="" />
                    <p>
                      An application that generates a random password based on user-selected criteria. This app will run in the browser and feature dynamically updated HTML and CSS powered by a JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.</p>
                    <br />
                  Deployed Link: <a href="https://guedesantonio.github.io/Password-Generator/">Here</a>
                    <br /><br />
                    <button class="btn btn-primary" data-dismiss="modal" type="button">
                      <i class="fas fa-times"></i>
                  Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="portfolio-modal modal fade" id="portfolioModal6" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
              <div class="lr">
                <div class="rl"></div>
              </div>
            </div>
            <div class="container">
              <div class="row">
                <div class="col-lg-8 mx-auto">
                  <div class="modal-body">
                    <h2 class="text-uppercase">Weather-Dashboard</h2>
                    <img class="img-fluid" src={weatherDashboard} alt="" />
                    <p>
                      A weather dashboard that run in the browser and feature dynamically updated HTML and CSS using JavaScript (jQuery). This project is a app with search functionality to find current weather conditions and forecasted weather for multiple cities. It uses the OpenWeather API to retrieve data for the cities, AJAX to hook into the API to retrieve the data in JSON format, dynamically updated HTML and CSS powered by jQuery, and displays a search history which the user can click to access past cities searched via local storage.  </p>
                    <br />
                  Deployed Link: <a href="https://guedesantonio.github.io/Weather-Dashboard/">Here</a>
                    <br /><br />
                    <button class="btn btn-primary" data-dismiss="modal" type="button">
                      <i class="fas fa-times"></i>
                  Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="portfolio-modal modal fade" id="portfolioModal7" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
              <div class="lr">
                <div class="rl"></div>
              </div>
            </div>
            <div class="container">
              <div class="row">
                <div class="col-lg-8 mx-auto">
                  <div class="modal-body">
                    <h2 class="text-uppercase">Employee Tracker</h2>
                    <img class="img-fluid" src={employeeTracker} alt="" />
                    <p>
                      A Node application that prompts the user about his companie employees and provide many diffrent options. To architect and build a solution for managing a company's employees using node, inquirer, and MySQL.</p>
                    <br />
               Click here to see the functionality of this app: <a href="https://drive.google.com/file/d/1hGJstr4FPXz8M642CLtMm9xgpa1vZnmn/view">Here</a>
                    <br /><br />
                    <button class="btn btn-primary" data-dismiss="modal" type="button">
                      <i class="fas fa-times"></i>
                 Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="portfolio-modal modal fade" id="portfolioModal8" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
              <div class="lr">
                <div class="rl"></div>
              </div>
            </div>
            <div class="container">
              <div class="row">
                <div class="col-lg-8 mx-auto">
                  <div class="modal-body">
                    <h2 class="text-uppercase">Note Taker APP</h2>
                    <img class="img-fluid" src={noteTaker} alt="" />
                    <p>
                      An responsive HTML webpage that displays an application that can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file.</p>
                    <br />
                Deployed link: <a href="https://fast-brook-67955.herokuapp.com/">Here</a>
                    <br /><br />
                    <button class="btn btn-primary" data-dismiss="modal" type="button">
                      <i class="fas fa-times"></i>
                  Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="portfolio-modal modal fade" id="portfolioModal9" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
              <div class="lr">
                <div class="rl"></div>
              </div>
            </div>
            <div class="container">
              <div class="row">
                <div class="col-lg-8 mx-auto">
                  <div class="modal-body">
                    <h2 class="text-uppercase">Team-Profile-Generator</h2>
                    <img class="img-fluid" src={teamProfile} alt="" />
                    <p>
                      A Node CLI tested application that prompts the user about his team information and generates an reposnsive HTML webpage that displays summaries for team member.</p>
                    <br />
               Click here to see the functionality of this app: <a href="https://drive.google.com/file/d/1KQnTliIxf2PLpnME1_WLn7zAExDcEONh/view">Here</a>
                    <br /><br />
                    <button class="btn btn-primary" data-dismiss="modal" type="button">
                      <i class="fas fa-times"></i>
                 Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Portfolio;