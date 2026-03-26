
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Shield, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/ui/logo';

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/services', label: 'Servicios' },
  { href: '/projects', label: 'Portafolio' },
  { href: '/about', label: 'Nosotros' },
  { href: '/#contacto', label: 'Contacto' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = pathname === '/';
  const navTransparent = isHome && !isScrolled && !isOpen;

  return (
    <nav 
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300 ease-in-out",
        navTransparent 
          ? "bg-transparent border-transparent py-4" 
          : "bg-background/80 backdrop-blur-md border-b py-0 shadow-sm"
      )}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
          <Logo isTransparent={navTransparent} />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-accent',
                navTransparent ? 'text-white/90' : 'text-muted-foreground',
                pathname === link.href && (navTransparent ? 'text-accent' : 'text-accent')
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className={cn(
            "md:hidden p-2 transition-colors",
            navTransparent ? "text-white" : "text-muted-foreground hover:text-primary"
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t bg-background p-4 flex flex-col gap-4 animate-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                'text-base font-medium transition-colors hover:text-accent p-2',
                pathname === link.href ? 'text-accent' : 'text-muted-foreground'
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild className="w-full bg-primary" onClick={() => setIsOpen(false)}>
            <Link href="/#contacto">Contacto Directo</Link>
          </Button>
        </div>
      )}
    </nav>
  );
}
