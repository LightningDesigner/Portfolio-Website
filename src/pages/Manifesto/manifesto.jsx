import React from 'react';
import Header from '../../components/Header/Header';
import Body from '../../components/Body/Body';
import Footer from '../../components/Footer/Footer';
import styles from '../../styles/manifesto.module.scss';

const Manifesto = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default Manifesto;