import React from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

const ProjectInfoComponent = (props) => {

    return (

        <div>
            {
                props.data === "doesn't exist" ?
                    <p>This job number doesn't exist.</p> :
                    (
                        props.selected ?
                            <ul className='job-information'>
                                <li>
                                    <h3>Job Information</h3>
                                    <p>Job Number: {props.data.JobNumberID}</p>
                                    <p>Job Name: {props.data.JobName}</p>
                                    <p>Job Address:
                                        {props.data.JobAddress}, {props.data.JobCityStateZip}</p>
                                    <p>Sub-Lot-AP: {props.data.SubLotAP}</p>
                                </li>
                                <li>
                                    <h3>Client Information</h3>
                                    <p>Client Name: {props.data.BillingName}</p>
                                    <p>Attn: {props.data.BillingCoAttn}</p>
                                    <p>Client Address:
                                        {props.data.BillingAddress}, {props.data.BillingCityState}</p>
                                    <p>Client Phone Number: {props.data.PhoneNumber}</p>
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
    }),
)(ProjectInfoComponent))