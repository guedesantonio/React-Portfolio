import React from "react";
import Background from "../background";
import WOW from "wowjs";
import "./styles.css"

class Navbar extends React.Component {
	constructor(props) {
		super(props);
		this.about = React.createRef();
		this.projects = React.createRef();
		this.contact = React.createRef();
		this.scrolling = this.scrolling.bind(this);
	}

	componentDidMount() {
		new WOW.WOW().init();
	}

	navEffect() {
		window.addEventListener("scroll", () => {
			var navBar = document.getElementById("navbar");
			var domRect = navBar.getBoundingClientRect();
			var myBackground = document.getElementById("my-background");
			var domBGRect = myBackground.getBoundingClientRect();

			if (domRect.y <= -domRect.height) {
				navBar.classList.add("fade-in-nav");
			}
			if (-domBGRect.height < domBGRect.top) {
				navBar.classList.remove("fade-in-nav");
			}
		});
	}

	scrolling(instance) {
		let node = document.getElementById(instance.current.props.id);
		window.scrollTo({
			top: node.offsetTop,
			behavior: "smooth"
		});
	}

	render() {
		return(
			<div>
			<nav className="navbar navbar-b navbar-trans navbar-expand-md fixed-top" id="mainNav">
                <div className="container">
                    <a className="navbar-brand js-scroll" href="#page-top"><img src="#" alt="logo" style={{maxWidth: "100px"}}/></a>
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
                            <a className="nav-link js-scroll" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll" href="#work">Work</a>
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