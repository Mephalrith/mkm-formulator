import {handleActions} from "redux-actions";
import {SHOW_SIDEBAR, HIDE_SIDEBAR} from "../constants/home.constants";

const initialState = {
    sidebarActive: false
};

const HomeReducer = handleActions({

    [SHOW_SIDEBAR]: (state) => {
        return {
            ...state,
            sidebarActive: true
        }
    },

    [HIDE_SIDEBAR]: (state) => {
        return {
            ...state,
            sidebarActive: false
        }
    }

}, initialState);

export default HomeReducer;