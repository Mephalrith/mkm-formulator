import {handleActions} from 'redux-actions';
import {
    SET_SELECTED,
    LOAD_DATA,
} from '../constants/projectInfo.constants';

const initialDataState = {
    data: {},
    selected: false
};

const ProjectInfoReducer = handleActions({
    [LOAD_DATA]: (state, action) => {
        return {
            ...state,
            data: action.payload
        };
    },
    [SET_SELECTED]: (state, action) => {
        return {
            ...state,
            selected: true
        }
    }

}, initialDataState);

export default ProjectInfoReducer