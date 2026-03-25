'use client';

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
  Clock,
  CheckCircle
} from 'lucide-react';
import { useReveal } from '@/hooks/use-reveal';
import { cn } from '@/lib/utils';
import { servicesData } from '@/lib/data/services';

export default function Home() {
  const [heroRef, heroVisible] = useReveal({ threshold: 0.1 });
  const [servicesRef, servicesVisible] = useReveal({ threshold: 0.1 });
  const [aboutRef, aboutVisible] = useReveal({ threshold: 0.1 });
  const [metricsRef, metricsVisible] = useReveal({ threshold: 0.1 });
  const [valueRef, valueVisible] = useReveal({ threshold: 0.1 });
  const [clientsRef, clientsVisible] = useReveal({ threshold: 0.1 });
  const [contactRef, contactVisible] = useReveal({ threshold: 0.1 });

  return (
    <div className="flex flex-col gap-0 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-foreground">
        <HeroCarousel />
        <div className="container relative z-10 px-4 text-center text-white max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-headline font-light mb-6 tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-1000 fill-mode-both">
            Soluciones Integrales en <span className="font-semibold text-accent">Ingeniería</span>
          </h1>
          <p className="text-lg md:text-xl mb-10 text-white/80 font-light animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300 fill-mode-both text-balance">
            Empresa chilena especializada en telecomunicaciones, electricidad y seguridad tecnológica. Apoyando la toma de decisiones con información técnica confiable.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 fill-mode-both">
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
      <section ref={servicesRef} className="py-24 bg-zinc-50/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-100"></div>
        <div className={cn(
          "container mx-auto px-6 md:px-12 relative z-10 reveal-base reveal-up",
          servicesVisible && "reveal-visible"
        )}>
          <div className="max-w-3xl mb-20 text-center mx-auto">
            <h2 className="text-sm tracking-[0.2em] font-semibold text-primary uppercase mb-4">Especialidades</h2>
            <h3 className="text-3xl md:text-5xl font-light text-foreground tracking-tight leading-tight text-balance">
              Diseño, implementación y certificación de <span className="font-semibold text-primary">sistemas técnicos</span>.
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {servicesData.slice(0, 6).map((service, idx) => (
              <Link 
                href={`/services/${service.slug}`} 
                key={idx} 
                className={cn(
                  "group block focus:outline-none focus:ring-2 focus:ring-accent rounded-2xl outline-none reveal-base reveal-up",
                  servicesVisible && "reveal-visible"
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
                        Explorar <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                     </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Identity / Company Presence */}
      <section ref={aboutRef} className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            
            <div className={cn(
              "flex-1 relative h-[450px] lg:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl reveal-base reveal-left",
              aboutVisible && "reveal-visible"
            )}>
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply z-10 transition-opacity duration-500 hover:opacity-0 group"></div>
              <video 
                src="https://raw.githubusercontent.com/icsainge-glitch/Imagenes-pagina-web/main/Animaci%C3%B3n_de_Imagen_Sin_Acercamiento.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                className="absolute inset-0 w-full h-full object-cover object-[80%_center]" 
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-8 md:p-12 z-20">
                <div className="text-white border-l-4 border-accent pl-6">
                  <p className="font-bold text-2xl md:text-3xl lg:text-4xl mb-2 drop-shadow-md">Ingeniería en Comunicaciones S.A.</p>
                  <p className="text-white/80 font-medium tracking-wide text-lg">La columna vertebral de la industria</p>
                </div>
              </div>
            </div>
            
            <div className={cn(
              "flex-1 space-y-10 reveal-base reveal-right",
              aboutVisible && "reveal-visible"
            )}>
              <div>
                <h2 className="text-sm tracking-[0.2em] font-semibold text-primary uppercase mb-4">Identidad Corporativa</h2>
                <h3 className="text-3xl md:text-5xl lg:text-6xl font-headline font-light text-foreground tracking-tight leading-tight text-balance">
                  El motor tecnológico del <span className="font-semibold text-primary">quehacer nacional</span>.
                </h3>
              </div>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
                En <strong className="font-medium text-foreground">Ingeniería en Comunicaciones S.A.</strong> somos los arquitectos de su continuidad operativa. Desplegamos equipos para diseñar, certificar y mantener operativas sus instalaciones tecnológicas críticas, asegurando que su negocio no se detenga jamás.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8 pt-8 border-t border-black/5">
                 <div>
                    <h4 className="font-bold text-lg text-foreground flex items-center gap-3"><CheckCircle className="h-6 w-6 text-accent shrink-0"/> Ingeniería Certificada</h4>
                 </div>
                 <div>
                    <h4 className="font-bold text-lg text-foreground flex items-center gap-3"><CheckCircle className="h-6 w-6 text-primary shrink-0"/> Logística Operativa</h4>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Metrics & CTA */}
      <section ref={metricsRef} className="py-32 text-white overflow-hidden relative">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2000" 
            alt="Data Center Infrastructure" 
            fill 
            className="object-cover brightness-[0.25] transition-transform [transition-duration:10s] hover:scale-110" 
          />
          <div className="absolute inset-0 bg-primary/30 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 via-transparent to-foreground/50"></div>
        </div>
        
        <div className={cn(
          "container mx-auto px-6 md:px-12 relative z-10 text-center reveal-base reveal-scale",
          metricsVisible && "reveal-visible"
        )}>
            <h2 className="text-3xl md:text-5xl font-headline font-light mb-12 tracking-tight text-balance">
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
               <div className="flex-1 flex flex-col items-center justify-center p-6 w-full">
                  <span className="text-5xl md:text-7xl font-bold text-white mb-3 tracking-tighter">100%</span>
                  <span className="text-sm text-white/50 uppercase tracking-widest font-semibold">Certificados</span>
               </div>
            </div>
            <p className="text-lg text-white/70 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
               Si su empresa requiere un socio estratégico para diseñar, implementar o certificar infraestructura tecnológica o eléctrica crítica, estamos a su disposición.
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground font-semibold rounded-full px-10 hover:bg-accent/90 shadow-lg transition-transform hover:-translate-y-1">
               <Link href="#contacto">Hablemos de su proyecto</Link>
            </Button>
        </div>
      </section>

      <section ref={valueRef} className="py-24 bg-white border-y border-black/5 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className={cn(
              "reveal-base reveal-left",
              valueVisible && "reveal-visible"
            )}>
               <h2 className="text-sm tracking-[0.2em] font-semibold text-primary uppercase mb-4">Propuesta de Valor</h2>
               <h3 className="text-3xl md:text-5xl font-light text-foreground tracking-tight leading-tight mb-8 text-balance">
                 Elevamos el estándar de la <span className="font-semibold text-primary">ingeniería corporativa</span>.
               </h3>
               <p className="text-muted-foreground leading-relaxed font-light text-lg mb-10">
                 Ejecutamos proyectos de misión crítica con un altísimo nivel técnico, adaptándonos exactamente a sus requerimientos y certificando de extremo a extremo cada entrega operacional.
               </p>
               <Button asChild size="lg" className="bg-primary text-primary-foreground font-medium rounded-full px-8 shadow-sm hover:shadow-md transition-all">
                  <Link href="/about">Conocer nuestra historia</Link>
               </Button>
            </div>
            <div className={cn(
              "grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 reveal-base reveal-right",
              valueVisible && "reveal-visible"
            )}>
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

      <section ref={clientsRef} className="py-24 bg-zinc-50 overflow-hidden">
        <div className={cn(
          "container mx-auto px-6 md:px-12 text-center reveal-base reveal-up",
          clientsVisible && "reveal-visible"
        )}>
           <div className="max-w-3xl mx-auto mb-16 text-center">
             <h2 className="text-sm tracking-[0.2em] font-semibold text-primary uppercase mb-4">Confianza Corporativa</h2>
             <h3 className="text-3xl md:text-5xl font-light text-foreground tracking-tight leading-tight text-balance">
               Empresas e industrias que respaldan nuestra <span className="font-semibold text-primary">experiencia</span>
             </h3>
           </div>
           <div className="relative flex overflow-hidden w-full group py-8">
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
                 <div className="w-[200px] h-20 relative flex-shrink-0">
                    <Image src="/clients/client3.jpg" alt="Inalco" fill className="object-contain scale-[1.4] filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 mix-blend-multiply" />
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
                 <div className="w-[200px] h-20 relative flex-shrink-0">
                    <Image src="/clients/client3.jpg" alt="Inalco" fill className="object-contain scale-[1.4] filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 mix-blend-multiply" />
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

      <section id="contacto" ref={contactRef} className="py-24 bg-white border-t border-black/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <div className={cn(
              "space-y-12 reveal-base reveal-left",
              contactVisible && "reveal-visible"
            )}>
               <div className="space-y-6">
                 <h2 className="text-sm tracking-[0.2em] font-semibold text-primary uppercase mb-4">Contacto</h2>
                 <h3 className="text-3xl md:text-5xl font-headline font-light text-foreground tracking-tight leading-tight text-balance">
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
                    <p className="text-sm text-muted-foreground font-light">Abel González 324.</p>
                    <p className="text-sm text-muted-foreground font-light">La Cisterna Santiago, Chile</p>
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
                    <p className="text-sm text-muted-foreground font-light">Lun a Vie: 08:00 - 17:00</p>
                    <p className="text-sm text-muted-foreground font-light">Sábado: 08:00 - 12:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={cn(
              "reveal-base reveal-right",
              contactVisible && "reveal-visible"
            )}>
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
        </div>
      </section>
    </div>
  );
}
