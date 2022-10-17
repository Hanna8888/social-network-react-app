import * as axios from 'axios';

export const instanceAxios = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    timeout: 5000000,
    withCredentials: true,
    headers: {
        "API-KEY": "90ba80a4-87fd-4582-a121-e63e06e8fd3a"
    }
});

