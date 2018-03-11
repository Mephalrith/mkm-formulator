import {STATE_ACTIONS} from "../constants/StateActions";

export const setTitle = (title) => {
   return {
       type: STATE_ACTIONS.LOAD_TITLE,
       payload: title
   }
};