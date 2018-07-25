import React, { Component } from "react";
import Schedule from "./../components/schedule";

class HomePage extends Component {
	componentDidMount() {
		const script = document.createElement("script");
		script.src = "https://assets.calendly.com/assets/external/widget.js";
		script.async = true;
		document.body.appendChild(script);
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-sm-5">
						<h1 className="page-header">Welcome.</h1>
						<p>Schedule some time with Indy using this calendar</p>
					</div>
					<div className="col-sm-7">
						<Schedule />
					</div>
				</div>
			</div>
		);
	}
}

export default HomePage;
