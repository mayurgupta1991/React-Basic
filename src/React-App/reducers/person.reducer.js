import {
  FETCH_DATA_SUCCESS
} from '../constants';

const initialState = {
  persons: []
};

const personReducer = function (state = initialState, action) {
  switch (action.type) {

    case FETCH_DATA_SUCCESS: {
      return {...state,  persons: action.personAdd}
    }
  }
  return state;
}

export default personReducer;