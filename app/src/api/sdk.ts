import axios from 'axios';

export const sdk = axios.create({
  baseURL: 'https://localhost:8080/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});