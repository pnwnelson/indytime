import React, { Component } from "react";
import { Link } from "react-router-dom";

const OneHourLink = () => {
	return (
		<Link to="/eventonehour">
			<button className="btn btn-primary">
				<b>1</b> Hour
			</button>
		</Link>
	);
};

const TwoHourLink = () => {
	return (
		<Link to="/eventtwohours">
			<button className="btn btn-primary">
				<b>2</b> Hours
			</button>
		</Link>
	);
};

const ThreeHoursLink = () => {
	return (
		<Link to="/eventthreehours">
			<button className="btn btn-primary">
				<b>3</b> Hours
			</button>
		</Link>
	);
};

const FourHoursLink = () => {
	return (
		<Link to="/eventfourhours">
			<button className="btn btn-primary">
				<b>4</b> Hours
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
								animal project.
							</p>
						</div>
					</div>
					<div className="col-sm-6 schedule-button-container">
						<p>How long do you need him?</p>
						<p>
							<OneHourLink />
						</p>
						<p>
							<TwoHourLink />
						</p>
						<p>
							<ThreeHoursLink />
						</p>
						<p>
							<FourHoursLink />
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
						<hr />
						<div className="rate-container">
							<p className="rate text-center">Rate is $15 per hour</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default HomePage;
