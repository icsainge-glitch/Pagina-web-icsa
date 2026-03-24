import { notFound } from 'next/navigation';
import { servicesData } from '@/lib/data/services';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function generateStaticParams() {
  return servicesData.map((s) => ({
    slug: s.slug,
  }));
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="bg-background min-h-[70vh] pb-20">
      {/* Header Banner */}
      <div className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden bg-primary">
        <Image 
          src={service.headerImage} 
          alt={`Imagen representativa de ${service.title}`} 
          fill 
          className="object-cover brightness-[0.35]" 
          priority 
        />
        <div className="absolute inset-0 flex items-center justify-center container mx-auto px-4 z-10 text-center">
          <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="text-sm md:text-base font-bold uppercase tracking-widest text-accent mb-4 block">{service.category}</span>
            <h1 className="text-4xl md:text-6xl font-headline font-bold text-white mb-6 leading-tight drop-shadow-md">{service.title}</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12">
        <div className="max-w-4xl space-y-8 mx-auto">
          <Link href="/services" className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors font-medium">
            <ArrowLeft className="h-4 w-4" /> Volver a Servicios
          </Link>
          
          <div className="prose prose-lg dark:prose-invert mt-8 bg-card p-8 md:p-12 rounded-3xl border border-border/50 shadow-sm">
            <p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed mb-8">
              {service.description}
            </p>
            <div className="h-px w-full bg-border my-8" />
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-primary/10 text-primary">
                 <service.icon className="h-8 w-8" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground m-0">Detalles de Operación</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {service.detailedDescription}
            </p>
          </div>
          
          <div className="pt-8 text-center md:text-left">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground h-14 px-8 text-lg rounded-xl shadow-md hover:shadow-lg transition-all">
              <Link href="/contact">Solicitar cotización para este servicio</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
