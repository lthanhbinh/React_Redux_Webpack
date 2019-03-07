import {
    GET_JOBS,
    GET_COMPANY,
    GET_EXPORT
} from '../types'

import { createAction } from 'redux-actions'
import 'whatwg-fetch'

import baseUrl from './base-url'

const jobsUrl = () => `${baseUrl}/job?companyname=avis`
const companyUrl = () => `${baseUrl}/company?name=avis`
const exportUrl = () => `${baseUrl}/report?companyname=avis`

export const getJobs = createAction(GET_JOBS)
export const getCompany = createAction(GET_COMPANY)
export const getExportData = createAction(GET_EXPORT)

export const execGetJobs = () => (dispatch, getState) => {
    const url = jobsUrl();
    const obj = {
        method: 'GET'
        // headers: {
        //     //Currently we can't send the auth token here becuase the server is not expecting it. However, it should be
        //     'AuthToken': getState().services.firebaseUser.response.accessToken,
        //     //  'Authorization' : getState().firebaseUser.response.localId,
        //     'Content-Type': 'application/json'
        // }
    }

    dispatch(getJobs())
    return fetch(url, obj)
        .then(response => {
            if (response.ok) {
                return response.json().then(result => {
                    dispatch(getJobs(result.Data))
                    return result
                })
            }
            return Promise.reject(new Error('Error getting jobs'))

        })
        .catch(error => {
            dispatch(getJobs(error))
            return Promise.reject(error)
        });

}

export const execGetCompany = () => (dispatch, getState) => {
    const url = companyUrl();
    const obj = {
        method: 'GET'
        // headers: {
        //     //Currently we can't send the auth token here becuase the server is not expecting it. However, it should be
        //     'AuthToken': getState().services.firebaseUser.response.accessToken,
        //     //  'Authorization' : getState().firebaseUser.response.localId,
        //     'Content-Type': 'application/json'
        // }
    }

    dispatch(getCompany())
    return fetch(url, obj)
        .then(response => {
            if (response.ok) {
                return response.json().then(result => {
                    dispatch(getCompany(result.Data))
                    return result
                })
            }
            return Promise.reject(new Error('Error getting company'))

        })
        .catch(error => {
            dispatch(getCompany(error))
            return Promise.reject(error)
        });

}

export const execGetExportData = () => (dispatch, getState) => {
    const url = exportUrl();
    const obj = {
        method: 'GET'
        // headers: {
        //     //Currently we can't send the auth token here becuase the server is not expecting it. However, it should be
        //     'AuthToken': getState().services.firebaseUser.response.accessToken,
        //     //  'Authorization' : getState().firebaseUser.response.localId,
        //     'Content-Type': 'application/json'
        // }
    }

    dispatch(getExportData())
    return fetch(url, obj)
        .then(response => {
            if (response.ok) {
                return response.json().then(result => {
                    console.log(result)
                    dispatch(getExportData(result.Data))
                    return result
                })
            }
            return Promise.reject(new Error('Error getting export json'))

        })
        .catch(error => {
            dispatch(getExportData(error))
            return Promise.reject(error)
        });

}
