'use client';

import { Card, CardContent } from '@/components/ui/card';
import { servicesData } from '@/lib/data/services';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useReveal } from '@/hooks/use-reveal';
import { cn } from '@/lib/utils';

export default function ServicesPage() {
  const [headerRef, headerVisible] = useReveal({ threshold: 0.1 });
  const [contentRef, contentVisible] = useReveal({ threshold: 0.1 });

  return (
    <div className="py-32 bg-zinc-50/50 min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <header ref={headerRef} className={cn(
          "max-w-3xl mb-24 text-center mx-auto reveal-base reveal-up",
          headerVisible && "reveal-visible"
        )}>
          <h2 className="text-sm tracking-[0.2em] font-semibold text-primary uppercase mb-4">Catálogo Integral</h2>
          <h1 className="text-4xl md:text-6xl font-headline font-light text-foreground mb-6 tracking-tight leading-tight">
            Nuestros <span className="font-semibold text-primary">Servicios</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
            Soluciones robustas y confiables para el sector corporativo e industrial, garantizando excelencia operativa en cada etapa.
          </p>
        </header>

        <div ref={contentRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {servicesData.map((service, idx) => (
            <Link 
              href={`/services/${service.slug}`} 
              key={service.slug} 
              className={cn(
                "group block focus:outline-none focus:ring-2 focus:ring-accent rounded-2xl outline-none reveal-base reveal-up",
                contentVisible && "reveal-visible"
              )}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <Card className="border border-black/5 shadow-sm hover-lift bg-white overflow-hidden rounded-2xl flex flex-col h-full relative group">
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  <Image 
                    src={service.headerImage} 
                    alt={service.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                </div>
                <CardContent className="p-8 flex flex-col flex-grow bg-white">
                   <div className="mb-6 inline-flex p-3 rounded-xl bg-primary/5 text-primary">
                      <service.icon className="h-6 w-6" />
                   </div>
                   <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">{service.title}</h3>
                   <p className="text-muted-foreground leading-relaxed text-sm font-light mb-8 line-clamp-3">
                     {service.description}
                   </p>
                   <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-primary uppercase tracking-widest">
                      Explorar detalle <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                   </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
