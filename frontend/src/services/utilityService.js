import * as request from './requester';

const baseUrl = 'http://localhost:8080/utility';

export const getRegisterEnums = () => request.get(`${baseUrl}/register-enums`);

export const getRideEnums = () => request.get(`${baseUrl}/creation-enums`);