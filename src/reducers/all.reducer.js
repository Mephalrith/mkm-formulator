import {combineReducers} from "redux";
import {routerReducer} from 'react-router-redux';
import InOutReducer from './inOut.reducer';
import ScheduleReducer from './schedule.reducer';
import HomeReducer from './home.reducer';
import StateReducer from "./state.reducer";
import ProjectInfoReducer from "./projectInfo.reducer";
import EngineeringScheduleReducer from "./engSchedule.reducer";

const AllReducers = combineReducers({
    router: routerReducer,
    inOut: InOutReducer,
    schedule: ScheduleReducer,
    projectInfo: ProjectInfoReducer,
    engSchedule: EngineeringScheduleReducer,
    home: HomeReducer,
    state: StateReducer
});

export default AllReducers