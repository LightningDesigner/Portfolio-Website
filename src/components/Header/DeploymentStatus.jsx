import React, { useState, useEffect } from 'react';
import styles from './DeploymentStatus.module.scss';

const DeploymentStatus = () => {
    const finalText = '/DEPLOYED';
    const [displayText, setDisplayText] = useState('');
  
    const getRandomSymbol = () => {
      const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';
      return symbols[Math.floor(Math.random() * symbols.length)];
    };
  
    const getRandomChar = () => {
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      return chars[Math.floor(Math.random() * chars.length)];
    };
  
    const generateRandomString = () => {
      return getRandomSymbol() + Array(finalText.length - 1).fill().map(getRandomChar).join('');
    };
  
    useEffect(() => {
      let currentIndex = 0;
      let phase = 1;
  
      const intervalId = setInterval(() => {
        if (phase === 1) {
          const randomText = generateRandomString();
          setDisplayText(randomText);
          console.log('Phase 1:', randomText);
          if (currentIndex === 12) { // Increased iterations for more randomness
            phase = 2;
            currentIndex = 0;
          }
          currentIndex++;
        } else {
          if (currentIndex === finalText.length) {
            clearInterval(intervalId);
            console.log('Final text:', displayText);
            return;
          }
  
          setDisplayText((prevText) => {
            const nextChar = finalText[currentIndex];
            const newText = finalText.slice(0, currentIndex + 1) + prevText.slice(currentIndex + 1);
            console.log('Phase 2:', newText);
            return newText;
          });
          currentIndex++;
        }
      }, 30); // Adjust this value to control the speed of the animation
  
      return () => clearInterval(intervalId);
    }, []);
  
    return <div className={styles.deploymentStatus}>{displayText}</div>;
  };
  
  export default DeploymentStatus;