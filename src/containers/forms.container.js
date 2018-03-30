import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import * as StateActions from "../actions/state.actions";
import JobNumberComponent from "../components/jobNumber.component";
import ProjectManagerComponent from "../components/projectManager.component";

// let officegen =require("officegen");
// let fs  = require('fs');

class FormsBody extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.title = "Forms";
        this.props.loadTitle("Forms")
    }

    // startDocument = () => {
    //     let docx = officegen.docType('docx');
    //
    //     let out = fs.createWriteStream('tmp/out.docx');
    //
    //     out.on('error', function (err) {
    //         console.log(err);
    //     });
    //
    //     docx.generate(out);
    // };

    render() {
        return (
            <div className={'body-override'}>
                <JobNumberComponent/>
                <ProjectManagerComponent/>
                <div className='separator'/>
                <p>Forms</p>
                {/*<button onClick={() => this.startDocument()}>Test Form</button>*/}
            </div>
        );
    }
}


export default withRouter(connect((state) => ({}),
    (dispatch) => ({
        loadTitle: (title) => dispatch(StateActions.setTitle(title)),
    })
)(FormsBody))