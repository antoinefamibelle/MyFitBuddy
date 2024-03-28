import axios from 'axios';

export const sdk = axios.create({
  baseURL: 'http://localhost:3200/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});