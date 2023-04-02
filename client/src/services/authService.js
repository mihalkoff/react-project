import * as request from './requester';

const baseUrl = 'http://localhost:3030/users';

// Login
export const login = (data) =>  request.post(`${baseUrl}/login`, data);