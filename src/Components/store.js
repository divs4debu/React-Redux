import {createStore} from 'redux';
import AppReducer from './appReducer';

store = createStore(AppReducer);

export default store;