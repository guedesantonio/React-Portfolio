import React from "react";
import Background from "../background";
import $ from 'jquery';
import "./styles.css"

class Navbar extends React.Component {
	constructor(){
        super();
    }

    componentDidMount(){
        const nav = $('nav');
        let navHeight = nav.outerHeight();

        $('.navbar-toggler').on('click', function() {
            if( ! $('#mainNav').hasClass('navbar-reduce')) {
              $('#mainNav').addClass('navbar-reduce');
            }
          })

        $('body').scrollspy({
            target: '#mainNav',
            offset: navHeight
        });

        $('.js-scroll').on("click", function () {
            $('.navbar-collapse').collapse('hide');
        });

        window.addEventListener('scroll', ()=>{
            if(window.pageYOffset > 50){
                document.querySelector('.navbar-expand-md').classList.add('navbar-reduce');
                document.querySelector('.navbar-expand-md').classList.remove('navbar-trans');
            }else {
                document.querySelector('.navbar-expand-md').classList.add('navbar-trans');
                document.querySelector('.navbar-expand-md').classList.remove('navbar-reduce');
            }
        });

        $('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
            if (window.location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && window.location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: (target.offset().top - navHeight + 5)
                    }, 1000, "easeInExpo");
                    return false;
                }
            }
        });
        
        $('.js-scroll').on("click", function () {
            $('.navbar-collapse').collapse('hide');
        });
    }


	render() {
		return(
			<div>
			<nav className="navbar navbar-b navbar-trans navbar-expand-md fixed-top" id="mainNav">
                <div className="container">
                    <a className="navbar-brand js-scroll" href="#page-top">AG</a>
                    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarDefault"
                    aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <div className="navbar-collapse collapse justify-content-end" id="navbarDefault">
                        <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link js-scroll active" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll" href="#skills">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll" href="#technologies">Technologies</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll" href="#contact">Contact</a>
                        </li>
                        </ul>
                    </div>
                </div>
            </nav>
		<Background
			ref={this.navEffect}
			id="my-background"
			bounceIn={"wow bounceIn"}
		/>
		</div>
		)
	}
}

export default Navbar;