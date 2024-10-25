import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Footer.module.scss';

const Footer = () => {
  const router = useRouter();

  const navItems = [
    { name: 'Craft', path: '/craft' },
    { name: 'Projects', path: '/projects' },
    { name: 'Manifesto', path: '/' },
    { name: 'Writings', path: '/writings' },
    { name: 'Gallery', path: '/gallery' },
  ];

  return (
    <footer className={styles.footer}>
      {navItems.map((item) => (
        <Link 
          key={item.name} 
          href={item.path}
          className={`${styles.link} ${router.pathname === item.path ? styles.active : ''}`}
        >
          {item.name}
        </Link>
      ))}
    </footer>
  );
};

export default Footer;