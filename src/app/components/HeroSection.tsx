"use client";

import React, { useState, useEffect } from 'react';
import styles from './HeroSection.module.css';

const slides = [
  {
    src: '/hero.jpg',
    title: 'Ogólnopolski Przegląd Musztry Klas Mundurowych',
    description: 'Mamy powód do dumy.IV miejsce w Ogólnopolskim Przeglądzie Musztry Klas Mundurowych. Radom 2024.Przegraliśmy III miejsce w dogrywce 1 punktem .',
  },
  {
    src: '/hero2.jpg',
    title: `Uroczystość ślubowania klas pierwszych w ZSNR 1  im. Jana Kochanowskiego w Węgrowie`,
    description: `Dyrektor Zespołu Szkół Nr 1 im. Kamila Krzysztofa Baczyńskiego w Sokołowie Podlaskim pani Małgorzata Baranowska i wicedyrektor pan Piotr Adamczuk wraz z Kompanią Reprezentacyjną naszej szkoły na uroczystości ślubowania klas pierwszych w Zespole Szkół Ponadpodstawowych im. Jana Kochanowskiego w Węgrowie.`,
  },
  {
    src: '/hero3.png',
    title: '(Cyber)bezpieczne wakacje',
    description: `Nie pozwólcie, aby cyberprzestępcy popsuli wam wakacje!

Wakacje są oczekiwanym z utęsknieniem okresem, w którym możemy nareszcie odpocząć. Niestety zdarza się, że podczas błogiego korzystania z wypoczynku tracimy czujność i jesteśmy mniej ostrożni. Na to czekają tylko oszuści, którzy głównie stosują techniki socjotechniki bazujące na ludzkich emocjach i manipulują naszymi zachowaniami.`,
  },
];

const HeroSection = () => {
  const getRandomSlide = () => {
    return Math.floor(Math.random() * slides.length);
  };

  const [currentSlide, setCurrentSlide] = useState(getRandomSlide());

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className={styles.hero}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
        >
          <img src={slide.src} alt={`Slide ${index + 1}`} className={styles.image} />
          <div className={styles.overlay}>
            <h1>{slide.title}</h1>
            <p>{slide.description}</p>
            <div className={styles.buttons}>
              <button className={styles.button}>Czytaj dalej</button>
              <button className={styles.button} style={{background:"transparent",color:"#fff"}}>Pozostałe wpisy</button>
            </div>
          </div>
        </div>
      ))}
      <button className={styles.prev} onClick={prevSlide}>‹</button>
      <button className={styles.next} onClick={nextSlide}>›</button>
    </div>
  );
};

export default HeroSection;
