
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Network, 
  ShieldCheck, 
  Zap, 
  Settings, 
  Cpu, 
  BarChart3, 
  ArrowRight,
  Server
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const featuredServices = [
  {
    title: 'Ingeniería de Proyectos',
    description: 'Diseño experto de redes de comunicación a medida.',
    icon: Network,
  },
  {
    title: 'Seguridad & CCTV',
    description: 'Protección integral con sistemas avanzados de vigilancia.',
    icon: ShieldCheck,
  },
  {
    title: 'Infraestructura TI',
    description: 'Implementación de salas de servidores, racks y UPS.',
    icon: Server,
  },
  {
    title: 'Proyectos Eléctricos',
    description: 'Estudios y cálculo de instalaciones eléctricas industriales.',
    icon: Zap,
  }
];

export default function Home() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <div className="flex flex-col gap-0">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <Image
          src={heroImg?.imageUrl || ''}
          alt="Engineering background"
          fill
          className="object-cover brightness-[0.3]"
          priority
          data-ai-hint="data center"
        />
        <div className="container relative z-10 px-4 text-center text-white max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-headline font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Ingeniería de Vanguardia para un Mundo <span className="text-accent">Conectado</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/80 animate-in fade-in slide-in-from-bottom-6 duration-700">
            Especialistas en infraestructura tecnológica, seguridad electrónica y soluciones de ingeniería de alta precisión para empresas modernas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-8 duration-700">
            <Button asChild size="lg" className="bg-accent text-primary font-semibold hover:bg-accent/90">
              <Link href="/contact">Solicitar Cotización</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              <Link href="/services">Nuestros Servicios</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Highlights */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4">Soluciones Integrales</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ofrecemos una amplia gama de servicios especializados para garantizar la continuidad operativa y seguridad de su empresa.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredServices.map((service, idx) => (
              <Card key={idx} className="border-none shadow-md hover:shadow-xl transition-all duration-300 group">
                <CardContent className="pt-8 text-center">
                  <div className="mb-6 inline-flex p-4 rounded-full bg-secondary text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-primary">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Link href="/services" className="text-accent font-medium inline-flex items-center gap-2 hover:gap-3 transition-all">
                    Leer más <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Inquiry Tool CTA */}
      <section className="py-20 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/10 -skew-x-12 translate-x-1/2"></div>
        <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/20 rounded-full text-accent text-xs font-bold tracking-wider uppercase">
              <Cpu className="h-4 w-4" /> Inteligencia Artificial
            </div>
            <h2 className="text-3xl md:text-5xl font-headline font-bold">
              ¿No sabes por dónde <span className="text-accent">empezar?</span>
            </h2>
            <p className="text-lg text-white/80 leading-relaxed">
              Utiliza nuestro asistente virtual para describir tu proyecto. Nuestra IA analizará tus necesidades y te sugerirá los servicios más adecuados de nuestro catálogo.
            </p>
            <Button asChild size="lg" className="bg-accent text-primary hover:bg-accent/90">
              <Link href="/ai-inquiry">Probar Asistente de Proyecto</Link>
            </Button>
          </div>
          <div className="flex-1 w-full max-w-md">
             <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center">
                    <BarChart3 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-sm">IA de Diagnóstico</p>
                    <p className="text-xs text-white/60">Disponible 24/7</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white/5 p-3 rounded-lg text-sm text-white/80">
                    "Hola, necesito instalar un sistema de cámaras y mejorar la red wifi de mi oficina..."
                  </div>
                  <div className="bg-accent/20 p-3 rounded-lg text-sm border border-accent/30 text-accent">
                    "Para tu proyecto sugiero: Instalación de CCTV, Análisis de redes LAN/WAN y Suministro de equipos..."
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Trust & Expertise */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-12">¿Por qué confiar en ICSA?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h4 className="text-4xl font-bold text-accent">15+</h4>
              <p className="font-bold text-primary">Años de experiencia</p>
              <p className="text-sm text-muted-foreground">Trayectoria sólida entregando soluciones críticas en ingeniería.</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-4xl font-bold text-accent">500+</h4>
              <p className="font-bold text-primary">Proyectos Completados</p>
              <p className="text-sm text-muted-foreground">Desde pequeñas oficinas hasta complejos industriales de gran escala.</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-4xl font-bold text-accent">100%</h4>
              <p className="font-bold text-primary">Certificados</p>
              <p className="text-sm text-muted-foreground">Personal técnico calificado y certificaciones vigentes en normativas.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
