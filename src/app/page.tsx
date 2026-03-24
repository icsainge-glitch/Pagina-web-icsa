
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { HeroCarousel } from '@/components/HeroCarousel';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Network, 
  ShieldCheck, 
  Zap, 
  Settings, 
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

import { servicesData } from '@/lib/data/services';

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-foreground">
        <HeroCarousel />
        <div className="container relative z-10 px-4 text-center text-white max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-headline font-light mb-6 tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-700">
            Soluciones Integrales en <span className="font-semibold text-accent">Ingeniería</span>
          </h1>
          <p className="text-lg md:text-xl mb-10 text-white/80 font-light animate-in fade-in slide-in-from-bottom-6 duration-700 tracking-wide">
            Empresa chilena especializada en telecomunicaciones, electricidad y seguridad tecnológica. Apoyando la toma de decisiones con información técnica confiable.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-in fade-in slide-in-from-bottom-8 duration-700">
            <Button asChild size="lg" className="bg-accent text-accent-foreground font-semibold rounded-full px-8 hover:bg-accent/90 shadow-lg transition-transform hover:-translate-y-1">
              <Link href="/services">Explorar Servicios</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white/40 rounded-full px-8 hover:bg-white hover:text-foreground transition-all">
              <Link href="#contacto">Contacto Directo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Highlights */}
      <section className="py-24 bg-zinc-50/50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-20 text-center mx-auto">
            <h2 className="text-sm tracking-[0.2em] font-semibold text-primary uppercase mb-4">Especialidades</h2>
            <h3 className="text-3xl md:text-5xl font-light text-foreground tracking-tight leading-tight">
              Diseño, implementación y certificación de <span className="font-semibold text-primary">sistemas técnicos</span>.
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {servicesData.slice(0, 6).map((service, idx) => (
              <Link href={`/services/${service.slug}`} key={idx} className="group block focus:outline-none focus:ring-2 focus:ring-accent rounded-2xl outline-none">
                <Card className="border border-black/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 bg-white overflow-hidden rounded-2xl flex flex-col h-full relative group">
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
                        Explorar <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                     </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics & CTA */}
      <section className="py-32 text-white overflow-hidden relative">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2000" 
            alt="Data Center Infrastructure" 
            fill 
            className="object-cover brightness-[0.25] transition-transform duration-[10s] hover:scale-105" 
          />
          <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
        </div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-headline font-light mb-12 tracking-tight">
               Infraestructura confiable, <span className="font-semibold text-accent">resultados medibles</span>.
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-0 max-w-5xl mx-auto mb-16">
               <div className="flex-1 flex flex-col items-center justify-center p-6 w-full md:border-r border-white/10">
                  <span className="text-5xl md:text-7xl font-bold text-white mb-3 tracking-tighter">15+</span>
                  <span className="text-sm text-white/50 uppercase tracking-widest font-semibold">Años de Exp.</span>
               </div>
               <div className="flex-1 flex flex-col items-center justify-center p-6 w-full md:border-r border-white/10">
                  <span className="text-5xl md:text-7xl font-bold text-white mb-3 tracking-tighter">500+</span>
                  <span className="text-sm text-white/50 uppercase tracking-widest font-semibold">Proyectos</span>
               </div>
               <div className="flex-1 flex flex-col items-center justify-center p-6 w-full md:border-r border-white/10">
                  <span className="text-5xl md:text-7xl font-bold text-white mb-3 tracking-tighter">100%</span>
                  <span className="text-sm text-white/50 uppercase tracking-widest font-semibold">Certificados</span>
               </div>
               <div className="flex-1 flex flex-col items-center justify-center p-6 w-full">
                  <span className="text-5xl md:text-7xl font-bold text-white mb-3 tracking-tighter">24/7</span>
                  <span className="text-sm text-white/50 uppercase tracking-widest font-semibold">Soporte Vital</span>
               </div>
            </div>
            <p className="text-lg text-white/70 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
               Si su empresa requiere un socio estratégico para diseñar, implementar o certificar infraestructura tecnológica o eléctrica crítica, estamos a su disposición.
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground font-semibold rounded-full px-10 hover:bg-accent/90 shadow-lg transition-transform hover:-translate-y-1">
               <Link href="/contact">Hablar con ICSA</Link>
            </Button>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-white border-y border-black/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
               <h2 className="text-sm tracking-[0.2em] font-semibold text-primary uppercase mb-4">Propuesta de Valor</h2>
               <h3 className="text-3xl md:text-5xl font-light text-foreground tracking-tight leading-tight mb-8">
                 Elevamos el estándar de la <span className="font-semibold text-primary">ingeniería corporativa</span>.
               </h3>
               <p className="text-muted-foreground leading-relaxed font-light text-lg mb-10">
                 Ejecutamos proyectos de misión crítica con un altísimo nivel técnico, adaptándonos exactamente a sus requerimientos y certificando de extremo a extremo cada entrega operacional.
               </p>
               <Button asChild size="lg" className="bg-primary text-primary-foreground font-medium rounded-full px-8 shadow-sm hover:shadow-md transition-all">
                  <Link href="/about">Conocer más sobre ICSA</Link>
               </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
               <div className="space-y-4">
                  <div className="h-14 w-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary border border-primary/10 shadow-sm"><Settings className="h-6 w-6"/></div>
                  <h4 className="text-lg font-semibold text-foreground">Soluciones Integrales</h4>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">Cobertura completa, desde el diseño y planificación hasta la certificación final del proyecto.</p>
               </div>
               <div className="space-y-4">
                  <div className="h-14 w-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary border border-primary/10 shadow-sm"><ShieldCheck className="h-6 w-6"/></div>
                  <h4 className="text-lg font-semibold text-foreground">Alto Nivel Técnico</h4>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">Personal altamente capacitado y procesos enfocados estrictamente en la calidad operativa.</p>
               </div>
               <div className="space-y-4">
                  <div className="h-14 w-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary border border-primary/10 shadow-sm"><Network className="h-6 w-6"/></div>
                  <h4 className="text-lg font-semibold text-foreground">Experiencia Compleja</h4>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">Capacidad demostrada para ejecutar proyectos de gran envergadura y complejidad técnica.</p>
               </div>
               <div className="space-y-4">
                  <div className="h-14 w-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary border border-primary/10 shadow-sm"><Zap className="h-6 w-6"/></div>
                  <h4 className="text-lg font-semibold text-foreground">Adaptabilidad</h4>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">Soluciones diseñadas a medida para cumplir con requerimientos precisos de cada cliente.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-24 bg-zinc-50 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 text-center">
           <h3 className="text-sm tracking-[0.2em] uppercase font-semibold text-muted-foreground mb-16">
             Empresas e industrias que confían en nuestra infraestructura
           </h3>
           <div className="relative flex overflow-x-hidden w-full group">
             <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-zinc-50 to-transparent z-10"></div>
             <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-zinc-50 to-transparent z-10"></div>
             
             <div className="flex animate-marquee hover:[animation-play-state:paused] whitespace-nowrap items-center w-max">
               {/* Original Set */}
               <div className="flex items-center gap-16 md:gap-32 pr-16 md:pr-32">
                 <div className="w-[160px] h-20 relative flex-shrink-0">
                    <Image src="/clients/client1.png" alt="UMCE" fill className="object-contain filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                 </div>
                 <div className="w-[160px] h-20 relative flex-shrink-0">
                    <Image src="/clients/client2.png" alt="Trendy" fill className="object-contain filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                 </div>
                 <div className="w-[160px] h-20 relative flex-shrink-0">
                    <Image src="/clients/client3.jpg" alt="Inalco" fill className="object-contain filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 mix-blend-multiply" />
                 </div>
                 <div className="w-[160px] h-20 relative flex-shrink-0">
                    <Image src="/clients/client4.png" alt="Demaria" fill className="object-contain filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                 </div>
                 <div className="w-[160px] h-20 relative flex-shrink-0">
                    <Image src="/clients/client5.jpg" alt="Salfa" fill className="object-contain filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 mix-blend-multiply" />
                 </div>
               </div>
               
               {/* Duplicated Set for Seamless Looping */}
               <div className="flex items-center gap-16 md:gap-32 pr-16 md:pr-32">
                 <div className="w-[160px] h-20 relative flex-shrink-0">
                    <Image src="/clients/client1.png" alt="UMCE" fill className="object-contain filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                 </div>
                 <div className="w-[160px] h-20 relative flex-shrink-0">
                    <Image src="/clients/client2.png" alt="Trendy" fill className="object-contain filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                 </div>
                 <div className="w-[160px] h-20 relative flex-shrink-0">
                    <Image src="/clients/client3.jpg" alt="Inalco" fill className="object-contain filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 mix-blend-multiply" />
                 </div>
                 <div className="w-[160px] h-20 relative flex-shrink-0">
                    <Image src="/clients/client4.png" alt="Demaria" fill className="object-contain filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                 </div>
                 <div className="w-[160px] h-20 relative flex-shrink-0">
                    <Image src="/clients/client5.jpg" alt="Salfa" fill className="object-contain filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 mix-blend-multiply" />
                 </div>
               </div>
             </div>
           </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24 bg-white border-t border-black/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Contact Info */}
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-sm tracking-[0.2em] font-semibold text-primary uppercase mb-4">Contacto</h2>
                <h3 className="text-3xl md:text-5xl font-headline font-light text-foreground tracking-tight leading-tight">
                  Hablemos de su <span className="font-semibold text-primary">próximo proyecto</span>.
                </h3>
                <p className="text-lg text-muted-foreground font-light leading-relaxed">
                  Nuestro equipo de expertos en ingeniería y telecomunicaciones está listo para asesorarlo. Conecte directo con nuestras oficinas.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-10">
                <div className="flex gap-4 items-start">
                  <div className="p-3 justify-center items-center flex rounded-full bg-primary/5 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Oficina Central</h4>
                    <p className="text-sm text-muted-foreground font-light">Av. Principal 1234, Of 501</p>
                    <p className="text-sm text-muted-foreground font-light">Santiago, Chile</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="p-3 justify-center items-center flex rounded-full bg-primary/5 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Línea Directa</h4>
                    <p className="text-sm text-muted-foreground font-light">+56 2 2345 6789</p>
                    <p className="text-sm text-muted-foreground font-light">+56 9 1234 5678</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="p-3 justify-center items-center flex rounded-full bg-primary/5 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Correos</h4>
                    <p className="text-sm text-muted-foreground font-light">proyectos@icsa.cl</p>
                    <p className="text-sm text-muted-foreground font-light">ventas@icsa.cl</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="p-3 justify-center items-center flex rounded-full bg-primary/5 text-primary">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Horario</h4>
                    <p className="text-sm text-muted-foreground font-light">Lun a Vie</p>
                    <p className="text-sm text-muted-foreground font-light">09:00 - 18:30 hrs</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="border border-black/5 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden rounded-2xl w-full">
               <div className="bg-foreground p-8 text-white">
                  <h3 className="text-2xl font-light tracking-tight mb-2">Formulario de <span className="font-semibold text-accent">Contacto</span></h3>
                  <p className="text-white/60 text-sm font-light">Déjenos su mensaje y un especialista lo contactará a la brevedad.</p>
               </div>
               <CardContent className="p-8 space-y-6 bg-white">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Nombre</label>
                      <Input placeholder="Su nombre" className="border-black/10 focus-visible:ring-primary shadow-none" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Empresa</label>
                      <Input placeholder="Su empresa" className="border-black/10 focus-visible:ring-primary shadow-none" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Correo Corporativo</label>
                    <Input type="email" placeholder="ejemplo@empresa.cl" className="border-black/10 focus-visible:ring-primary shadow-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Mensaje</label>
                    <Textarea placeholder="Describa brevemente su requerimiento..." className="min-h-[120px] border-black/10 focus-visible:ring-primary shadow-none resize-none" />
                  </div>
                  <Button className="w-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 rounded-xl py-6 shadow-md transition-all">
                    Enviar Mensaje Directo
                  </Button>
               </CardContent>
            </Card>

          </div>
        </div>
      </section>
    </div>
  );
}
