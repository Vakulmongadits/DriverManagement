import { getRequest } from "../apiHelper";
import {FETCH_HOME_DATA, FETCH_HOME_DATA_SUCCESS,FETCH_HOME_DATA_ERROR } from "../constants";

export const fetchHomeDataAction = () => (dispatch) => {
    return new Promise((resolve, reject) => {
      dispatch({
        type:  FETCH_HOME_DATA,
      });
      getRequest(`https://dummyjson.com/products`)
        .then((response) => {
          dispatch({
            type:FETCH_HOME_DATA_SUCCESS,
            payload: response.data,
          });
          resolve(response);
        })
        .catch((err) => {
          dispatch({
            type:  FETCH_HOME_DATA_ERROR,
          });
          reject(err);
        });
    });
  };