import React, { Component } from "react";
import { Tabs, Tab } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Select from "react-select";

const options = [
	{ value: "chocolate", label: "Chocolate" },
	{ value: "strawberry", label: "Strawberry" },
	{ value: "vanilla", label: "Vanilla" },
];

export default class skillsAndorg extends Component {
	constructor(props) {
		super(props);
		this.handleChangePicker = this.handleChangePicker.bind(this);
		this.state = {
			selectedOptionOrg: null,
			text: "",
			tags: [],
			selectedOption: null,
		};
	}
	componentDidMount() {
		console.log(this.props.canSubmit)
	}
	handleChangePicker = (selectedOption) => {
		this.setState({ selectedOption });
		console.log(`Option selected:`, selectedOption);
	};
	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	handleDelete(i) {
		const { tags } = this.state;
		this.setState({
			tags: tags.filter((tag, index) => index !== i),
		});
	}

	handleAddition(tag) {
		this.setState((state) => ({ tags: [...state.tags, tag] }));
	}
	render() {
		return (
			<div>
			<h4>{this.props.Heading}</h4>
			{this.props.canSubmit.toString()}
				<Select className="longInput" value={this.state.selectedOption} onChange={this.handleChangePicker} options={options} />

				<div
					style={{
						display: "flex",
						height: "20vh",
						backgroundColor: "white",
						width: "35vw",
						overflow: "scroll",
						overflowX: "hidden",
					}}
				>
					<div style={{ padding: 15 }}>
						{this.state.tags.map((item, idx) => (
							<h6
								key={idx}
								style={{
									display: "inline-block",
									marginTop: 2,
									marginRight: 4,
									padding: 2,
									paddingLeft: 10,
									paddingRight: 10,
									fontSize: 15,
									backgroundColor: "#eee",
								}}
							>
								<button className="crossBtn" onClick={() => this.handleDelete(idx)}>
									<FontAwesomeIcon icon={faTimes} />{" "}
								</button>
								&nbsp; &nbsp;{item}
							</h6>
						))}
					</div>
				</div>
			</div>
		);
	}
}
