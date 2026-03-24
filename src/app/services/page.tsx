
import { 
  Network, 
  ShieldCheck, 
  Zap, 
  Server, 
  Search, 
  Activity, 
  Settings, 
  Rss, 
  CheckCircle, 
  FileBox, 
  ShoppingBag 
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    title: 'Ingeniería de Proyectos de Comunicaciones',
    description: 'Diseño conceptual y detallado de sistemas de comunicación corporativos e industriales.',
    icon: Network,
    category: 'Ingeniería'
  },
  {
    title: 'Instalación de Seguridad y CCTV',
    description: 'Sistemas de videovigilancia de alta definición, control de acceso y monitoreo inteligente.',
    icon: ShieldCheck,
    category: 'Seguridad'
  },
  {
    title: 'Estudios de Instalaciones Eléctricas',
    description: 'Análisis profundo de cargas, consumos y cumplimiento de normativas vigentes.',
    icon: Search,
    category: 'Eléctrica'
  },
  {
    title: 'Redes de Corrientes Débiles',
    description: 'Estudios e implementación de sistemas de telefonía, citofonía y redes de datos.',
    icon: Activity,
    category: 'Ingeniería'
  },
  {
    title: 'Planificación y Diseño de Redes',
    description: 'Estructuración estratégica de la topología de red para máxima eficiencia y escalabilidad.',
    icon: Settings,
    category: 'Datos'
  },
  {
    title: 'Análisis de Redes (LAN y WAN)',
    description: 'Diagnóstico de rendimiento, optimización de tráfico y solución de cuellos de botella.',
    icon: Search,
    category: 'Datos'
  },
  {
    title: 'Infraestructura Tecnológica',
    description: 'Montaje integral de salas de servidores (Data Centers), racks, sistemas UPS y climatización.',
    icon: Server,
    category: 'Infraestructura'
  },
  {
    title: 'Cableado Estructurado',
    description: 'Instalaciones profesionales de UTP (Cat 6/6A) y Fibra Óptica para enlaces troncales.',
    icon: Rss,
    category: 'Infraestructura'
  },
  {
    title: 'Certificación de Redes',
    description: 'Pruebas rigurosas para garantizar que su red cumple con los estándares internacionales de calidad.',
    icon: CheckCircle,
    category: 'Calidad'
  },
  {
    title: 'Diseño de Proyectos Eléctricos',
    description: 'Cálculo de tableros, alimentadores y sistemas de iluminación para diversos entornos.',
    icon: FileBox,
    category: 'Eléctrica'
  },
  {
    title: 'Suministro de Equipos',
    description: 'Provisión de switches, routers, accesorios de red y componentes de comunicación de marcas líderes.',
    icon: ShoppingBag,
    category: 'Suministros'
  }
];

export default function ServicesPage() {
  return (
    <div className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <header className="max-w-3xl mb-16">
          <h1 className="text-4xl font-headline font-bold text-primary mb-6">Nuestros Servicios</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            En ICSA Ingeniería S.A., combinamos experiencia técnica con tecnología de punta para ofrecer soluciones robustas y confiables en telecomunicaciones y electricidad.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col h-full border-none shadow-sm hover:shadow-md transition-shadow group">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <service.icon className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-accent">{service.category}</span>
                  <CardTitle className="text-lg leading-tight">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
