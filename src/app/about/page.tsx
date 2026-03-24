
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, Shield, Users, Award, Clock, Zap } from 'lucide-react';

export default function AboutPage() {
  const aboutImg = PlaceHolderImages.find(img => img.id === 'about-team');

  return (
    <div className="flex flex-col gap-0">
      {/* Introduction */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
              <h1 className="text-4xl font-headline font-bold text-primary">Nuestra Trayectoria</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                ICSA Ingeniería S.A. nació con el firme propósito de entregar soluciones de ingeniería de alto estándar en el mercado nacional. Con más de 15 años de experiencia, nos hemos consolidado como un socio estratégico para empresas que buscan robustez en sus sistemas críticos de comunicación y seguridad.
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
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="border-none shadow-xl bg-primary text-white p-4">
              <CardContent className="pt-8 space-y-4">
                <div className="h-14 w-14 rounded-full bg-accent flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Misión</h3>
                <p className="text-white/80 leading-relaxed">
                  Proveer soluciones integrales de ingeniería eléctrica y de comunicaciones que superen las expectativas de nuestros clientes, garantizando la continuidad de sus procesos mediante tecnología innovadora y un servicio de excelencia técnica.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-xl p-4">
              <CardContent className="pt-8 space-y-4">
                <div className="h-14 w-14 rounded-full bg-primary flex items-center justify-center mb-4 text-white">
                  <Eye className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Visión</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ser reconocidos como la empresa líder en el cono sur en el desarrollo de infraestructuras tecnológicas seguras e inteligentes, siendo referentes en innovación y confiabilidad para la industria 4.0.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-headline font-bold text-primary text-center mb-16">Nuestros Valores</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center space-y-4 p-6 hover:bg-background hover:shadow-lg transition-all rounded-2xl">
              <Shield className="h-12 w-12 text-accent mx-auto" />
              <h4 className="text-xl font-bold text-primary">Integridad</h4>
              <p className="text-sm text-muted-foreground">Actuamos con transparencia y honestidad en cada compromiso contractual.</p>
            </div>
            <div className="text-center space-y-4 p-6 hover:bg-background hover:shadow-lg transition-all rounded-2xl">
              <Clock className="h-12 w-12 text-accent mx-auto" />
              <h4 className="text-xl font-bold text-primary">Puntualidad</h4>
              <p className="text-sm text-muted-foreground">Respetamos los plazos acordados para no afectar la cadena de valor de nuestros clientes.</p>
            </div>
            <div className="text-center space-y-4 p-6 hover:bg-background hover:shadow-lg transition-all rounded-2xl">
              <Zap className="h-12 w-12 text-accent mx-auto" />
              <h4 className="text-xl font-bold text-primary">Innovación</h4>
              <p className="text-sm text-muted-foreground">Buscamos constantemente nuevas tecnologías para optimizar costos y resultados.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
