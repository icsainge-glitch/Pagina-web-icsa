'use client';

import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { projectsData } from '@/lib/data/projects';
import { ArrowRight, MapPin } from 'lucide-react';

export default function ProjectsPage() {
  return (
    <div className="py-20 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <header className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-sm tracking-[0.2em] font-semibold text-primary uppercase mb-4">Portafolio</h2>
          <h1 className="text-4xl md:text-6xl font-headline font-light text-primary tracking-tight leading-tight mb-6">
            Casos de <span className="font-semibold text-primary">Éxito Real</span>.
          </h1>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            Una muestra de nuestro compromiso con la innovación y la excelencia técnica en infraestructura crítica nacional.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projectsData.map((project, idx) => {
            const projectImg = PlaceHolderImages.find(img => img.id === project.image);
            return (
              <Link 
                href={`/projects/${project.id}`} 
                key={project.id} 
                className="block group"
              >
                <Card className="overflow-hidden border border-black/5 shadow-sm hover-lift bg-white h-full transition-all duration-500 rounded-3xl">
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={projectImg?.imageUrl || ''}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      data-ai-hint={projectImg?.imageHint}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                    <div className="absolute bottom-6 left-8 right-8 flex justify-between items-end">
                       <Badge className="bg-white/20 backdrop-blur-md text-white border-white/20 px-3 py-1 font-semibold">
                          {project.category}
                       </Badge>
                    </div>
                  </div>
                  <CardContent className="p-10">
                    <div className="flex justify-between items-start mb-6">
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-primary group-hover:text-accent transition-colors">{project.title}</h3>
                        <p className="text-sm text-muted-foreground flex items-center gap-2 font-light">
                          <MapPin className="h-4 w-4 text-accent" />
                          {project.location}
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm font-light leading-relaxed mb-8 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm font-bold text-primary uppercase tracking-widest group-hover:text-accent transition-colors">
                       Ver Detalles <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
