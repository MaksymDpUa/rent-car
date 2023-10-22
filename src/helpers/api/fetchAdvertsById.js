import axios from 'axios';
axios.defaults.baseURL = 'https://652fcda36c756603295db0b7.mockapi.io/api/';
export const fetchAdvertById = async id => {
  const response = await axios.get(`adverts/${id}`);
  return response.data;
};

