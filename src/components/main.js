import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./../pages/homepage";
import ServicesPage from "./../pages/servicespage";
import AboutPage from "./../pages/aboutpage";
import ContactPage from "./../pages/contactpage";
import EventOneHour from "./../pages/eventonehour";
import EventTwoHours from "./../pages/eventtwohours";

class Main extends Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/services" component={ServicesPage} />
				<Route path="/contact" component={ContactPage} />
				<Route path="/about" component={AboutPage} />
				<Route path="/eventonehour" component={EventOneHour} />
				<Route path="/eventtwohours" component={EventTwoHours} />
			</Switch>
		);
	}
}

export default Main;
