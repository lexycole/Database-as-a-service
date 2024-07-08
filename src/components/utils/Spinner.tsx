import React from 'react';
import styles from './Spinner.module.css';

function Spinner() {
  return (
    <div>
      <div className={styles.dots}>
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}

export default Spinner;
