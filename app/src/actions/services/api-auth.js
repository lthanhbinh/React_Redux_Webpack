import {
    AUTH,
    GET_COMPANY,
    GET_EXPORT
} from '../types'

import { createAction } from 'redux-actions'
import 'whatwg-fetch';
import _ from 'lodash';
import baseUrl from './base-url'

// const jobsUrl = () => `${baseUrl}/job?companyname=avis`

export const authenticate = createAction(AUTH)
export const getCompany = createAction(GET_COMPANY)
export const getExportData = createAction(GET_EXPORT)


export const execAuthenticate = data => dispatch => {
    const url = `${baseUrl}/login`;
    const obj = {
        'username': 'agent.tmtam@gmail.com',
        'password': 'password'
    }
    const searchParams = Object.keys(obj).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
        .join('&');
    const parameters = {
        method: 'POST',
        body: searchParams,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    };

    dispatch(authenticate());
    return new Promise(() => {
        fetch(url, parameters).then(response => {

            response.json().then(json => ({
                status: response.status,
                loading: 'loading',
                json
            }))
                .then(({ status, json }) => {
                    const dataResponse = {
                        status,
                        loading: status === 200 ? 'done' : 'fail',
                        data: json
                    };

                    if (status === 403 || status === 401) {
                        sessionStorage.removeItem('isActived');
                        sessionStorage.removeItem('authToken');
                    } else {
                        sessionStorage.setItem('isActived', true);
                        sessionStorage.setItem('authToken', _.get(dataResponse, 'data.data.token', ''));
                        // sessionStorage.setItem('password', base64.encode(data.rq_Password));
                    }
                    dispatch(authenticate(dataResponse));
                    return true;
                }, error => {
                    const dataResponse = {
                        status: 0,
                        data: { detail: error.message }
                    };

                    dispatch(authenticate(dataResponse));
                });
        });
    });
};

// export const execGetJobs = () => (dispatch, getState) => {
//     const url = jobsUrl();
//     const obj = {
//         method: 'GET'
//         // headers: {
//         //     //Currently we can't send the auth token here becuase the server is not expecting it. However, it should be
//         //     'AuthToken': getState().services.firebaseUser.response.accessToken,
//         //     //  'Authorization' : getState().firebaseUser.response.localId,
//         //     'Content-Type': 'application/json'
//         // }
//     }

//     dispatch(getJobs())
//     return fetch(url, obj)
//         .then(response => {
//             if (response.ok) {
//                 return response.json().then(result => {
//                     dispatch(getJobs(result.Data))
//                     return result
//                 })
//             }
//             return Promise.reject(new Error('Error getting jobs'))

//         })
//         .catch(error => {
//             dispatch(getJobs(error))
//             return Promise.reject(error)
//         });

// }
