import { createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { routerMiddleware, connectRouter } from 'connected-react-router'


import machineReducer from "./Reducer/machineReducer";
import authReducer from './Reducer/authReducer';



const rootReducer = (history) => combineReducers({
    router: connectRouter(history),
    machines: machineReducer,
     signup: authReducer
  })

export const history = createBrowserHistory();
  
const devToolsName = '__REDUX_DEVTOOLS_EXTENSION__';
const devTools = window[devToolsName] ? window[devToolsName]() : (f) => f;

export const store = createStore(rootReducer(history),compose(applyMiddleware(routerMiddleware(history),thunk),devTools))
