import { handleActions, handleAction } from 'redux-actions'
import {
    GET_JOBS, GET_COMPANY, SET_ROW_SELECTION, GET_EXPORT
} from '../../actions/types'
import { combineReducers } from 'redux'
import uuid from 'uuid'
import clone from 'clone'

const jobsDefaultState = { loading: false, failed: false, list: null, searchTerm: '' }
const customerDefaultState = { loading: false, failed: false, list: null }
const rowSelectionDefault = { rowSelected: false, numberRow: 0 }
const all = handleActions({
    [GET_JOBS]: {
        next(state, action) {
            if (action.payload) {
                return { loading: false, failed: false, list: action.payload, searchTerm: '' }
            }
            return { loading: true, failed: state.failed, list: state.users, searchTerm: '' }

        },
        throw(state, action) {
            console.log(`Error fetching jobs: ${action.error}`)
            return { loading: false, failed: true, list: state.users }
        }
    }
}, jobsDefaultState);

const company = handleActions({
    [GET_COMPANY]: {
        next(state, action) {
            if (action.payload) {
                return { loading: false, failed: false, list: action.payload, searchTerm: '' }
            }
            return { loading: true, failed: state.failed, list: state.users, searchTerm: '' }

        },
        throw(state, action) {
            console.log(`Error fetching company: ${action.error}`)
            return { loading: false, failed: true, list: state.users }
        }
    }
}, customerDefaultState);

const setRowSelected = handleActions({
    [SET_ROW_SELECTION]: {
        next(state, action) {
            if (action.payload) {
                return { rowSelected: action.payload.rowSelected, numberRow: action.payload.numberRow }
            }
        },
        throw(state, action) {
            console.log(`Error fetching company: ${action.error}`)
            return { rowSelected: false }
        }
    }
}, rowSelectionDefault);

const exportData = handleActions({
    [GET_EXPORT]: {
        next(state, action) {
            if (action.payload) {
                return { loading: false, failed: false, list: action.payload }
            }
            return { loading: true, failed: state.failed, list: state.users }

        },
        throw(state, action) {
            console.log(`Error fetching export data: ${action.error}`)
            return { loading: false, failed: true, list: state.users }
        }
    }
}, customerDefaultState);

export default combineReducers({ all, company, setRowSelected, exportData })
