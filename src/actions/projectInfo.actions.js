import {
    LOAD_DATA,
    SET_SELECTED
} from '../constants/projectInfo.constants';
import axios from "axios";

export const startConnection = (key) => {
    return (dispatch) => {
        axios.get("http://localhost:8080/jobs", {
            headers: {Job: key}
        })
            .then((resp) => dispatch(loadData(resp.data)))
            .catch((err) => console.log(err))
    };
};

export const loadData = (data) => {
    return {
        type: LOAD_DATA,
        payload: data
    }
};

export const setSelected = () => {
    return {
        type: SET_SELECTED,
    }
};