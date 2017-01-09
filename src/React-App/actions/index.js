import {
    ADD_DATA,
    DELETE_DATA,
    UPDATE_DATA,
    FETCH_DATA_SUCCESS,
    REMOVE_USER,
    LINK
} from '../constants';

import fetch from 'isomorphic-fetch';


export function fetchDataSuccess(personAdd) {
  return {
    type: FETCH_DATA_SUCCESS,
    personAdd
  }
}

export function DeletePerson(personid) {
    return {
        type: REMOVE_USER,
        personid
    }
}

export function fetchPersonDetails() {
  return (dispatch) => {
    fetch(LINK)
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

export function delData(person_id) {
    return (dispatch) => {
        fetch(LINK + person_id,{
            method: "DELETE"
        }).then((response) => {
                dispatch(DeletePerson(person_id));
            }
        ).catch((e) => {
                console.log("Error while calling API....",e)
            }
        )
    }
}


export function updatePerson(person_data) {
  return (dispatch) => {
    fetch( LINK + person_data.id,{
      method: "PUT",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(person_data)
    })
    }
}

export function createPerson(param) {
    return (dispatch) => {
        fetch(LINK, {
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
