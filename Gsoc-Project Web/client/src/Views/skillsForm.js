import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./skillsForm.css";
import { Tabs, Tab } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Select from "react-select";
import PickerSelect from "../Components/DowpdownSelect/skillsAndorg";

const options = [
	{ value: "chocolate", label: "Chocolate" },
	{ value: "strawberry", label: "Strawberry" },
	{ value: "vanilla", label: "Vanilla" },
];

export default class skillsForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			submitAll:false,
		};
	}
	

	render() {
		return (
			<div style={{ width: "100%", height: "100vh", backgroundColor: "black" }}>
				<h1>Hello world</h1>
				<div className="container form" style={{ backgroundColor: "white" }}>
					<div style={{ width: "80%", height: "75vh", margin: "auto" }}>
						<br />
						<br />
						<Tabs fill variant="pills" defaultActiveKey="profile" id="uncontrolled-tab-example">
							<Tab eventKey="home" title="Home">
								<div className="tabsBody">
									<p>fd</p>
								</div>
							</Tab>
							<Tab eventKey="profile" title="Profile">
								<div className="tabsBody">
									<PickerSelect Heading="Prefered Skills" canSubmit={this.state.submitAll} />

                                    <button onClick={() => {this.setState({submitAll:true})}}>Submit</button>
								</div>
							</Tab>
						</Tabs>
					</div>
				</div>
			</div>
		);
	}
}
