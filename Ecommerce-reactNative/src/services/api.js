import axios from 'axios';

export const api = axios.create({
    baseURL: "http://192.168.1.69:8080",
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    },
});
