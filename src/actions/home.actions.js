import {HIDE_SIDEBAR, SHOW_SIDEBAR} from "../constants/home.constants";

export const showSidebar = () => {
    return {
        type: SHOW_SIDEBAR
    }
};

export const hideSidebar = () => {
    return {
        type: HIDE_SIDEBAR
    }
};



