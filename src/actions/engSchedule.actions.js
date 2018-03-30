import {
    LOAD_JOBS,
    SET_SELECTED_JOB
} from '../constants/engSchedule.constants';
import axios from "axios";

export const startConnection = (key) => {
    return (dispatch) => {
        axios.get("http://localhost:8080/Engineering_Log_JobsInProgress", {
            headers: {EngineerID: key}
        })
            .then((resp) => dispatch(loadData(resp.data)))
            .catch((err) => console.log(err))
    };
};

export const loadData = (data) => {
    return {
        type: LOAD_JOBS,
        payload: data
    }
};

export const setSelected = () => {
    return {
        type: SET_SELECTED_JOB,
    }
};