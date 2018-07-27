import React, { Component } from "react";
import { Link } from "react-router-dom";

const OneHourLink = () => {
	return (
		<Link to="/eventonehour">
			<button className="btn btn-primary">
				Schedule <b>One</b> Hour
			</button>
		</Link>
	);
};

const TwoHourLink = () => {
	return (
		<Link to="/eventtwohours">
			<button className="btn btn-primary">
				Schedule <b>Two</b> Hours
			</button>
		</Link>
	);
};

class HomePage extends Component {
	render() {
		return (
			<div className="container">
				<div className="row text-center">
					<h1 className="page-header">Welcome!</h1>
				</div>
				<hr />
				<div className="row">
					<div className="col-sm-6">
						<div className="home-description-box">
							<p>
								Use this app to schedule a time for{" "}
								<Link to="/about">Indy</Link> to come help with your outdoor or
								animal project. Begin below by selecting how long you will need
								him.
							</p>
						</div>
					</div>
					<div className="col-sm-6 schedule-button-container">
						<p>
							<OneHourLink />
						</p>
						<p>
							<TwoHourLink />
						</p>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-12">
						<div className="rate-description-box-large text-center">
							<p className="rate">
								<span className="rate-circle-label">Rate: </span>
								<br /> <b>$15/hr</b>
							</p>
						</div>
						<div className="rate-description-box text-center">
							<p className="rate">Rate is $15 per hour</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default HomePage;
