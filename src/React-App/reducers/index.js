import { combineReducers } from 'redux';
import personReducer from './person.reducer';

const rootReducer = combineReducers({
  personData: personReducer
});

export default rootReducer;
