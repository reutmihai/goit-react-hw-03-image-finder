import React from 'react';
import { InfinitySpin } from 'react-loader-spinner'; 
import styles from '../Loader/Loader.module.css';

export const Loader = () => {
  return (
    <div className={styles.loader}>
      <InfinitySpin
        visible={true}
        width="200"
        color="#4fa94d"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
};
