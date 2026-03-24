
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    id: 'p1',
    title: 'Infraestructura Bancaria',
    location: 'Centro Financiero, Santiago',
    category: 'Cabling & Networking',
    image: 'project-cabling',
    description: 'Implementación completa de cableado estructurado categoría 6A para 350 puestos de trabajo y certificación de red.'
  },
  {
    id: 'p2',
    title: 'Centro Logístico Inteligente',
    location: 'Sector Industrial, Quilicura',
    category: 'Seguridad & CCTV',
    image: 'project-security',
    description: 'Instalación de sistema de videovigilancia IP con más de 80 cámaras y central de monitoreo unificada.'
  },
  {
    id: 'p3',
    title: 'Data Center Corporativo',
    location: 'Providencia',
    category: 'Infraestructura TI',
    image: 'project-datacenter',
    description: 'Diseño y montaje de sala de servidores con redundancia eléctrica, sistemas UPS y climatización de precisión.'
  },
  {
    id: 'p4',
    title: 'Planta Industrial',
    location: 'Lampa',
    category: 'Eléctrica',
    image: 'project-electrical',
    description: 'Estudio de instalaciones eléctricas y diseño de tableros de fuerza para nueva línea de producción automatizada.'
  }
];

export default function ProjectsPage() {
  return (
    <div className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <header className="mb-16 text-center max-w-2xl mx-auto">
          <h1 className="text-4xl font-headline font-bold text-primary mb-6">Portafolio de Proyectos</h1>
          <p className="text-muted-foreground">
            Una muestra de nuestro compromiso con la calidad y la excelencia técnica en cada desafío que asumimos.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => {
            const projectImg = PlaceHolderImages.find(img => img.id === project.image);
            return (
              <Card key={project.id} className="overflow-hidden border-none shadow-lg group">
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={projectImg?.imageUrl || ''}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint={projectImg?.imageHint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                    <p className="text-white text-sm italic">{project.description}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold text-primary">{project.title}</h3>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        {project.location}
                      </p>
                    </div>
                    <Badge variant="secondary" className="bg-accent/10 text-accent border-none">
                      {project.category}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
