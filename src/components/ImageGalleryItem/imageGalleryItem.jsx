import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ webformatURL, largeImageURL, onClick }) => (
  <li className={styles.ImageGalleryItem} onClick={onClick}>
    <img src={webformatURL} alt="" className={styles['ImageGalleryItem-image']} />
  </li>
);

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired, 
};

export default ImageGalleryItem;