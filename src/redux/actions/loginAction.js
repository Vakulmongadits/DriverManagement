import { getRequest } from "../apiHelper";
import {FETCH_LOGIN,FETCH_LOGIN_SUCCESS,FETCH_HOME_DATA_ERROR } from "../constants";

export const fetchLoginAction = () => (dispatch) => {
    return new Promise((resolve, reject) => {
      dispatch({
        type:  FETCH_LOGIN,
      });
      getRequest(`https://dummyjson.com/products`)
        .then((response) => {
          dispatch({
            type:FETCH_LOGIN_SUCCESS,
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