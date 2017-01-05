import {
  FETCH_DATA_FAILED,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_STARTED
} from '../constants';

import fetch from 'isomorphic-fetch';


export function fetchDataStarted() {
  return {
    type: FETCH_DATA_STARTED
  }
}

export function fetchDataSuccess(personAdd) {
  return {
    type: FETCH_DATA_SUCCESS,
    personAdd
  }
}

export function fetchDataFailed() {
  return {
    type: FETCH_DATA_FAILED
  }
}

export function fetchPersonDetails() {
  return (dispatch) => {
    dispatch(fetchDataStarted());
    fetch('http://rest.learncode.academy/api/learncode/mayur')
      .then((response) => {
        return response.json();        
      })
      .then(json => {
        dispatch(fetchDataSuccess(json))
      })
      .catch((e) => {
        dispatch(fetchDataFailed())
      })
  }
}

export function delData(param) {
  return (dispatch) => {
    fetch("http://rest.learncode.academy/api/learncode/mayur/"+param,{
      method: "DELETE"
    }).then((response) => {
            dispatch(fetchPersonDetails())
        }
    ).catch((e) => {
          console.log("Error while calling API....",e)
        }
    )
  }
}
