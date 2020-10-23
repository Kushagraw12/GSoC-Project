import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {logoutUser} from '../actions/authActions';
import {Chrono} from 'react-chrono'
import './timeline.css';


const External = () =>{
    const items = [{
      title:"January 30, 2021" ,
      contentTitle: "Organisation Application Open",
      contentText:" Open source organizations that would like to participate as a mentor organization in this year’s program can apply."          
    },
    {
        title: "February 20, 2021",
        contentTitle: "Organization Application Deadline",
        contentText: "All organizations wishing to be a part of GSoC 2021 must complete their application by February 20, 2021 00:45 ."
    },

    {
        title: "March 10, 2021",
        contentTitle: "Organizations Announced",
        contentText: "Interested students can now begin discussing project ideas with accepted mentor organizations."
    },

    {
        title: "March 29, 2021 - April 13, 20211",
        contentTitle: "Student Application Period",
        contentText: "Students can register and submit their applications to mentor organizations. All proposals must be submitted by April 13, 2021 23:45."
    },

    {
        title: "April 13, 2021 - May 17, 2021",
        contentTitle: "Application Review Period",
        contentText: "Organizations review and select student proposals."
    },

    {
        title: "May 17, 2021",
        contentTitle: "Student Projects Announced",
        contentText: "Accepted students are paired with a mentor and start planning their projects and milestones.."
    },

    {
        title: "May 17, 2021 - June 7, 2021",
        contentTitle: "Community Bonding",
        contentText: "Students spend a month learning more about their organization’s community."
    },
    
    {
        title: "June 7, 2021 - August 16, 2021",
        contentTitle: "Coding",
        contentText: "Students work on their Google Summer of Code projects."
    },

    {
        title: "July 12 - 16, 2021",
        contentTitle: "Evaluations",
        contentText: "Mentors and students submit their evaluations of one another"
    },

    {
        title: "August 16 - 23, 2021",
        contentTitle: "Students Submit Code and Final Evaluations",
        contentText: "Students submit their code, project summaries, and final evaluations of their mentors."
    },

    {
        title: "August 23 - 30, 2021",
        contentTitle: "Mentors Submit Final Evaluations",
        contentText: "Mentors review student code samples and determine if the students have successfully completed their Google Summer of Code 2021 project."
    },

    {
        title: "August 31, 2021",
        contentTitle: "Results Announced",
        contentText: "Students are notified of the pass/fail status of their Google Summer of Code 2021 projects"
    }
];
console.log(items.contentTitle);
    return (
      <div className = "timeline" >
          
        <Chrono items={items} cardHeight={200}
        mode = 'TREE'
        hideControls/>
       
        
      </div>

    )
}

class Timeline extends Component {
    render() {
        return (
            <External/>
        );
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
});


export default connect(mapStateToProps, {logoutUser})(withRouter(Timeline));
