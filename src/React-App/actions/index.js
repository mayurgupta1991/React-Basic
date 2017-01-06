import {
    ADD_DATA,
    DELETE_DATA,
    UPDATE_DATA,
  FETCH_DATA_SUCCESS
} from '../constants';

import fetch from 'isomorphic-fetch';


export function fetchDataSuccess(personAdd) {
  return {
    type: FETCH_DATA_SUCCESS,
    personAdd
  }
}

export function fetchPersonDetails() {
  return (dispatch) => {
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

export function updatePerson(param) {

  return (dispatch) => {
    fetch("http://rest.learncode.academy/api/learncode/mayur/"+param.id,{
      method: "PUT",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(param)
    }).then((response) => {
    if(response.status === 200)
      dispatch(fetchPersonDetails())
  }
).catch((e) => {
    console.log("Error while calling API....",e)
}
)
}
}

export function createPerson(param) {
    return (dispatch) => {
        fetch("http://rest.learncode.academy/api/learncode/mayur", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        }).then((response) => {
                if(response.status === 200)
                    dispatch(fetchData())
            }
        ).catch((e) => {
                console.log("Error while calling API....",e)
            }
        )
    }
}
