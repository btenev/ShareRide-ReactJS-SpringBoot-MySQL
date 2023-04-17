import * as request from './requester';

const baseUrl = 'http://localhost:8080/rides';

export const publishRide = (data, token) => request.post(`${baseUrl}/publish`, data, token);