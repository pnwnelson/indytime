import React, { Component } from "react";
import { Link } from "react-router-dom";

const OneHourLink = () => {
	return (
		<Link to="/eventonehour">
			<button className="btn btn-primary">Scheule One Hour</button>
		</Link>
	);
};

const TwoHourLink = () => {
	return (
		<Link to="/eventtwohours">
			<button className="btn btn-primary">Scheule Two Hours</button>
		</Link>
	);
};

class HomePage extends Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-sm-5">
						<h1 className="page-header">Welcome.</h1>
						<div className="home-description-box">
							<p>
								Use this app to schedule a time for Indy to come help with your
								outdoor or animal project. Begin below by selecting how long you
								will need him.
							</p>
						</div>
					</div>
					<div className="col-sm-7 schedule-button-container">
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
						<div className="home-description-box text-center">
							<p>Rate is $15 per hour</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default HomePage;
