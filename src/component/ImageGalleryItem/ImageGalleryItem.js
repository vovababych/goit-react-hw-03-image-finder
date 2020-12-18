// import PropTypes from 'prop-types'

import s from './ImageGalleryItem.module.css';

function ImageGalleryItem({ picture, onOpenPicture }) {
  // console.log(picture);
  return (
    <li
      className={s.item}
      onClick={() => {
        onOpenPicture(picture);
      }}
    >
      <img src={picture.webformatURL} alt={picture.tags} className={s.image} />
    </li>
  );
}

export default ImageGalleryItem;
