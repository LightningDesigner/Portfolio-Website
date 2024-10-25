import React from 'react';
import styles from './Body.module.scss';
import InteractivePrototype from './InteractivePrototype';
import OpenLetter from './OpenLetter';

const Body = () => {
  return (
    <div className={styles.body}>
      <InteractivePrototype />
      <OpenLetter />
    </div>
  );
};

export default Body;