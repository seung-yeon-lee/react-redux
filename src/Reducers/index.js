import counter from './counter';
import ui from './ui';
import {combineReducers} from 'redux';

const reducers = combineReducers({counter,ui})

export default reducers;