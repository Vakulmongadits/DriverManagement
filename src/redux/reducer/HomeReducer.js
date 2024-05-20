import * as HomeConstants from '../constants';

const instialState = {
  homeData :[],
  loading: false,
  error: false,
}

export const HomeReducer = (state = instialState, action) => {
  switch (action.type) {
    case HomeConstants.FETCH_HOME_DATA:
      return {...state, loading: true};
    case HomeConstants.FETCH_HOME_DATA_SUCCESS:
      return {...state, homeData: action.payload, loading: false};
    case HomeConstants.FETCH_HOME_DATA_ERROR:
      return {...state, loading: false, error: true};
    default:
      return state;
  }
};