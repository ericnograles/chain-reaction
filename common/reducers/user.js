import {
  REQUEST_LOGIN,
  RECEIVE_LOGIN,
  LOGOUT,
  KEYPRESS_EMAIL,
  KEYPRESS_PASSWORD
} from '../actions';

import * as InitialStates from '../constants/InitialStates'; // TODO: Not sure if this is even necessary

export function email(state = null, action) {
  switch (action.type) {
    case KEYPRESS_EMAIL:
      return action.email;
    default:
      return state;
  }
}

export function password(state = null, action) {
  switch (action.type)  {
    case KEYPRESS_PASSWORD:
      return action.password;
    default:
      return state;
  }
}

export function user(state = InitialStates.user, action) {
  switch (action.type) {
    case REQUEST_LOGIN:
      return Object.assign({}, state, {
        email: action.email,
        status: 'authenticating'
      });
    case RECEIVE_LOGIN:
      return Object.assign({}, state, {
        email: action.email,
        profile: action.profile,
        error: action.error,
        status: action.error ? 'unauthenticated' : 'authenticated'
      });
    case LOGOUT:
      return Object.assign({}, state, {
        email: null,
        profile: null
      });
    default:
      return state;
  }
}