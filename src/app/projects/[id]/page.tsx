'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { projectsData } from '@/lib/data/projects';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft, 
  CheckCircle2, 
  BarChart3, 
  ChevronRight,
  Info
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useReveal } from '@/hooks/use-reveal';

export default function ProjectDetailPage() {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === id);
  const [headerRef, headerVisible] = useReveal({ threshold: 0.1 });
  const [contentRef, contentVisible] = useReveal({ threshold: 0.1 });

  if (!project) {
    return (
      <div className="py-40 text-center">
        <h1 className="text-2xl font-bold mb-4">Proyecto no encontrado</h1>
        <Button asChild variant="outline">
          <Link href="/projects">Volver al Portafolio</Link>
        </Button>
      </div>
    );
  }

  const projectImg = PlaceHolderImages.find(img => img.id === project.image);

  return (
    <div className="bg-background min-h-screen">
      {/* Navigation Header */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-black/5 py-4">
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <Button asChild variant="ghost" size="sm" className="gap-2 text-primary hover:text-accent">
            <Link href="/projects">
              <ArrowLeft className="h-4 w-4" />
              Volver al Portafolio
            </Link>
          </Button>
          <div className="hidden md:flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-widest">
            <Link href="/" className="hover:text-primary transition-colors">Inicio</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/projects" className="hover:text-primary transition-colors">Proyectos</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-primary">{project.title}</span>
          </div>
        </div>
      </div>

      {/* Hero section with Reveal */}
      <section ref={headerRef} className="py-16 md:py-24 overflow-hidden">
        <div className={cn(
          "container mx-auto px-6 md:px-12 reveal-base reveal-up",
          headerVisible && "reveal-visible"
        )}>
          <div className="max-w-4xl">
            <Button asChild variant="link" className="p-0 h-auto mb-8 text-accent font-bold gap-2 group/back">
              <Link href="/projects">
                <ArrowLeft className="h-4 w-4 transition-transform group-hover/back:-translate-x-1" />
                Volver al Portafolio
              </Link>
            </Button>
            <br />
            <Badge className="bg-accent/10 text-accent border-none px-4 py-1 mb-6 font-bold uppercase tracking-wider text-xs">
              {project.category}
            </Badge>
            <h1 className="text-4xl md:text-7xl font-headline font-light text-primary tracking-tighter leading-tight mb-8">
              {project.title.split(' ').map((word, i) => (
                <span key={i} className={i === project.title.split(' ').length - 1 ? "font-bold" : ""}>
                  {word}{' '}
                </span>
              ))}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-2xl">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content with Reveal */}
      <section ref={contentRef} className="pb-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left Column: Image and Description */}
            <div className={cn(
              "lg:col-span-8 reveal-base reveal-left",
              contentVisible && "reveal-visible"
            )}>
              <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden shadow-2xl mb-12 bg-zinc-100">
                <Image
                  src={projectImg?.imageUrl || ''}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="prose prose-zinc max-w-none">
                <h2 className="text-3xl font-bold text-primary mb-6">Visión General</h2>
                <p className="text-lg text-muted-foreground font-light leading-relaxed mb-12">
                  {project.fullDescription}
                </p>

                <h2 className="text-3xl font-bold text-primary mb-8">Alcance del Proyecto</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                  {project.scope.map((item, idx) => (
                    <div key={idx} className="flex gap-4 p-6 rounded-2xl bg-zinc-50 border border-black/5 hover:bg-white hover:shadow-xl transition-all duration-300">
                      <div className="flex-shrink-0 p-3 rounded-xl bg-primary/5 text-primary">
                        <item.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-primary mb-2">{item.title}</h4>
                        <p className="text-sm text-muted-foreground font-light leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Stats & Technical Details */}
            <div className={cn(
              "lg:col-span-4 space-y-12 reveal-base reveal-right",
              contentVisible && "reveal-visible"
            )}>
              {/* Stats Card */}
              <div className="bg-primary p-10 rounded-3xl text-white shadow-2xl relative overflow-hidden group">
                 <BarChart3 className="absolute top-4 right-4 h-24 w-24 opacity-5 rotate-12 transition-transform group-hover:scale-110" />
                 <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                    <Info className="h-5 w-5 text-accent" />
                    Métricas Clave
                 </h3>
                 <div className="space-y-8 relative z-10">
                    {project.stats.map((stat, idx) => (
                      <div key={idx} className="flex justify-between items-end border-b border-white/10 pb-4">
                        <span className="text-sm font-bold uppercase tracking-widest opacity-60">{stat.label}</span>
                        <span className="text-2xl font-black">{stat.value}</span>
                      </div>
                    ))}
                 </div>
              </div>

              {/* Technical Details List */}
              <div className="p-10 rounded-3xl bg-white border border-black/5 shadow-sm">
                <h3 className="text-xl font-bold text-primary mb-8 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                  Puntos Destacados
                </h3>
                <ul className="space-y-4">
                  {project.technicalDetails.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-4 group">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2 group-hover:scale-150 transition-transform"></div>
                      <span className="text-muted-foreground text-sm font-light group-hover:text-primary transition-colors">
                        {detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact CTA */}
              <div className="p-10 rounded-3xl bg-accent text-white shadow-xl">
                 <h4 className="text-xl font-bold mb-4">¿Necesitas una solución similar?</h4>
                 <p className="text-sm opacity-90 mb-8 font-light">
                    Nuestros ingenieros están listos para diseñar la infraestructura crítica que tu negocio requiere.
                 </p>
                 <Button asChild className="w-full bg-white text-accent hover:bg-white/90 font-bold rounded-xl h-12">
                   <Link href="/#contacto">Contactar Ahora</Link>
                 </Button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
