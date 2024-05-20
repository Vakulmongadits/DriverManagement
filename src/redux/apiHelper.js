import axios from 'axios';

export const getRequest = async (url) => {
    return new Promise((resolve, reject) => {
        axios
            .get(url)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });
    });
};

export const postRequest = async (url, body) => {
    return new Promise((resolve, reject) => {
        axios.post(url, body)
            .then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            });
    });
};
