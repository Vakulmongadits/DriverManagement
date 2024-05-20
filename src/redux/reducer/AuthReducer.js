import * as HomeConstants from '../constants';

const instialState = {
  userInfo : {},
  loading: false,
  error: false,
}

export const AuthReducer = (state = instialState, action) => {
  switch (action.type) {
    case HomeConstants.FETCH_LOGIN:
      return {...state, loading: true};
    case HomeConstants.FETCH_LOGIN_SUCCESS:
      return {...state, userInfo: action.payload, loading: false};
    case HomeConstants.FETCH_LOGIN_ERROR:
      return {...state, loading: false, error: true};
    default:
      return state;
  }
};