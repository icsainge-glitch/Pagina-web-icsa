import { 
  Network, 
  ShieldCheck, 
  Zap, 
  Settings, 
  Cctv,
  Database,
  Wifi,
  Radio,
  Building2,
  HardDrive,
  Cpu,
  Bolt,
  PencilRuler,
  Server
} from 'lucide-react';

export interface ProjectDetail {
  id: string;
  title: string;
  location: string;
  category: string;
  image: string;
  description: string;
  fullDescription: string;
  stats: {
    label: string;
    value: string;
  }[];
  scope: {
    title: string;
    description: string;
    icon: any;
  }[];
  technicalDetails: string[];
}

export const projectsData: ProjectDetail[] = [
  {
    id: 'entel',
    title: 'Proyecto ENTEL',
    location: 'Datacenters (RM)',
    category: 'Fibra Óptica & Cobre',
    image: 'project-entel',
    description: 'Planificación, coordinación y ejecución de cableado estructurado en datacenters críticos.',
    fullDescription: 'ICSA presta servicios integrales de conectividad para la red troncal de Entel, enfocándose en la infraestructura de misión crítica de sus principales nodos de procesamiento de datos. El proyecto abarca desde el diseño inicial hasta la certificación final de cada enlace.',
    stats: [
      { label: 'Nodos Atendidos', value: '5' },
      { label: 'Tecnología', value: 'FO/Cobre' },
      { label: 'Nivel', value: 'Tier III' }
    ],
    scope: [
      { 
        title: 'Infraestructura de Red', 
        description: 'Implementación de bandejas y canalizaciones para fibra óptica y cobre.', 
        icon: Network 
      },
      { 
        title: 'Cableado Estructurado', 
        description: 'Instalación de backbone y enlaces de distribución de alta densidad.', 
        icon: Zap 
      },
      { 
        title: 'Certificación', 
        description: 'Pruebas de atenuación y reflectometría para garantizar el rendimiento.', 
        icon: ShieldCheck 
      }
    ],
    technicalDetails: [
      'Datacenter Amunátegui',
      'Datacenter Ciudad de los Valles',
      'Estación Satelital Longovilo',
      'Datacenter Pedro de Valdivia',
      'Centro de Datos Ñuñoa'
    ]
  },
  {
    id: 'mall-plaza',
    title: 'Proyecto Mall Plaza',
    location: 'Cobertura Nacional',
    category: 'Seguridad & CCTV',
    image: 'project-mall-plaza',
    description: 'Mantenimiento correctivo y preventivo de sistemas CCTV y control centralizado.',
    fullDescription: 'Mantenimiento integral de la red de videovigilancia más grande del sector retail en Chile. ICSA asegura la operatividad 24/7 de los sistemas de seguridad en toda la cadena de centros comerciales Mall Plaza.',
    stats: [
      { label: 'Cobertura', value: 'Nacional' },
      { label: 'Disponibilidad', value: '99.9%' },
      { label: 'Sistemas', value: 'IP/Híbrido' }
    ],
    scope: [
      { 
        title: 'Mantenimiento Correctivo', 
        description: 'Respuesta inmediata ante fallas técnicas en terreno a nivel nacional.', 
        icon: Settings 
      },
      { 
        title: 'Control Centralizado', 
        description: 'Integración de cámaras y sensores en salas de monitoreo unificadas.', 
        icon: Cctv 
      },
      { 
        title: 'Sistemas de Estacionamiento', 
        description: 'Mantenimiento técnico de cámaras LPR y control de acceso vehicular.', 
        icon: Building2 
      }
    ],
    technicalDetails: [
      'Cobertura de Arica a las regiones del sur',
      'Gestión de más de 2000 cámaras en red',
      'Optimización de almacenamiento de video',
      'Soporte técnico on-site garantizado'
    ]
  },
  {
    id: 'gm',
    title: 'Proyecto General Motors',
    location: 'Edificio Tech Center',
    category: 'Networking & CCTV',
    image: 'project-gm',
    description: 'Implementación de red LAN, backbone de fibra óptica y sistemas de videovigilancia.',
    fullDescription: 'Desarrollo de la infraestructura tecnológica para el Tech Center de General Motors Chile. El proyecto integra comunicaciones de alta velocidad con sistemas avanzados de seguridad perimetral e interna.',
    stats: [
      { label: 'Red', value: 'GigaLAN' },
      { label: 'Backbone', value: 'Fibra Opt' },
      { label: 'Seguridad', value: 'CCTV IP' }
    ],
    scope: [
      { 
        title: 'Backbone de Fibra', 
        description: 'Instalación de troncales de fibra óptica para interconectar pisos técnicos.', 
        icon: Database 
      },
      { 
        title: 'Networking', 
        description: 'Montaje y configuración de switches core y de distribución.', 
        icon: HardDrive 
      },
      { 
        title: 'Seguridad Electrónica', 
        description: 'Despliegue de red de cámaras IP de alta resolución en áreas críticas.', 
        icon: ShieldCheck 
      }
    ],
    technicalDetails: [
      'Cableado categoría 6A blindado',
      'Configuración de VLANs de datos y seguridad',
      'Rack principal de alta gama',
      'Sistemas de respaldo de energía UPS'
    ]
  },
  {
    id: 'javiera-carrera',
    title: 'Colegio San Javier',
    location: 'Puerto Montt / Santiago',
    category: 'Conectividad & CCTV',
    image: 'project-sanjavier',
    description: 'Red con balanceo y respaldo de internet, 51 switches y red WiFi masiva.',
    fullDescription: 'Proyecto de modernización digital para el Colegio San Javier. Se implementó una red robusta capaz de soportar cientos de dispositivos concurrentes en un entorno educativo exigente, garantizando internet sin interrupciones.',
    stats: [
      { label: 'Switches', value: '51' },
      { label: 'Puntos Usuario', value: '134' },
      { label: 'APs WiFi', value: '51' }
    ],
    scope: [
      { 
        title: 'Balanceo de Internet', 
        description: 'Implementación de sistema Multi-WAN para respaldo automático.', 
        icon: Radio 
      },
      { 
        title: 'Infraestructura de Racks', 
        description: 'Instalación de 1 rack central y 5 racks secundarios distribuidos.', 
        icon: Server 
      },
      { 
        title: 'Red WiFi Educativa', 
        description: 'Cobertura total en salas de clases y patios con 51 Access Points.', 
        icon: Wifi 
      }
    ],
    technicalDetails: [
      'Cableado estructurado Categoría 6A',
      'Canalización industrial resistente',
      'Seguridad CCTV perimetral incorporada',
      'Certificación de cada punto de red'
    ]
  },
  {
    id: 'trendy',
    title: 'Proyecto Trendy',
    location: 'Plantas Industriales',
    category: 'Wireless & Fibra',
    image: 'project-trendy',
    description: 'Instalación de Access Points para ambientes de frío extremo y monitoreo remoto.',
    fullDescription: 'Desafío de ingeniería en las plantas de almacenamiento en frío de Trendy. ICSA implementó soluciones de conectividad inalámbrica diseñadas para operar en temperaturas bajo cero manteniendo la estabilidad de la señal.',
    stats: [
      { label: 'Entorno', value: 'Frío Ext.' },
      { label: 'Monitoreo', value: 'Remoto' },
      { label: 'Conexión', value: 'Fibra FTTH' }
    ],
    scope: [
      { 
        title: 'Wireless Industrial', 
        description: 'Equipamiento especial para funcionamiento en ambientes de -20°C.', 
        icon: Wifi 
      },
      { 
        title: 'Enlaces de Fibra', 
        description: 'Conexión de alta velocidad mediante enlaces de FO industrial.', 
        icon: Zap 
      },
      { 
        title: 'Redes Eléctricas', 
        description: 'Instalación de circuitos eléctricos exclusivos para equipos TI.', 
        icon: Bolt 
      }
    ],
    technicalDetails: [
      'Cajas estancas calefaccionadas para APs',
      'Cableado categoría 6 con protección UV',
      'Monitoreo remoto de estado de red',
      'Soportes mecánicos de alta resistencia'
    ]
  },
  {
    id: 'subus',
    title: 'Proyecto SUBUS',
    location: 'Terminales RM',
    category: 'Ingeniería & Seguridad',
    image: 'project-subus',
    description: 'Ingeniería e implementación de CCTV para terminales de buses y centros de control.',
    fullDescription: 'Solución integral de seguridad para la flota de transporte público Subus. El proyecto incluye la ingeniería de detalle y ejecución de sistemas de televigilancia en patios y terminales críticos de la Región Metropolitana.',
    stats: [
      { label: 'Proyectos', value: 'Ingeniería' },
      { label: 'Energía', value: 'Estabilizada' },
      { label: 'Gestión', value: 'C. Control' }
    ],
    scope: [
      { 
        title: 'Ingeniería de Detalle', 
        description: 'Diseño de planos y especificaciones técnicas para CCTV masivo.', 
        icon: PencilRuler 
      },
      { 
        title: 'Obras Civiles', 
        description: 'Construcción de fundaciones y canalizaciones subterráneas.', 
        icon: Building2 
      },
      { 
        title: 'Centro de Control', 
        description: 'Montaje de videowalls y centros de gestión de flota.', 
        icon: Database 
      }
    ],
    technicalDetails: [
      'Sistemas de respaldo de energía industrial',
      'Cámaras antivandálicas de alta gama',
      'Protección contra descargas atmosféricas',
      'Certificación eléctrica de tableros'
    ]
  },
  {
    id: 'umce',
    title: 'Proyecto UMCE',
    location: 'Campus Universitario',
    category: 'Infraestructura TI',
    image: 'project-umce',
    description: 'Backbone de fibra óptica, canalización subterránea y certificación reflectométrica.',
    fullDescription: 'Renovación de la red troncal de la Universidad Metropolitana de Ciencias de la Educación. Un proyecto de gran envergadura que implicó la interconexión de múltiples edificios del campus mediante fibra óptica de alta velocidad.',
    stats: [
      { label: 'Backbone', value: 'F. Óptica' },
      { label: 'Método', value: 'Subterráneo' },
      { label: 'Pruebas', value: 'OTDR' }
    ],
    scope: [
      { 
        title: 'Canalización Principal', 
        description: 'Excavación y construcción de cámaras de paso subterráneas.', 
        icon: Building2 
      },
      { 
        title: 'Fusión de Fibra', 
        description: 'Terminación técnica de troncales mediante fusión por arco.', 
        icon: Zap 
      },
      { 
        title: 'Certificación de Enlaces', 
        description: 'Entrega de informes técnicos con pruebas de reflectometría.', 
        icon: ShieldCheck 
      }
    ],
    technicalDetails: [
      'Fibra óptica multimodo y monomodo OM3/OS2',
      'Obras civiles para cruce de vías internas',
      'Interconexión de 8 facultades principales',
      'Configuración de racks de comunicaciones'
    ]
  }
];
