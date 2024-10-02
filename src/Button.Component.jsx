import React from 'react';
import styles from './Button.module.css';

export const Button = ({ primary, size, children }) => {
  // Classes dinâmicas com base nas props recebidas
  const buttonClass = `
    ${styles.button} 
    ${primary ? styles.primary : styles.secondary} 
    ${size === 'small' ? styles.small : size === 'large' ? styles.large : ''}
  `;

  return (
    <button className={buttonClass}>
      {children}
    </button>
  );
};


