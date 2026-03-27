
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    id: 'entel',
    title: 'Proyecto ENTEL',
    location: 'Datacenters (RM)',
    category: 'Fibra Óptica & Cobre',
    image: 'project-entel',
    description: 'Planificación, coordinación y ejecución de cableado estructurado en datacenters críticos: Amunátegui, Ciudad de los Valles, Longovilo, Pedro de Valdivia y Ñuñoa.'
  },
  {
    id: 'mall-plaza',
    title: 'Proyecto Mall Plaza',
    location: 'Cobertura Nacional',
    category: 'Seguridad & CCTV',
    image: 'project-security',
    description: 'Mantenimiento correctivo y preventivo de sistemas CCTV, control centralizado y soluciones tecnológicas para estacionamientos a nivel nacional.'
  },
  {
    id: 'gm',
    title: 'Proyecto General Motors',
    location: 'Edificio Tech Center',
    category: 'Networking & CCTV',
    image: 'project-gm',
    description: 'Implementación de red LAN, backbone de fibra óptica, switches y sistemas de videovigilancia para el centro tecnológico corporativo.'
  },
  {
    id: 'javiera-carrera',
    title: 'Colegio Javiera Carrera',
    location: 'Santiago',
    category: 'Conectividad & CCTV',
    image: 'project-javiera',
    description: 'Red con balanceo y respaldo de internet, 51 switches, red WiFi con 51 APs y 134 puntos de usuario en categoría 6A.'
  },
  {
    id: 'trendy',
    title: 'Proyecto Trendy',
    location: 'Plantas Industriales',
    category: 'Wireless & Fibra',
    image: 'project-trendy',
    description: 'Instalación de Access Points para ambientes de frío extremo, monitoreo remoto, enlaces de fibra óptica y redes eléctricas exclusivas.'
  },
  {
    id: 'subus',
    title: 'Proyecto SUBUS',
    location: 'Terminales RM',
    category: 'Ingeniería & Seguridad',
    image: 'project-subus',
    description: 'Ingeniería e implementación de CCTV para terminales de buses, incluyendo energía estabilizada, obras civiles y centros de control.'
  },
  {
    id: 'umce',
    title: 'Proyecto UMCE',
    location: 'Campus Universitario',
    category: 'Infraestructura TI',
    image: 'project-umce',
    description: 'Desarrollo de backbone de fibra óptica, canalización subterránea, obras civiles, fusiones y certificación reflectométrica.'
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
