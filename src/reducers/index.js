import { combineReducers } from 'redux';
import changeTheNumber from './upDown';

const rootReducer = combineReducers({
	changeTheNumber: changeTheNumber,
});

export default rootReducer;
