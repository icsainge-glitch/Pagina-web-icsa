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
    headerImage: '/service-ingenieria-comunicaciones.jpg',
    features: [
      'Levantamiento de requerimientos técnicos in-situ.',
      'Diseño y arquitectura de red de alta disponibilidad.',
      'Especificación de equipos activos y pasivos.',
      'Memorias de cálculo y modelamiento de cobertura.',
      'Planimetría detallada as-built.',
    ]
  },
  {
    slug: 'seguridad-cctv',
    title: 'Instalación de Seguridad y CCTV',
    description: 'Sistemas de videovigilancia de alta definición, control de acceso y monitoreo inteligente.',
    detailedDescription: 'Protegemos sus activos mediante el despliegue de avanzadas soluciones de videovigilancia IP, control de acceso biométrico e integración de alarmas. Nuestros sistemas permiten monitoreo remoto continuo y análisis inteligente de video para prevención de incidentes.',
    icon: ShieldCheck,
    category: 'Seguridad',
    headerImage: '/service-seguridad-cctv.jpg',
    features: [
      'Despliegue de cámaras IP PTZ, térmicas y multisensores.',
      'Implementación de software VMS corporativo (Video Management System).',
      'Analíticas de IA avanzadas (reconocimiento facial, LPR, cruce de línea).',
      'Control de acceso vehicular y peatonal (biometría, tarjetas).',
      'Integración total con sistemas de alarma e incendio.',
    ]
  },
  {
    slug: 'estudios-electricos',
    title: 'Estudios de Instalaciones Eléctricas',
    description: 'Análisis profundo de cargas, consumos y cumplimiento de normativas vigentes.',
    detailedDescription: 'Realizamos auditorías energéticas y estudios técnicos para evaluar la eficiencia y seguridad de sus instalaciones. Verificamos el cumplimiento estricto de la normativa eléctrica nacional y elaboramos planes de mejora para prevenir fallas y optimizar consumos.',
    icon: Search,
    category: 'Eléctrica',
    headerImage: '/service-estudios-electricos.jpg',
    features: [
      'Levantamiento integral de instalaciones existentes (As-Built).',
      'Estudios de coordinación de protecciones y arco eléctrico.',
      'Cálculo y medición de mallas a tierra.',
      'Análisis de armónicos y calidad de la energía.',
      'Auditorías bajo la norma eléctrica nacional.',
    ]
  },
  {
    slug: 'corrientes-debiles',
    title: 'Redes de Corrientes Débiles',
    description: 'Estudios e implementación de sistemas de telefonía, citofonía y redes de datos.',
    detailedDescription: 'Diseñamos e implementamos todo el ecosistema de corrientes débiles que un edificio moderno necesita: telefonía IP, citofonía, sistemas de megafonía, control de incendio e integración en plataformas domóticas centralizadas.',
    icon: Activity,
    category: 'Ingeniería',
    headerImage: '/service-corrientes-debiles.jpg?v=1',
    features: [
      'Telefonía IP y Comunicaciones Unificadas Corporativas.',
      'Sistemas de megafonía y evacuación por voz.',
      'Citofonía digital e intercomunicadores industriales.',
      'Domótica y BMS (Building Management System).',
      'Sistemas de detección temprana de incendios.',
    ]
  },
  {
    slug: 'planificacion-redes',
    title: 'Planificación y Diseño de Redes',
    description: 'Estructuración estratégica de la topología de red para máxima eficiencia y escalabilidad.',
    detailedDescription: 'Nuestros ingenieros estructuran lógicamente sus redes LAN/WAN considerando crecimiento proyectado, segmentación de tráfico, políticas de seguridad y redundancia. Entregamos planos as-built y memorias de cálculo precisas.',
    icon: Settings,
    category: 'Datos',
    headerImage: '/service-planificacion-redes.jpg',
    features: [
      'Diseño core, distribución y acceso de topologías LAN.',
      'Planificación de enlaces WAN y VPN multisitio.',
      'Diseño de seguridad perimetral y segmentación lógica (VLANs).',
      'Planificación de cobertura Wi-Fi mediante mapas de calor predicibles.',
      'Dimensionamiento de anchos de banda y QoS.',
    ]
  },
  {
    slug: 'analisis-redes',
    title: 'Análisis de Redes (LAN y WAN)',
    description: 'Diagnóstico de rendimiento, optimización de tráfico y solución de cuellos de botella.',
    detailedDescription: 'A través de herramientas especializadas, auditamos el tráfico de su red para identificar latencia, pérdida de paquetes o congestión. Entregamos informes ejecutivos y técnicos con rutas claras para la optimización inmediata.',
    icon: Search,
    category: 'Datos',
    headerImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1920&auto=format&fit=crop',
    features: [
      'Auditoría y escaneo de vulnerabilidades internas.',
      'Troubleshooting avanzado de latencias en aplicaciones críticas.',
      'Modelado de tráfico y detección de saturaciones invisibles.',
      'Inventario detallado de hardware y software activo en la red.',
      'Planes de remediación paso a paso.',
    ]
  },
  {
    slug: 'infraestructura-ti',
    title: 'Infraestructura Tecnológica',
    description: 'Montaje integral de salas de servidores (Data Centers), racks, sistemas UPS y climatización.',
    detailedDescription: 'Construimos el corazón de su operatividad tecnológica. Abordamos el montaje de salas de servidores considerando piso técnico, sistemas ininterrumpidos de energía (UPS), climatización de precisión y extinción de incendios por gas limpio.',
    icon: Server,
    category: 'Infraestructura',
    headerImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80',
    features: [
      'Diseño y construcción modular de Data Centers.',
      'Montaje de Racks, PDU y organización de cableado (Data Center Cabling).',
      'Implementación de UPS de alta capacidad y tableros bypass.',
      'Sistemas de climatización de precisión tipo In-Row.',
      'Sistemas de supresión de incendios por agente limpio (Novec/FM-200).',
    ]
  },
  {
    slug: 'cableado-estructurado',
    title: 'Cableado Estructurado',
    description: 'Instalaciones profesionales de UTP (Cat 6/6A) y Fibra Óptica para enlaces troncales.',
    detailedDescription: 'Realizamos tendidos de cableado de cobre y fibra óptica bajo estrictos estándares internacionales (EIA/TIA). Cada punto instalado se entrega canalizado, rotulado y probado, garantizando la velocidad de transmisión certificada.',
    icon: Rss,
    category: 'Infraestructura',
    headerImage: '/service-cableado-estructurado.jpg',
    features: [
      'Tendido de cable UTP/FTP Cat. 6 y 6A libre de halógenos.',
      'Fusión y conectorización de fibra óptica monomodo y multimodo.',
      'Instalación de escalerillas portaconductores y canalización EMT/PVC.',
      'Ordenamiento y peinado estético en racks y gabinetes.',
      'Remodelaciones y actualizaciones sin disrupción de la operación.',
    ]
  },
  {
    slug: 'certificacion-redes',
    title: 'Certificación de Redes',
    description: 'Pruebas rigurosas para garantizar que su red cumple con los estándares internacionales de calidad.',
    detailedDescription: 'Utilizamos equipos de medición calibrados (tipo Fluke) para certificar enlaces de cobre y fibra. Le entregamos el informe de certificación documental exigido para validar garantías de fabricantes y asegurar 0% de atenuación anómala.',
    icon: CheckCircle,
    category: 'Calidad',
    headerImage: '/service-certificacion-redes.jpg',
    features: [
      'Certificación TIA/EIA para cableado estructurado categoría 6, 6A.',
      'Certificación Tier 1 (Atenuación) para enlaces de fibra óptica.',
      'Emisión protocolizada de informes Fluke Networks en formato nativo/PDF.',
      'Identificación proactiva de fallas (crosstalk, retorno, atenuación excesiva).',
      'Validación de garantías extendidas de fabricantes (20-25 años).',
    ]
  },
  {
    slug: 'proyectos-electricos',
    title: 'Diseño de Proyectos Eléctricos',
    description: 'Cálculo de tableros, alimentadores y sistemas de iluminación para diversos entornos.',
    detailedDescription: 'Desarrollamos la ingeniería de detalle para proyectos de fuerza e iluminación. Incluye diseño de mallas a tierra, cálculos de corto circuito, especificación técnica de tableros y coordinación de protecciones.',
    icon: FileBox,
    category: 'Eléctrica',
    headerImage: '/service-proyectos-electricos.jpg',
    features: [
      'Ingeniería de detalle en baja y media tensión.',
      'Diseño de tableros de transferencia automática (TTA) y grupos electrógenos.',
      'Estudios luminotécnicos con software Dialux.',
      'Certificaciones TE1 ante la SEC (Superintendencia de Electricidad y Combustibles).',
      'Diseño de sistemas de energía renovable (paneles solares) y eficiencia.',
    ]
  },
  {
    slug: 'suministro-equipos',
    title: 'Suministro de Equipos',
    description: 'Provisión de switches, routers, accesorios de red y componentes de comunicación de marcas líderes.',
    detailedDescription: 'Como integradores multimarca, proveemos hardware de red y seguridad (Cisco, Fortinet, Ubiquiti, entre otros) al mejor costo. Asesoramos en la compra para que el equipamiento se ajuste perfectamente a su arquitectura técnica.',
    icon: ShoppingBag,
    category: 'Suministros',
    headerImage: '/service-suministro-equipos.jpg',
    features: [
      'Integradores de marcas líderes: Cisco, HPE Aruba, Fortinet, Hikvision.',
      'Venta directa con garantía extendida del fabricante.',
      'Asesoría técnica pre-venta y dimensionamiento correctos de hardware.',
      'Suministro de equipos especializados: firewalls, switches core, servidores.',
      'Licenciamiento y renovaciones de software corporativo.',
    ]
  }
];
