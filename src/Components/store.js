import {createStore} from 'redux';
import AppReducer from '../Reducers/appReducer';

store = createStore(AppReducer);

export default store;