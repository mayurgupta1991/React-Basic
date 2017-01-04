import {
    SET_DATE,
    SET_HOURS,
    SET_MINUTES,
    SET_SECONDS,
    SET_AMPM

} from '../constants';

const initialState = {
    hours:0,
    minutes:0,
    seconds:0,
    ampm:0
};

const dateReducer = function (state = initialState, action) {
  switch (action.type) {
    case SET_DATE:{
        return { ...state, hours: action.provideDate.hours,minutes:action.provideDate.minutes,seconds:action.provideDate.seconds,ampm:action.provideDate.ampm };
    }
      case SET_HOURS:{
          return { ...state, hours:action.hours };
      }
      case SET_MINUTES:{
          return { ...state, minutes:action.mins };
      }
      case SET_SECONDS:{
          return { ...state, seconds:action.secs };
      }
      case SET_AMPM:{
          return { ...state, ampm:action.ampm };
      }
  }
  return state;
}

export default dateReducer;