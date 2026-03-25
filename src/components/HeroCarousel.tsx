'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const HERO_IMAGES = [
  '/hero-industrial.png?v=5',
  '/hero-icsa-office.jpg?v=4',
  '/hero-icsa-circuit.jpg?v=4'
];

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4000); // Cambia cada 4 segundos
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {HERO_IMAGES.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={`Fondo Hero ${index + 1}`}
          fill
          className={`object-cover brightness-[0.5] transition-all duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
          }`}
          priority={index === 0}
        />
      ))}
    </>
  );
}
