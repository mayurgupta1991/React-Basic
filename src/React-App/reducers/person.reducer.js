import {
    FETCH_DATA_SUCCESS,
    REMOVE_USER
} from '../constants';

const initialState = {
  persons: []
};

const personReducer = function (state = initialState, action) {
  switch (action.type) {

    case FETCH_DATA_SUCCESS: {
      return {...state,  persons: action.personAdd}
    }

    case REMOVE_USER: {
      let personsList = [].concat(state.persons);
      let index = personsList.findIndex(x => x.id==action.personid)
      personsList.splice(index, 1);
      return {...state,  persons: personsList};
    }

  }
  return state;
}

export default personReducer;