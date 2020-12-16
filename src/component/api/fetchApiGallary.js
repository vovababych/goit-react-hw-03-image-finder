// import axios from 'axios';

const fetchApiGallery = searchQuery => {
  return fetch(
    `https://pixabay.com/api/?key=18667452-b6cf3b15ecb06490e1251bb0b&q=css`,
  ).then(res => res.json());
};

export default fetchApiGallery;
