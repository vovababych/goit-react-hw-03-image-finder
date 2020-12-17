import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem';
// import PropTypes from 'prop-types';

function ImageGallery({ gallary, onOpenPicture }) {
  console.log(gallary);
  return (
    <ul className="ImageGallery">
      {gallary.map(picture => (
        <ImageGalleryItem
          key={picture.id}
          picture={picture}
          onOpenPicture={onOpenPicture}
        />
      ))}
    </ul>
  );
}

export default ImageGallery;
