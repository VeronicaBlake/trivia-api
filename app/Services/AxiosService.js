export const api = axios.create({
    baseURL: 'https://opentdb.com/api.php?amount=25&category=15&type=multiple',
    timeout: 10000
  })