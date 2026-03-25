'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, Shield, Users, Award, Clock, Zap } from 'lucide-react';
import { useReveal } from '@/hooks/use-reveal';
import { cn } from '@/lib/utils';

export default function AboutPage() {
  const [introRef, introVisible] = useReveal();
  const [visionRef, visionVisible] = useReveal();
  const [valuesRef, valuesVisible] = useReveal();
  const aboutImg = PlaceHolderImages.find(img => img.id === 'about-team');

  return (
    <div className="flex flex-col gap-0 overflow-x-hidden">
      {/* Introduction */}
      <section ref={introRef} className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        <div className={cn(
          "container mx-auto px-4 relative z-10 reveal-base reveal-up",
          introVisible && "reveal-visible"
        )}>
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1 space-y-8">
              <h1 className="text-4xl font-headline font-bold text-primary">Nuestra Trayectoria</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ingeniería en Comunicaciones S.A. nació con el firme propósito de entregar soluciones de ingeniería de alto estándar en el mercado nacional. Con más de 15 años de experiencia, nos hemos consolidado como un socio estratégico para empresas que buscan robustez en sus sistemas críticos de comunicación y seguridad.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-bold">Equipo Experto</p>
                    <p className="text-xs text-muted-foreground">Ingenieros certificados</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-bold">Calidad ISO</p>
                    <p className="text-xs text-muted-foreground">Estándares globales</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full h-[400px] relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={aboutImg?.imageUrl || ''}
                alt="Our Team"
                fill
                className="object-cover"
                data-ai-hint="engineering team"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section ref={visionRef} className="py-24 bg-secondary/30 relative overflow-hidden">
        <div className={cn(
          "container mx-auto px-4 relative z-10 reveal-base reveal-up",
          visionVisible && "reveal-visible"
        )}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="border-none shadow-xl bg-primary text-white p-4 hover-lift">
              <CardContent className="pt-8 space-y-6">
                <div className="h-14 w-14 rounded-full bg-accent flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Misión</h3>
                <p className="text-white/80 leading-relaxed text-balance">
                  Proveer soluciones integrales de ingeniería eléctrica y de comunicaciones que superen las expectativas de nuestros clientes, garantizando la continuidad de sus procesos mediante tecnología innovadora y un servicio de excelencia técnica.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-xl p-4 hover-lift bg-white">
              <CardContent className="pt-8 space-y-6">
                <div className="h-14 w-14 rounded-full bg-primary flex items-center justify-center mb-4 text-white">
                  <Eye className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Visión</h3>
                <p className="text-muted-foreground leading-relaxed text-balance">
                  Ser reconocidos como la empresa líder en el cono sur en el desarrollo de infraestructuras tecnológicas seguras e inteligentes, siendo referentes en innovación y confiabilidad para la industria 4.0.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section ref={valuesRef} className="py-24 bg-white">
        <div className={cn(
          "container mx-auto px-4 reveal-base reveal-up",
          valuesVisible && "reveal-visible"
        )}>
          <div className="text-center mb-20">
            <h2 className="text-sm tracking-[0.2em] font-semibold text-primary uppercase mb-4">Principios</h2>
            <h3 className="text-3xl md:text-5xl font-headline font-light text-primary tracking-tight">Nuestros <span className="font-semibold">Valores</span></h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="text-center space-y-6 p-10 bg-zinc-50/50 hover-lift rounded-3xl border border-black/5">
              <div className="h-16 w-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto text-accent border border-black/5">
                <Shield className="h-8 w-8" />
              </div>
              <h4 className="text-xl font-bold text-primary">Integridad</h4>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">Actuamos con transparencia y honestidad en cada compromiso contractual.</p>
            </div>
            <div className="text-center space-y-6 p-10 bg-zinc-50/50 hover-lift rounded-3xl border border-black/5">
              <div className="h-16 w-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto text-accent border border-black/5">
                <Clock className="h-8 w-8" />
              </div>
              <h4 className="text-xl font-bold text-primary">Puntualidad</h4>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">Respetamos los plazos acordados para no afectar la cadena de valor de nuestros clientes.</p>
            </div>
            <div className="text-center space-y-6 p-10 bg-zinc-50/50 hover-lift rounded-3xl border border-black/5">
              <div className="h-16 w-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto text-accent border border-black/5">
                <Clock className="h-8 w-8 text-accent shrink-0" />
                <Zap className="h-8 w-8" />
              </div>
              <h4 className="text-xl font-bold text-primary">Innovación</h4>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">Buscamos constantemente nuevas tecnologías para optimizar costos y resultados.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
