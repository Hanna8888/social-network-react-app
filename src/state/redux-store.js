import { legacy_createStore as createStore } from 'redux';
import { combineReducers, applyMiddleware , compose} from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunkMiddleware from 'redux-thunk';

// reducers
import dialogs from './dialogs';
import profile from './profile';
import users from './users';
import auth from './auth';
import app from './app';

const reducers = combineReducers({
    dialogs: dialogs,
    profile: profile,
    users: users,
    auth: auth,
    form: formReducer,
    app: app
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.__store__ = store;

export default store;


