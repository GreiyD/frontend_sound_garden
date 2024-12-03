import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export function registerUser(data) {
    return axios.post(`${API_URL}/users/register`, data);
}

export function loginUser(data) {
    return axios.post(`${API_URL}/users/login`, data);
}

export function logoutUser() {
    return axios.post(`${API_URL}/users/logout`);
}