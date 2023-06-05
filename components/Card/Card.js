// components/Card.js
import React from 'react';
import styles from './Card.module.css';

function Card({ anime, onClick = () => {} }) {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <button onClick={onClick} className={styles['card-body']}>
          <img
            alt={anime.title}
            src={anime.img_url}
            className={styles['rounded-lg']}
          />
          <h2 className="text-lg font-semibold">{anime.title}</h2>
        </button>
      </div>
    </div>
  );
}

export default Card;
