import ax from 'axios'

const baseURL = 'http://127.0.0.1:8000/api/';

const axios = ax.create({
    baseURL: baseURL,
});

export default axios