import * as request from './requester';

const baseUrl = 'http://localhost:8080/users'

export const login = (data) => request.post(`${baseUrl}/login`, data);
