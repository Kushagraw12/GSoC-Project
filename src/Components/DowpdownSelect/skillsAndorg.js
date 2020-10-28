import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Select from "react-select";
import "./SAO.css";

export default class skillsAndorg extends Component {
	constructor(props) {
		super(props);
		this.handleChangePicker = this.handleChangePicker.bind(this);
		this.state = {
			tags: [],
			selectedOption: null,
		};
	}
	handleChangePicker = (selectedOption) => {
		this.setState({ selectedOption });
		this.handleAddition(selectedOption.value);
	};

	handleDelete(i) {
		const { tags } = this.state;
		this.setState({
			tags: tags.filter((tag, index) => index !== i),
		});
	}

	handleAddition(tag) {
		let Tags = this.state.tags;
		if (Tags.indexOf(tag) === -1) {
			this.setState((state) => ({ tags: [...state.tags, tag] }));
		}
	}

	componentDidUpdate(prevProps) {
		console.log(this.props.canSubmit);
	}
	render() {
		return (
			<div>
				<h6>{this.props.Heading}</h6>
				<Select className="longInput" value={this.state.selectedOption} onChange={this.handleChangePicker} options={this.props.options} />

				<div
					className="scrollList"
					style={{

					}}
				>
					<div className="tagsBody" style={{ padding: 15 }}>
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
