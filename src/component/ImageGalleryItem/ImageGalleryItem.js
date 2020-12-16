// import React, { Component } from 'react';
// import PropTypes from 'prop-types'

function ImageGalleryItem({ picture, onOpenPicture }) {
  console.log(picture);
  return (
    <li key={picture.id} className="ImageGalleryItem" onClick={onOpenPicture}>
      <img
        src={picture.webformatURL}
        alt=""
        className="ImageGalleryItem-image"
        data-largeImage={picture.largeImageURL}
      />
    </li>
  );
}

export default ImageGalleryItem;
