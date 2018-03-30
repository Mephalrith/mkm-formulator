import {handleActions} from 'redux-actions';
import {
    SET_SELECTED_JOB,
    LOAD_JOBS,
} from '../constants/engSchedule.constants';

const initialDataState = {
    data: {},
    selected: false
};

const EngineeringScheduleReducer = handleActions({
    [LOAD_JOBS]: (state, action) => {
        return {
            ...state,
            data: action.payload
        };
    },
    [SET_SELECTED_JOB]: (state, action) => {
        return {
            ...state,
            selected: true
        }
    }

}, initialDataState);

export default EngineeringScheduleReducer