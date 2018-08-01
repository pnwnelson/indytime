import React, { Component } from "react";

class AboutPage extends Component {
	render() {
		return (
			<div className="container">
				<h1 className="page-header">Hi, I'm Indy</h1>
				<hr />
				<div className="row">
					<div className="col-xs-6">
						<img
							src="/img/indy.jpg"
							alt="Indy and a fish"
							className="img-responsive about-img"
						/>
					</div>
					<div className="col-xs-6">
						<p>
							I like to fish. That's about it. Not real complicated. When I'm
							not fishing, I like to fish.
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default AboutPage;
