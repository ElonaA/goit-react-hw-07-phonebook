import axios from 'axios';

axios.defaults.baseURL = 'https://6184154091d76c00172d1d69.mockapi.io/api/v1/';

export const fetchContacts = async () => {
  const { data } = await axios.get('/contacts');

  return data;
};

export const addContact = async contact => {
  const postData = await axios.post('/contacts', contact);

  return postData;
};
