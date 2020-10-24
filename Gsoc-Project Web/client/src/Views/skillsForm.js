import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./skillsForm.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import {Tabs, Tab} from "react-bootstrap";
import PickerSelect from "../Components/DowpdownSelect/skillsAndorg";

const options = [
    {value: "chocolate", label: "Chocolate"},
    {value: "strawberry", label: "Strawberry"},
    {value: "vanilla", label: "Vanilla"},
    {value: "butterscotch", label: "Butterscotch"},
    {value: "Junk", label: "Junk"},
    {value: "Foo", label: "Foo"},
    {value: "Bar", label: "Bar"},
    {value: "Buz", label: "Buz"},
];

const options2 = [
    {value: "chocolate", label: "C"},
    {value: "strawberry", label: "S"},
    {value: "vanilla", label: "V"},
];

export default class skillsForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            submitAll: false,
            name: "",
        };
    }

    render() {
        return (
            <div style={{
                width: "100%",
                height: "100vh",
                background: "url('/assets/BG.png') no-repeat",
                backgroundSize: "cover"
            }}>
                <div style={{display: "flex", alignItems: "center", justifyContent: "center", height: "100vh"}}>
                    <div className="container form">
                        <div className={"greenBack"}>
                            <br/>
                            <Tabs fill variant="pills" defaultActiveKey="home" id="uncontrolled-tab-example">
                                <Tab eventKey="home" title="Home">
                                    <div className="tabsBody" style={{paddingTop: "7vh", paddingBottom: "7vh"}}>
                                        <p>Name</p>
                                        <input
                                            className={"longInput"}
                                            style={{backgroundColor: "white", borderRadius: 2}}
                                            name={"name"}
                                            onChange={(e) => this.setState({name: e.target.value})}
                                        />
                                    </div>
                                    <div style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        marginTop: 40,
                                        marginBottom: 20
                                    }}>
                                        <button style={{
                                            marginRight: 20,
                                            borderRadius: 5,
                                            backgroundColor: "white",
                                            color: "black",
                                            padding: "20px 40px"
                                        }}>Cancel
                                        </button>
                                        <button style={{
                                            borderRadius: 5,
                                            padding: "20px 40px"
                                        }}>Proceed
                                        </button>
                                    </div>
                                </Tab>
                                <Tab eventKey="profile" title="Profile">
                                    <div className="tabsBody">
                                        <PickerSelect Heading="Prefered Skills" canSubmit={this.state.submitAll}
                                                      type="skills" options={options}/>
                                        <br/>
                                        <PickerSelect
                                            Heading="Prefered Organizations"
                                            canSubmit={this.state.submitAll}
                                            type="Orgs"
                                            options={options2}
                                        />
                                    </div>
                                    <button
                                        className="saoSubmit"
                                        onClick={() => {
                                            this.setState({submitAll: true});
                                        }}
                                    >
                                        <FontAwesomeIcon icon={faCheckCircle}/> &nbsp;&nbsp; Submit
                                    </button>
                                </Tab>
                            </Tabs>
                        </div>
                        <div
                            style={{
                                width: "80%",
                                display: "flex",
                                margin: "auto",
                                marginBottom: 30,
                            }}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
