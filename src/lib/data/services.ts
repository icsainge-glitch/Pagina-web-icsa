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
    description: 'Diseño e implementación de proyectos considerando captación de datos, almacenamiento, respaldo, transferencia e infraestructura.',
    detailedDescription: 'Nuestro servicio considera captación de datos, almacenamiento, respaldo, transferencia de información, crecimiento futuro, vida útil, topología, geografía y materiales adecuados.',
    icon: Network,
    category: 'Ingeniería',
    headerImage: '/service-ingenieria-comunicaciones.jpg',
    features: [
      'Levantamiento de requerimientos técnicos in-situ.',
      'Análisis de captación y almacenamiento de datos.',
      'Diseño de topología y selección de materiales.',
      'Planificación de vida útil y escalabilidad.',
      'Memorias de cálculo y modelamiento.',
    ]
  },
  {
    slug: 'seguridad-cctv',
    title: 'Instalación de Seguridad y CCTV',
    description: 'Diseño e instalación de cámaras, alarmas y control de acceso con tecnología de última generación.',
    detailedDescription: 'Diseño, instalación y configuración de cámaras, alarmas y control de acceso, con soluciones de última generación ejecutadas por técnicos calificados.',
    icon: ShieldCheck,
    category: 'Seguridad',
    headerImage: '/service-seguridad-cctv.jpg',
    features: [
      'Configuración de cámaras de última generación.',
      'Instalación de sistemas de alarma avanzados.',
      'Gestión de control de acceso biométrico.',
      'Monitoreo inteligente y grabación en red.',
      'Técnicos especialistas calificados.',
    ]
  },
  {
    slug: 'estudios-electricos',
    title: 'Estudios de Instalaciones Eléctricas',
    description: 'Evaluación de distorsión armónica, transientes, voltaje y factor de potencia.',
    detailedDescription: 'Evaluación de problemas como distorsión armónica, transientes eléctricas, variaciones de voltaje, bajo factor de potencia y sistemas de tierra, para proteger equipos y alargar su vida útil.',
    icon: Search,
    category: 'Eléctrica',
    headerImage: '/service-estudios-electricos.jpg',
    features: [
      'Análisis de distorsión armónica y transientes.',
      'Medición de variaciones de voltaje y factor de potencia.',
      'Estudio de sistemas de puesta a tierra.',
      'Protección de equipos críticos.',
      'Extensión de vida útil de infraestructura.',
    ]
  },
  {
    slug: 'corrientes-debiles',
    title: 'Redes de Corrientes Débiles',
    description: 'Análisis de conectividad y cableado voz-datos para detectar fallas y cuellos de botella.',
    detailedDescription: 'Análisis de instalaciones actuales de conectividad y cableado estructurado voz-datos para detectar fallas, cuellos de botella y proponer mejoras.',
    icon: Activity,
    category: 'Ingeniería',
    headerImage: '/service-corrientes-debiles.jpg?v=1',
    features: [
      'Detección de cuellos de botella en redes.',
      'Auditoría de cableado voz-datos.',
      'Propuestas de mejora en conectividad.',
      'Optimización de infraestructura existente.',
      'Soluciones de comunicaciones integrales.',
    ]
  },
  {
    slug: 'planificacion-redes',
    title: 'Planificación y Diseño de Redes',
    description: 'Definición de infraestructura según necesidades, seguridad y continuidad operativa.',
    detailedDescription: 'Definición de la infraestructura de red más adecuada según necesidades actuales, crecimiento futuro, seguridad, tráfico y continuidad operativa.',
    icon: Settings,
    category: 'Datos',
    headerImage: '/service-planificacion-redes-v2.png',
    features: [
      'Análisis de necesidades de crecimiento futuro.',
      'Diseño basado en continuidad operativa.',
      'Configuración de seguridad y tráfico.',
      'Topologías de red de alta disponibilidad.',
      'Ingeniería de detalle en infraestructura.',
    ]
  },
  {
    slug: 'analisis-redes',
    title: 'Análisis de Redes (LAN y WAN)',
    description: 'Gestión de redes para mejorar calidad de servicio y detectar fallas rápidamente.',
    detailedDescription: 'Servicios de análisis y gestión de redes LAN/WAN para mejorar calidad de servicio, reducir costos operativos y detectar fallas rápidamente.',
    icon: Search,
    category: 'Datos',
    headerImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1920&auto=format&fit=crop',
    features: [
      'Optimización de Calidad de Servicio (QoS).',
      'Reducción de costos operativos de red.',
      'Detección rápida de fallas críticas.',
      'Informes de rendimiento de red LAN/WAN.',
      'Gestión proactiva de infraestructura.',
    ]
  },
  {
    slug: 'suministro-equipos',
    title: 'Suministro e Instalación de Equipos',
    description: 'Instalación y puesta en marcha de equipos de red según requerimientos técnicos.',
    detailedDescription: 'Instalación, configuración, pruebas y puesta en marcha de equipos de red y accesorios según requerimientos del cliente.',
    icon: ShieldCheck,
    category: 'Equipos',
    headerImage: '/service-suministro-equipos.jpg',
    features: [
      'Configuración y puesta en marcha de activos.',
      'Pruebas de rendimiento post-instalación.',
      'Suministro de switches, routers y accesorios.',
      'Integración multimarca autorizada.',
      'Soporte técnico post-venta.',
    ]
  },
  {
    slug: 'infraestructura-ti',
    title: 'Centro de Operaciones y Servidores',
    description: 'Evaluación y diseño de racks, UPS, climatización y entorno físico TI.',
    detailedDescription: 'Evaluación, diseño, implementación y administración de infraestructura TI y entorno físico: racks, UPS, piso falso, cielo falso, climatización, tableros, patch panels y más.',
    icon: Server,
    category: 'Infraestructura',
    headerImage: '/service-infraestructura-ti.png',
    features: [
      'Diseño de salas de servidores y Data Centers.',
      'Instalación de Racks, UPS y climatización.',
      'Gestión de piso y cielo falso técnico.',
      'Organización de patch panels y tableros.',
      'Administración integral de entorno TI.',
    ]
  },
  {
    slug: 'cableado-estructurado',
    title: 'Cableado Estructurado',
    description: 'Redes de voz y datos con estándares internacionales (Leviton, AMP, Panduit).',
    detailedDescription: 'Instalación de redes de voz y datos con estándares internacionales y marcas reconocidas como Leviton, AMP, Legrand y Panduit, incluyendo certificación final.',
    icon: Network,
    category: 'Infraestructura',
    headerImage: '/service-cableado-estructurado.jpg',
    features: [
      'Instalación UTP y Fibra Óptica certificada.',
      'Uso de marcas líderes: Leviton, AMP, Panduit, Legrand.',
      'Cumplimiento de estándares internacionales.',
      'Canalización y rotulado profesional.',
      'Entrega final con protocolos de prueba.',
    ]
  },
  {
    slug: 'certificacion-redes',
    title: 'Certificación de Redes',
    description: 'Auditoría para verificar cumplimiento de estándares y rendimiento óptimo.',
    detailedDescription: 'Auditoría y certificación de cableado estructurado para verificar que la conectividad y el rendimiento cumplan con el estándar requerido.',
    icon: CheckCircle,
    category: 'Calidad',
    headerImage: '/service-certificacion-redes.jpg',
    features: [
      'Auditoría técnica de cableado estructurado.',
      'Validación de estándares de rendimiento.',
      'Equipos de certificación de última tecnología.',
      'Entrega de documentación técnica final.',
      'Garantía de conectividad operacional.',
    ]
  },
  {
    slug: 'proyectos-electricos',
    title: 'Proyectos de Potencia Eléctrica',
    description: 'Puesta a tierra, tableros, iluminación y diseño industrial/comercial.',
    detailedDescription: 'Desarrollo de proyectos eléctricos como puesta a tierra, tableros eléctricos, tableros de transferencia e iluminación, además de diseño para industria, comercio, educación, salud, minería, retail y residencial.',
    icon: Zap,
    category: 'Eléctrica',
    headerImage: '/service-proyectos-electricos.jpg',
    features: [
      'Diseño de mallas de puesta a tierra.',
      'Cálculo de tableros eléctricos y transferencia.',
      'Proyectos de iluminación industrial y comercial.',
      'Ingeniería para salud, minería y retail.',
      'Certificaciones y cumplimiento normativo SEC.',
    ]
  }
];
