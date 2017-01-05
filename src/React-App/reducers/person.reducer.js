import {
  FETCH_DATA_STARTED,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILED
} from '../constants';

const initialState = {
  persons: []
};

const personReducer = function (state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA_STARTED: {
      return {...state, loading: true}
    }
    case FETCH_DATA_FAILED: {
      return {...state, loading: false}
    }
    case FETCH_DATA_SUCCESS: {
      var addPerson = [].concat(action.personAdd.map((PersonDatavalue) => PersonDatavalue));
      return {...state,  persons: addPerson}
    }
  }
  return state;
}

export default personReducer;