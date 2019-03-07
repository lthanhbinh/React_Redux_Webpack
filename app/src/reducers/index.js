
import {combineReducers} from 'redux'
import ui from './ui'
import services from './services';
import auth from './auth';
import {routerReducer as location} from "../router"

export default combineReducers({
    auth,
    services,
    ui,
    location
});
