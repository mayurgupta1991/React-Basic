import {
    SET_DATE,
    SET_HOURS,
    SET_MINUTES,
    SET_SECONDS,
    SET_AMPM
} from '../constants';

export function setDate(provideDate) {
  return {
    type: SET_DATE,
      provideDate
  }
}

export function setHOURS(hours) {
    return {
        type: SET_HOURS,
        hours
    }
}

export function setMINUTES(mins) {
    return {
        type: SET_MINUTES,
        mins
    }
}
export function setSECONDS(secs) {
    return {
        type: SET_SECONDS,
        secs
    }
}

export function setAMPM(ampm) {
    return {
        type: SET_AMPM,
        ampm
    }
}