import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css'; 

const Button = ({ onClick, visible }) => {
  if (!visible) return null; 

  return (
    <button className={styles.Button} onClick={onClick}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default Button;
