import { handleActions, handleAction } from 'redux-actions'
import {
    AUTH, GET_COMPANY, SET_ROW_SELECTION, GET_EXPORT
} from '../../actions/types'
import { combineReducers } from 'redux'
import uuid from 'uuid'
import clone from 'clone'

const jobsDefaultState = { loading: false, failed: false, list: null, searchTerm: '' }
const authenticate = handleActions({
    [AUTH]: {
        next(state, action) {
            if (action.payload) {
                return { loading: false, failed: false, data: action.payload}
            }
            return { loading: true, failed: state.failed, data: state.users, searchTerm: '' }

        },
        throw(state, action) {
            console.log(`Error fetching jobs: ${action.error}`)
            return { loading: false, failed: true, list: state.users }
        }
    }
}, jobsDefaultState);


export default combineReducers({ authenticate})
