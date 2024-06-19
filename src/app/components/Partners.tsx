"use-client";
import Link from 'next/link';
import styles from './EducationPaths.module.css'
import style from './Partners.module.css'
import React, { useState, useEffect } from 'react';

type Partner = {
  id: number;
  logo: string;
  name: string;
};

const partners: Partner[] = [
  {
    id: 1,
    logo: '/partner1.jpg',
    name: 'Partner 1',
  },
  {
    id: 2,
    logo: '/partner2.jpg',
    name: 'Partner 2',
  },
  {
    id: 3,
    logo: '/partner3.jpg',
    name: 'Partner 3',
  },
  {
    id: 4,
    logo: '/partner4.jpg',
    name: 'Partner 4',
  },
  {
    id: 5,
    logo: '/partner5.jpg',
    name: 'Partner 5',
  },
  {
    id: 6,
    logo: '/partner6.jpg',
    name: 'Partner 6',
  },
  {
    id: 7,
    logo: '/partner7.jpg',
    name: 'Partner 7',
  },
  {
    id: 8,
    logo: '/partner8.jpg',
    name: 'Partner 8',
  },
  // Add more partners as needed
];

const Partners = () => (
  <div className={styles.container}>
    <h2 className={styles.title}>Partnerzy</h2>
    <div className={style.partnersgrid}>
      {partners.map((partner) => (
        <div key={partner.id} className={style.partner}>
          <img src={partner.logo} alt={partner.name} />
        </div>
      ))}
    </div>
  </div>
);
export default Partners;
