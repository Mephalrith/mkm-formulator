import {
    ROW_SELECT,
    ADD_ENTRY,
    REMOVE_ENTRY,
    SORT_INOUT_ASC,
    SORT_INOUT_DESC,
    CHECKBOX_SELECT
} from '../constants/inOut.constants';

export const rowSelect = (index) => {
    return {
        type: ROW_SELECT,
        payload: index
    }
};

export const addEntry = (name, initials, outTime, inTime, notes, fieldBag, vehicle) => {
    return {
        type: ADD_ENTRY,
        name: name,
        initials: initials,
        outTime: outTime,
        inTime: inTime,
        notes: notes,
        fieldBag: fieldBag,
        vehicle: vehicle
    }
};

export const removeEntry = (index) => {
    return {
        type: REMOVE_ENTRY,
        payload: index
    }
};

export const sortAsc = (key) => {
    return {
        type: SORT_INOUT_ASC,
        payload: key
    }
};

export const sortDesc = (key) => {
    return {
        type: SORT_INOUT_DESC,
        payload: key
    }
};

export const checkboxSelect = (index) => {
    return {
        type: CHECKBOX_SELECT,
        payload: index
    }
};