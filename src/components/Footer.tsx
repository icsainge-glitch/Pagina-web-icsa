
import Link from 'next/link';
import { Shield, Phone, Mail, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary/50 border-t py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="font-headline font-bold text-lg tracking-tight text-primary">
                ICSA <span className="text-accent">Solutions</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Líderes en ingeniería de comunicaciones y sistemas de seguridad. Innovación y confianza para tu infraestructura tecnológica.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-primary">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="text-muted-foreground hover:text-accent transition-colors">Servicios</Link></li>
              <li><Link href="/projects" className="text-muted-foreground hover:text-accent transition-colors">Proyectos</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-accent transition-colors">Sobre Nosotros</Link></li>
              <li><Link href="/ai-inquiry" className="text-muted-foreground hover:text-accent transition-colors">Asistente IA</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-primary">Servicios</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Ingeniería de Comunicaciones</li>
              <li>Seguridad y CCTV</li>
              <li>Infraestructura Tecnológica</li>
              <li>Cableado Estructurado</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-primary">Contacto</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-2 items-start text-muted-foreground">
                <MapPin className="h-5 w-5 text-accent shrink-0" />
                <span>Santiago, Chile</span>
              </li>
              <li className="flex gap-2 items-center text-muted-foreground">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <span>+56 9 1234 5678</span>
              </li>
              <li className="flex gap-2 items-center text-muted-foreground">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <span>contacto@icsa.cl</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t text-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} ICSA Ingeniería S.A. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
