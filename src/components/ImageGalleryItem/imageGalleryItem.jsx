import React from 'react';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ webformatURL, largeImageURL }) => {
  return (
    <li className={styles.ImageGalleryItem}>
      <img
        src={webformatURL}
        alt=""
        className={styles['ImageGalleryItem-image']}
        onClick={() => console.log(largeImageURL)} // Poți modifica pentru a deschide o modală
      />
    </li>
  );
};

export default ImageGalleryItem;
