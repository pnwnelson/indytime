import React, { Component } from "react";

class ContactPage extends Component {
	callButton() {}

	render() {
		return (
			<div className="container">
				<h1 className="page-header">Contact</h1>
				<hr />
				<div className="container">
					<div className="row">
						<div className="col-xs-12 text-center">
							<p>
								If you need to speak with me directly, to talk about work... or
								fishing, please give me a call.
							</p>
						</div>
						<div className="col-xs-12 text-center">
							<a href="tel:5092122223">
								<button className="btn btn-primary btn-call-me">Call Me</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ContactPage;
