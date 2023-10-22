import axios from 'axios';

axios.defaults.baseURL = 'https://652fcda36c756603295db0b7.mockapi.io/api/';

export const fetchAdverts = async params => {
  const queryParams = new URLSearchParams(params);
  const response = await axios.get(`adverts?${queryParams}`);
  return response.data;
};
