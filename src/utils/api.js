import * as axios from 'axios';

export const instanceAxios = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    timeout: 5000000,
    withCredentials: true,
    headers: {
        "API-KEY": "74efbff2-8b8e-477a-ae0f-4ce79217ab42"
    }
});

