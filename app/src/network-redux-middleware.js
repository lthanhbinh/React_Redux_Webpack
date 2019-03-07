import {FIREBASE_USER_CHECK} from './actions/types'
import {networkFailure, networkSuccess} from './actions/ui/network'

const networkActions = [
    FIREBASE_USER_CHECK
]

function isNetworkError(error) {
    //TODO: Determine which errors are actually network errors.
    // Right now we just return false; this means, once we're online we will never go offline. A best effort here
    // for the common errors that mean we're offline would probably be good enough
    return false;
}

function impliesFailure(action){
    return action && networkActions.includes(action.type) && action.error && isNetworkError(action.payload)
}

function impliesSuccess(action){
    return action && networkActions.includes(action.type) && (!action.error || !isNetworkError(action.payload));
}

const networkMiddleware = store => next => action => {
    if (impliesFailure(action)) {
        store.dispatch(networkFailure())
    } else if(impliesSuccess(action)){
        store.dispatch(networkSuccess())
    }
    return next(action);
}

export default networkMiddleware
