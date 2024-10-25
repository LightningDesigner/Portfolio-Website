import React from 'react';
import styles from './Header.module.scss';
import DeploymentStatus from './DeploymentStatus';
import Timer from './Timer';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <DeploymentStatus />
        <Timer />
      </div>
    </header>
  );
};

export default Header;