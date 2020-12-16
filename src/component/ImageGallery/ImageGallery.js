import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem';
// import PropTypes from 'prop-types';

function ImageGallery({ gallary, onOpenPicture }) {
  return (
    <ul className="ImageGallery">
      {gallary.map(picture => (
        <ImageGalleryItem picture={picture} onOpenPicture={onOpenPicture} />
      ))}
    </ul>
  );
}

export default ImageGallery;
