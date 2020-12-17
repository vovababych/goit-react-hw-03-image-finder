// import axios from 'axios';

const fetchApiGallery = (searchQuery, page) => {
  // console.log(searchQuery);
  console.log(page);
  const URL = 'https://pixabay.com/api/';
  const KEY = '18667452-b6cf3b15ecb06490e1251bb0b';
  return fetch(`${URL}?key=${KEY}&page=${page}&q=${searchQuery}`).then(res =>
    res.json(),
  );
};

export default fetchApiGallery;
