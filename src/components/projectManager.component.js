import React from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

const ProjectManagerComponent = (props) => {

    return (
        <div>
            {
                props.data === "doesn't exist" ?
                    null :
                    (
                        props.selected ?
                            <ul className='job-information'>
                                <li>
                                    <p>Job Number: {props.data.JobNumberID}</p>
                                    <p>Project Manager: {props.data.Principal}</p>
                                    <p>Project Engineer: {props.data.PE}</p>
                                </li>
                            </ul> :
                            null
                    )
            }
        </div>
    )
};

export default withRouter(connect((state) => ({
        data: state.projectInfo.data,
        selected: state.projectInfo.selected
    })
)(ProjectManagerComponent))