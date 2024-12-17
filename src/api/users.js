import apiClient from './apiClient.js';

export function registerUser(data) {
    return apiClient.post('/users/register', data);
}

export function loginUser(data) {
    return apiClient.post('/users/login', data);
}

export function logoutUser() {
    return apiClient.post('/users/logout',{});
}