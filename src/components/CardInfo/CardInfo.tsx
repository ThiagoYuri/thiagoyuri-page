import React, { FC } from 'react';
import styles from './CardInfo.module.css';

interface CardInfoProps {}

const CardInfo: FC<CardInfoProps> = () => (
  <div className={styles.CardInfo}>
    CardInfo Component
  </div>
);

export default CardInfo;
