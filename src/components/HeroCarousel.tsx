'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

const HERO_DATA = [
  {
    image: '/hero-icsa-office.jpg?v=4',
    title: <>Ingeniería de <span className="font-semibold text-accent">Alto Estándar</span></>,
    description: "Diseño y ejecución de infraestructuras críticas con precisión técnica. Garantizamos la solidez y eficiencia de cada proyecto."
  },
  {
    image: '/hero-icsa-circuit.jpg?v=4',
    title: <>Excelencia en <span className="font-semibold text-accent">Certificación</span></>,
    description: "Especialistas en auditorías técnicas y cumplimiento de normativas internacionales. Garantizamos la máxima calidad en cada proyecto de ingeniería."
  },
  {
    image: '/hero-industrial.png?v=5',
    title: <>Arquitectos de su <span className="font-semibold text-accent">Continuidad Operativa</span></>,
    description: "Diseñamos y certificamos la infraestructura tecnológica más crítica para el quehacer nacional, asegurando que su negocio no se detenga jamás."
  }
];

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_DATA.length);
    }, 6000); // Cambiado a 6 segundos para dar tiempo a leer el texto
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="absolute inset-0 z-0">
        {HERO_DATA.map((item, index) => (
          <Image
            key={item.image}
            src={item.image}
            alt={`Fondo Hero ${index + 1}`}
            fill
            className={`object-cover brightness-[0.55] transition-all duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
            }`}
            priority={index === 0}
          />
        ))}
      </div>

      <div className="container relative z-10 px-4 text-center text-white max-w-4xl mx-auto flex flex-col items-center justify-center h-full">
        {HERO_DATA.map((item, index) => (
          <div 
            key={index} 
            className={`absolute inset-x-0 transition-all duration-1000 ease-in-out flex flex-col items-center px-4 ${
              index === currentIndex 
                ? 'opacity-100 translate-y-0 pointer-events-auto' 
                : 'opacity-0 translate-y-8 pointer-events-none'
            }`}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-headline font-light mb-4 md:mb-6 tracking-tight text-balance">
              {item.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-8 md:mb-10 text-white/80 font-light text-balance max-w-2xl px-2">
              {item.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center w-full sm:w-auto px-4 sm:px-0">
              <Button asChild size="lg" className="bg-accent text-accent-foreground font-semibold rounded-full px-6 sm:px-8 hover:bg-accent/90 shadow-lg transition-transform hover:-translate-y-1 w-full sm:w-auto">
                <Link href="/services">Explorar Servicios</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white/40 rounded-full px-6 sm:px-8 hover:bg-white hover:text-foreground transition-all w-full sm:w-auto">
                <Link href="#contacto">Contacto Directo</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
