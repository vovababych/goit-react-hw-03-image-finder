import axios from 'axios';

const fetchDataApi = (searchQuery, page = 1) => {
  const URL = 'https://pixabay.com/api/';
  const KEY = '18667452-b6cf3b15ecb06490e1251bb0b';
  return axios
    .get(`${URL}?key=${KEY}&per_page=12&page=${page}&q=${searchQuery}`)
    .then(res => res.data);
};

export default fetchDataApi;
