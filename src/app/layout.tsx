
import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Ingeniería en Comunicaciones S.A. | Soluciones de Telecomunicaciones y Seguridad',
  description: 'Ingeniería de proyectos de comunicaciones, seguridad, instalaciones eléctricas y redes. Ingeniería en Comunicaciones S.A.',
  openGraph: {
    title: 'Ingeniería en Comunicaciones S.A. | Soluciones',
    description: 'Ingeniería de proyectos de comunicaciones, seguridad, instalaciones eléctricas y redes.',
    url: 'https://icsa.cl',
    siteName: 'ICSA',
    images: [
      {
        url: '/logo-og.png',
        width: 1200,
        height: 630,
        alt: 'Logo ICSA Ingeniería en Comunicaciones S.A.',
      },
    ],
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ingeniería en Comunicaciones S.A. | Soluciones',
    description: 'Ingeniería de proyectos de comunicaciones, seguridad, instalaciones eléctricas y redes.',
    images: ['/logo-og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
