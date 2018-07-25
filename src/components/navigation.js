import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, NavItem, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

class Navigation extends Component {
	render() {
		return (
			<div>
				<Navbar fluid collapseOnSelect>
					<Navbar.Header>
						<Navbar.Brand>
							<Link to="/">
								<span className="title-thin">Indy</span>
								<b>Time</b>
							</Link>
						</Navbar.Brand>
						<Navbar.Toggle />
					</Navbar.Header>
					<Navbar.Collapse>
						<Nav>
							<LinkContainer to="/services">
								<NavItem>Services</NavItem>
							</LinkContainer>
							<LinkContainer to="/about">
								<NavItem>About</NavItem>
							</LinkContainer>
							<LinkContainer to="/contact">
								<NavItem>Contact</NavItem>
							</LinkContainer>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
		);
	}
}

export default Navigation;
