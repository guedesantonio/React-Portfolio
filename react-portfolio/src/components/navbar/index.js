import React from "react";
import Background from "./background.jsx";
import About from "./about.jsx";
import Projects from "./projects.jsx";
import Contact from "./contact.jsx";
import WOW from "wowjs";

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

	render() {
		 }
}
  
export default Navbar;