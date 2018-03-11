import {
    LOAD_SHEET,
    SORT_SCHEDULE_ASC,
    SORT_SCHEDULE_DESC
} from '../constants/schedule.constants';
import axios from "axios";
import sheet from '../assets/employeeList.xlsx'
import XLSX from 'xlsx';

export const startLoadingSheet = () => {
    return (dispatch) => {
        axios.get(sheet, {
            responseType: 'arraybuffer'
        })
            .then((response) => {
                const book = XLSX.read(response.data, {type: 'buffer'});
                const firstSheetName = book.SheetNames[0];
                const workSheet = book.Sheets[firstSheetName];
                const data = XLSX.utils.sheet_to_json(workSheet, {header: ['name', 'initials', 'startTime', 'endTime']});

                dispatch(loadSheet(data));
            })
            .catch(err => console.log(err))
    }
};

export const loadSheet = (sheetData) => {
    return {
        type: LOAD_SHEET,
        payload: sheetData
    }
};

export const sortAsc = (key) => {
    return {
        type: SORT_SCHEDULE_ASC,
        payload: key
    }
};

export const sortDesc = (key) => {
    return {
        type: SORT_SCHEDULE_DESC,
        payload: key
    }
};