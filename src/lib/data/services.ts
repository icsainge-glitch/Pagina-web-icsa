import { 
  Network, 
  ShieldCheck, 
  Zap, 
  Server, 
  Search, 
  Activity, 
  Settings, 
  Rss, 
  CheckCircle, 
  FileBox, 
  ShoppingBag 
} from 'lucide-react';

export const servicesData = [
  {
    slug: 'ingenieria-comunicaciones',
    title: 'Ingeniería de Proyectos de Comunicaciones',
    description: 'Diseño conceptual y detallado de sistemas de comunicación corporativos e industriales.',
    detailedDescription: 'Nuestro servicio de Ingeniería de Proyectos de Comunicaciones abarca desde el levantamiento de requerimientos hasta el diseño arquitectónico final. Desarrollamos soluciones a medida que garantizan alta disponibilidad, seguridad y escalabilidad para infraestructuras informáticas complejas.',
    icon: Network,
    category: 'Ingeniería',
    headerImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1920&auto=format&fit=crop'
  },
  {
    slug: 'seguridad-cctv',
    title: 'Instalación de Seguridad y CCTV',
    description: 'Sistemas de videovigilancia de alta definición, control de acceso y monitoreo inteligente.',
    detailedDescription: 'Protegemos sus activos mediante el despliegue de avanzadas soluciones de videovigilancia IP, control de acceso biométrico e integración de alarmas. Nuestros sistemas permiten monitoreo remoto 24/7 y análisis inteligente de video para prevención de incidentes.',
    icon: ShieldCheck,
    category: 'Seguridad',
    headerImage: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1920&auto=format&fit=crop'
  },
  {
    slug: 'estudios-electricos',
    title: 'Estudios de Instalaciones Eléctricas',
    description: 'Análisis profundo de cargas, consumos y cumplimiento de normativas vigentes.',
    detailedDescription: 'Realizamos auditorías energéticas y estudios técnicos para evaluar la eficiencia y seguridad de sus instalaciones. Verificamos el cumplimiento estricto de la normativa eléctrica nacional y elaboramos planes de mejora para prevenir fallas y optimizar consumos.',
    icon: Search,
    category: 'Eléctrica',
    headerImage: 'https://images.unsplash.com/photo-1498084393753-b411b2d26b34?q=80&w=1920&auto=format&fit=crop'
  },
  {
    slug: 'corrientes-debiles',
    title: 'Redes de Corrientes Débiles',
    description: 'Estudios e implementación de sistemas de telefonía, citofonía y redes de datos.',
    detailedDescription: 'Diseñamos e implementamos todo el ecosistema de corrientes débiles que un edificio moderno necesita: telefonía IP, citofonía, sistemas de megafonía, control de incendio e integración en plataformas domóticas centralizadas.',
    icon: Activity,
    category: 'Ingeniería',
    headerImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1920&auto=format&fit=crop'
  },
  {
    slug: 'planificacion-redes',
    title: 'Planificación y Diseño de Redes',
    description: 'Estructuración estratégica de la topología de red para máxima eficiencia y escalabilidad.',
    detailedDescription: 'Nuestros ingenieros estructuran lógicamente sus redes LAN/WAN considerando crecimiento proyectado, segmentación de tráfico, políticas de seguridad y redundancia. Entregamos planos as-built y memorias de cálculo precisas.',
    icon: Settings,
    category: 'Datos',
    headerImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920&auto=format&fit=crop'
  },
  {
    slug: 'analisis-redes',
    title: 'Análisis de Redes (LAN y WAN)',
    description: 'Diagnóstico de rendimiento, optimización de tráfico y solución de cuellos de botella.',
    detailedDescription: 'A través de herramientas especializadas, auditamos el tráfico de su red para identificar latencia, pérdida de paquetes o congestión. Entregamos informes ejecutivos y técnicos con rutas claras para la optimización inmediata.',
    icon: Search,
    category: 'Datos',
    headerImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1920&auto=format&fit=crop'
  },
  {
    slug: 'infraestructura-ti',
    title: 'Infraestructura Tecnológica',
    description: 'Montaje integral de salas de servidores (Data Centers), racks, sistemas UPS y climatización.',
    detailedDescription: 'Construimos el corazón de su operatividad tecnológica. Abordamos el montaje de salas de servidores considerando piso técnico, sistemas ininterrumpidos de energía (UPS), climatización de precisión y extinción de incendios por gas limpio.',
    icon: Server,
    category: 'Infraestructura',
    headerImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80'
  },
  {
    slug: 'cableado-estructurado',
    title: 'Cableado Estructurado',
    description: 'Instalaciones profesionales de UTP (Cat 6/6A) y Fibra Óptica para enlaces troncales.',
    detailedDescription: 'Realizamos tendidos de cableado de cobre y fibra óptica bajo estrictos estándares internacionales (EIA/TIA). Cada punto instalado se entrega canalizado, rotulado y probado, garantizando la velocidad de transmisión certificada.',
    icon: Rss,
    category: 'Infraestructura',
    headerImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80'
  },
  {
    slug: 'certificacion-redes',
    title: 'Certificación de Redes',
    description: 'Pruebas rigurosas para garantizar que su red cumple con los estándares internacionales de calidad.',
    detailedDescription: 'Utilizamos equipos de medición calibrados (tipo Fluke) para certificar enlaces de cobre y fibra. Le entregamos el informe de certificación documental exigido para validar garantías de fabricantes y asegurar 0% de atenuación anómala.',
    icon: CheckCircle,
    category: 'Calidad',
    headerImage: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1920&auto=format&fit=crop'
  },
  {
    slug: 'proyectos-electricos',
    title: 'Diseño de Proyectos Eléctricos',
    description: 'Cálculo de tableros, alimentadores y sistemas de iluminación para diversos entornos.',
    detailedDescription: 'Desarrollamos la ingeniería de detalle para proyectos de fuerza e iluminación. Incluye diseño de mallas a tierra, cálculos de corto circuito, especificación técnica de tableros y coordinación de protecciones.',
    icon: FileBox,
    category: 'Eléctrica',
    headerImage: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1920&auto=format&fit=crop'
  },
  {
    slug: 'suministro-equipos',
    title: 'Suministro de Equipos',
    description: 'Provisión de switches, routers, accesorios de red y componentes de comunicación de marcas líderes.',
    detailedDescription: 'Como integradores multimarca, proveemos hardware de red y seguridad (Cisco, Fortinet, Ubiquiti, entre otros) al mejor costo. Asesoramos en la compra para que el equipamiento se ajuste perfectamente a su arquitectura técnica.',
    icon: ShoppingBag,
    category: 'Suministros',
    headerImage: 'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=1920&auto=format&fit=crop'
  }
];
