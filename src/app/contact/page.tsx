
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, Server, Cpu, Cable, Monitor } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h1 className="text-4xl font-headline font-bold text-primary">Hablemos de tu Proyecto</h1>
              <p className="text-lg text-muted-foreground">
                Nuestro equipo de expertos está listo para asesorarte en la planificación y ejecución de tus necesidades tecnológicas.
              </p>
            </div>

            <div className="grid gap-8">
              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Oficina Central</h4>
                  <p className="text-muted-foreground">Av. Principal 1234, Oficina 501, Las Condes</p>
                  <p className="text-muted-foreground">Santiago, Chile</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Teléfonos</h4>
                  <p className="text-muted-foreground">Fijo: +56 2 2345 6789</p>
                  <p className="text-muted-foreground">Móvil: +56 9 1234 5678</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Email</h4>
                  <p className="text-muted-foreground">proyectos@icsa.cl</p>
                  <p className="text-muted-foreground">ventas@icsa.cl</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Horario de Atención</h4>
                  <p className="text-muted-foreground">Lunes a Viernes: 09:00 - 18:30 hrs</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-none shadow-2xl overflow-hidden">
             <div className="bg-primary p-6 text-white">
                <h3 className="text-xl font-bold">Solicitud Directa</h3>
                <p className="text-white/70 text-sm">Cuéntanos un poco más sobre tu requerimiento.</p>
             </div>
             <CardContent className="p-8 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Nombre</label>
                    <Input placeholder="Tu nombre" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Empresa</label>
                    <Input placeholder="Nombre de empresa" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email</label>
                  <Input type="email" placeholder="ejemplo@correo.cl" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Mensaje</label>
                  <Textarea placeholder="Describe brevemente el servicio que necesitas..." className="min-h-[120px]" />
                </div>
                <Button className="w-full bg-accent text-primary font-bold hover:bg-accent/90 py-6">
                  Enviar Mensaje
                </Button>
             </CardContent>
          </Card>
        </div>

        {/* Supplier Information Section */}
        <section className="pt-24 border-t">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-headline font-bold text-primary mb-4">Suministro de Equipamiento</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Como partners estratégicos de las marcas más importantes del rubro, suministramos hardware de alta confiabilidad para tus proyectos de IT.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 bg-white rounded-2xl shadow-sm text-center space-y-4 hover:shadow-md transition-shadow">
              <Server className="h-10 w-10 text-accent mx-auto" />
              <h4 className="font-bold text-primary">Data Center</h4>
              <p className="text-sm text-muted-foreground">Racks, Gabinetes, PDU y sistemas UPS profesionales.</p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-sm text-center space-y-4 hover:shadow-md transition-shadow">
              <Cpu className="h-10 w-10 text-accent mx-auto" />
              <h4 className="font-bold text-primary">Active Hardware</h4>
              <p className="text-sm text-muted-foreground">Switches L2/L3, Routers, Access Points y Firewalls.</p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-sm text-center space-y-4 hover:shadow-md transition-shadow">
              <Cable className="h-10 w-10 text-accent mx-auto" />
              <h4 className="font-bold text-primary">Pasivos</h4>
              <p className="text-sm text-muted-foreground">Cableado UTP, Patch cords, Fibra Óptica y conectores.</p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-sm text-center space-y-4 hover:shadow-md transition-shadow">
              <Monitor className="h-10 w-10 text-accent mx-auto" />
              <h4 className="font-bold text-primary">Seguridad</h4>
              <p className="text-sm text-muted-foreground">Cámaras IP, NVRs, Monitores industriales y Sensores.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
