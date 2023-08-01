import axios from 'axios';

export const api = axios.create({
  baseURL: `https://test.ki4bl.org/Api.php`,
  headers: {
    'Content-Type': 'application/json'
  }
});
