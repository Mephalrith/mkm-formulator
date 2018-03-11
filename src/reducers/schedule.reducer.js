import {handleActions} from 'redux-actions';
import {
    LOAD_SHEET,
    SORT_SCHEDULE_ASC,
    SORT_SCHEDULE_DESC
} from '../constants/schedule.constants';
import {fromJS} from "immutable";

const initialScheduleState = {
    loading: true,
    employees: []
};

const handleSort = (stringA, stringB) => {
    if (stringA < stringB) {
        return -1;
    }
    if (stringA > stringB) {
        return 1;
    }
    return 0;
};

const ScheduleReducer = handleActions({
    [LOAD_SHEET]: (state, action) => {
        const nameArray = fromJS(action.payload).map((person) => person.get('name')).toJS();
        const initialsArray = fromJS(action.payload).map((person) => person.get('initials')).toJS();

        return {
            ...state,
            employees: action.payload,
            nameArray : nameArray,
            initialsArray: initialsArray,
            loading: false
        };
    },

    [SORT_SCHEDULE_ASC]: (state, action) => {
        const newEmployees = state.employees.slice();
        if (action.payload === 'startTime') {
            newEmployees.sort((a, b) => {
                return handleSort(a.startTime, b.startTime);
            });
            return {
                sortedStartTime: 'asc',
                employees: newEmployees
            };
        } else if (action.payload === 'endTime') {
            newEmployees.sort((a, b) => {
                return handleSort(a.endTime, b.endTime);
            });
            return {
                sortedEndTime: 'asc',
                employees: newEmployees
            };
        } else if (action.payload === 'name') {
            newEmployees.sort((a, b) => {
                return handleSort(a.name.toUpperCase(), b.name.toUpperCase());
            });
            return {
                sortedScheduleName: 'asc',
                employees: newEmployees
            };
        }
        return {
            employees: newEmployees
        };
    },

    [SORT_SCHEDULE_DESC]: (state, action) => {
        const newEmployees = state.employees.slice();
        if (action.payload === 'startTime') {
            newEmployees.sort((a, b) => {
                return handleSort(b.startTime, a.startTime);
            });
            return {
                sortedStartTime: 'desc',
                employees: newEmployees
            };
        } else if (action.payload === 'endTime') {
            newEmployees.sort((a, b) => {
                return handleSort(b.endTime, a.endTime);
            });
            return {
                sortedEndTime: 'desc',
                employees: newEmployees
            };
        } else if (typeof action.payload === 'string') {
            newEmployees.sort((a, b) => {
                return handleSort(b.name.toUpperCase(), a.name.toUpperCase());
            });
            return {
                sortedScheduleName: 'desc',
                employees: newEmployees
            };
        }
        return {
            employees: newEmployees
        };
    }

}, initialScheduleState);

export default ScheduleReducer