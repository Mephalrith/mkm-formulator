import {handleActions} from 'redux-actions';
import {
    ROW_SELECT,
    ADD_ENTRY,
    REMOVE_ENTRY,
    SORT_INOUT_ASC,
    SORT_INOUT_DESC,
    CHECKBOX_SELECT
} from '../constants/inOut.constants';

const initialInOutState = {
    employees: [
        {
            name: 'Brooke Porter',
            initials: 'BP',
            outTime: '1:05 PM',
            inTime: '2:05 PM',
            notes: 'lunch',
            fieldBag: '3',
            vehicle: 'SUV 2017'
        },
        {
            name: 'Eric Potter',
            initials: 'EP',
            outTime: '12:05 PM',
            inTime: '1:05 PM',
            notes: 'lunch',
            fieldBag: '15',
            vehicle: 'SUV 2016'
        },
        {
            name: 'Eric Kreager',
            initials: 'EK',
            outTime: '8:30 AM',
            inTime: '3:00 PM',
            notes: 'SR',
            fieldBag: '',
            vehicle: 'Truck'
        },
        {
            name: 'Nick Stuart',
            initials: 'NS',
            outTime: '8:00 AM',
            inTime: '12:00 PM',
            notes: '170896 at 8:30, 180011 at 10:30, 171023 at 11',
            fieldBag: '3',
            vehicle: '',
            checked: true
        }
    ]
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

const InOutReducer = handleActions({

    [ROW_SELECT]: (state, action) => {
        const newEmployees = state.employees.map((person, index) => {
            return {
                ...person,
                selected: index === action.payload
            };
        });
        return {
            ...state,
            employees: newEmployees
        };
    },

    [ADD_ENTRY]: (state, action) => {
        const newEmployees = state.employees.slice();
        newEmployees.push({
            name: action.name,
            initials: action.initials,
            outTime: action.outTime,
            inTime: action.inTime,
            notes: action.notes,
            fieldBag: action.fieldBag,
            vehicle: action.vehicle
        });
        return {
            employees: newEmployees
        };
    },

    [REMOVE_ENTRY]: (state, action) => {
        return {
            employees: [
                ...state.employees.slice(0, action.payload),
                ...state.employees.slice(action.payload + 1)
            ]
        };
    },

    [SORT_INOUT_ASC]: (state, action) => {
        const newEmployees = state.employees.slice();

        if (action.payload === 'outTime') {
            newEmployees.sort((a, b) => {
                return handleSort(a.outTime, b.outTime);
            });
            return {
                sortedOutTime: 'asc',
                employees: newEmployees
            };
        } else if (action.payload === 'inTime') {
            newEmployees.sort((a, b) => {
                return handleSort(a.inTime, b.inTime);
            });
            return {
                sortedInTime: 'asc',
                employees: newEmployees
            };
        } else if (action.payload === 'name') {
            newEmployees.sort((a, b) => {
                return handleSort(a.name.toUpperCase(), b.name.toUpperCase());
            });
            return {
                sortedInOutName: 'asc',
                employees: newEmployees
            };
        }
        return {
            employees: newEmployees
        };
    },

    [SORT_INOUT_DESC]: (state, action) => {
        const newEmployees = state.employees.slice();
        if (action.payload === 'outTime') {
            newEmployees.sort((a, b) => {
                return handleSort(b.outTime, a.outTime);
            });
            return {
                sortedOutTime: 'desc',
                employees: newEmployees
            };
        } else if (action.payload === 'inTime') {
            newEmployees.sort((a, b) => {
                return handleSort(b.inTime, a.inTime);
            });
            return {
                sortedInTime: 'desc',
                employees: newEmployees
            };
        } else if (typeof action.payload === 'string') {
            newEmployees.sort((a, b) => {
                return handleSort(b.name.toUpperCase(), a.name.toUpperCase());
            });
            return {
                sortedInOutName: 'desc',
                employees: newEmployees
            };
        }
        return {
            employees: newEmployees
        };
    },

    [CHECKBOX_SELECT]: (state, action) => {
        const newEmployees = state.employees.map((person, index) => {
            if (index === action.payload) {
                if (!person.checked) {
                    return {
                        ...person,
                        checked: true
                    };
                } else {
                    return {
                        ...person,
                        checked: false
                    }
                }
            }
            return {
                ...person
            }
        });
        return {
            ...state,
            employees: newEmployees
        };
    }

}, initialInOutState);

export default InOutReducer