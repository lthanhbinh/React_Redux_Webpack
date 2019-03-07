import createHistory from 'history/createBrowserHistory'
import { connectRoutes, redirect, NOT_FOUND } from 'redux-first-router'
import queryString from 'query-string'
//import sleep from 'sleep-promise'

export const defaultThunk = (dispatch, getState) => {
    //doDefaultRedirect(dispatch, getState().services.easUsers.loggedIn)
}

function doDefaultRedirect(dispatch, loggedInUser) {
    // const isEmployee = loggedInUser.exists === 'yes' ? loggedInUser.user.isEmployee ? 'yes' : 'no' : 'unknown'
    // if(isEmployee === 'yes') {
    //     console.log('Employee, redirecting to ADMIN')
    //     dispatch(redirect({type: 'RTE_ADMIN'}))
    // } else if (isEmployee === 'no') {
    //     console.log('Not an employee, redirecting to flights')
    //     dispatch(redirect({type: 'RTE_FLIGHTS', payload:{mineOrAll:'mine', timeRange:'upcoming'}}))
    // }

}

function reportToAnalytics(dispatch, getState) {
}

const history = createHistory()
const routesMap = {
    RTE_CONSTRUCTION: {
        path: '/construction',
        thunk: reportToAnalytics
    },
    RTE_HOME: {
        path: '/home',
        thunk: reportToAnalytics
    },
    RTE_PLANS: {
        path: '/plans',
        thunk: reportToAnalytics
    },
    RTE_LOGIN: {
        path: '/login',
        thunk: reportToAnalytics
    },
    RTE_USER_SEARCH: {
        path: '/user-search/:encodedSearchString',
        thunk: reportToAnalytics
    },
    [NOT_FOUND]: {
        path: '/not-found',
        thunk: defaultThunk
    },
    REDIR_ROOT: {
        path: '/',
        thunk: defaultThunk
    },
    REDIR_EMPTY: {
        path: '',
        thunk: defaultThunk
    }
}

export function createDefaultRedirector(dispatch) {
    return type => {
        if (routesMap[type].thunk === defaultThunk) {
            dispatch(defaultThunk)
        }
    }
}

const { reducer, middleware, enhancer } = connectRoutes(history, routesMap, { querySerializer: queryString })

export const routerMiddleware = middleware
export const routerReducer = reducer
export const routerEnhancer = enhancer
