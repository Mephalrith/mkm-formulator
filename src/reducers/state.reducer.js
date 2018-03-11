import {handleActions} from "redux-actions";
import {STATE_ACTIONS} from "../constants/StateActions";

const initialState = {
    currentTitle: ''
};

const StateReducer = handleActions({

    [STATE_ACTIONS.LOAD_TITLE]: (state, action) => {
        return {
            ...state,
            currentTitle: action.payload
        }
    }

}, initialState);

export default StateReducer;