import React, { Component } from "react";

class EventTwoHours extends Component {
	componentDidMount() {
		const script = document.createElement("script");
		script.src = "https://assets.calendly.com/assets/external/widget.js";
		script.async = true;
		document.body.appendChild(script);
	}
	render() {
		return (
			<div>
				<div
					className="calendly-inline-widget"
					data-url="https://calendly.com/indynelson/2-hour"
				/>
			</div>
		);
	}
}

export default EventTwoHours;
