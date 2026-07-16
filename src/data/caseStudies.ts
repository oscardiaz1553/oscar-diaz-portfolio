/**
 * Case study content, transcribed from the current portfolio.
 * Image fields are left empty for now — drop in URLs later and the layout
 * fills in automatically (see ImagePlaceholder).
 */

export interface MetaItem {
  label: string;
  value: string;
}

export interface CaseStudySection {
  /** Optional heading for a text block. */
  title?: string;
  /** One or more paragraphs. */
  body?: string[];
}

/**
 * Flexible content blocks for richer case-study pages. When a study defines
 * `blocks`, the page renders them in order (in place of the fixed
 * gallery/solution/insight sections), so each project can tell its own story.
 */
export type CaseBlock =
  | { kind: 'text'; title?: string; body: string[]; center?: boolean }
  | { kind: 'wide'; image: string; caption?: string }
  | {
      kind: 'gallery';
      title?: string;
      intro?: string;
      cols?: 1 | 2 | 3 | 4;
      items: { image: string; caption?: string }[];
    }
  | {
      kind: 'imageText';
      title?: string;
      body?: string[];
      image: string;
      /** Put the image on the right instead of the left. */
      reverse?: boolean;
    }
  | {
      kind: 'columns';
      title?: string;
      intro?: string;
      items: { label: string; description?: string }[];
    }
  | {
      kind: 'comparison';
      title?: string;
      before: { title: string; points: string[] };
      after: { title: string; points: string[] };
    }
  | { kind: 'metrics'; items: { value: string; label: string }[] };

export interface CaseStudy {
  slug: string;
  /** Full title used on the case study hero. */
  title: string;
  /** Short title used on cards / "Mira más proyectos". */
  cardTitle: string;
  /** Small tag under the card title (e.g. "Case Study"). */
  tag: string;
  /** Hero subtitle / intro paragraph. */
  subtitle: string;
  /** Optional hero image url. */
  heroImage?: string;
  /** Optional thumbnail used on cards and the marquee. */
  thumb?: string;
  meta: MetaItem[];
  problem: CaseStudySection;
  quote?: string;
  /** Carousel image urls (empty for now). */
  carousel: string[];
  /** Numbered process steps. */
  steps: string[];
  solution: CaseStudySection;
  /** Optional secondary insight block ("La decisión clave", etc.). */
  insight?: CaseStudySection;
  result: CaseStudySection;
  /** Optional result metric cards. */
  metrics?: { label: string; value: string }[];
  /** Optional status note (e.g. "en desarrollo"). */
  status?: string;
  /**
   * Optional rich content blocks. When present, they replace the fixed
   * gallery/solution/insight sections on the case-study page.
   */
  blocks?: CaseBlock[];
  /** Slugs shown under "Mira más proyectos". */
  more: string[];
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'sura-mexico',
    title: 'Sura México - Cotizadores',
    cardTitle: 'Sura México - Cotizadores',
    tag: 'Sofka Technologies',
    heroImage: '/images/sura-mexico/calendario-abierto.webp',
    thumb: '/images/sura-mexico/calendario-abierto.webp',
    subtitle:
      'Diseño desde cero de una plataforma enterprise que digitalizó completamente un proceso 100% manual, conectando 5 tipos de usuario en un solo flujo.',
    meta: [
      { label: 'Rol', value: 'UX/UI Designer' },
      { label: 'Empresa', value: 'Sofka Technologies' },
      { label: 'Herramientas', value: 'Figma' },
      { label: 'Usuarios', value: '5 tipos de usuario' },
    ],
    problem: {
      title: 'El problema de negocio',
      body: [
        'Sura México operaba un proceso de cotización 100% manual que involucraba a múltiples tipos de usuario sin un flujo unificado. El reto fue diseñar desde cero una plataforma enterprise capaz de digitalizar completamente el proceso.',
      ],
    },
    carousel: [
      '/images/sura-mexico/duplicidad.webp',
      '/images/sura-mexico/pantalla-cero.webp',
      '/images/sura-mexico/boton-tooltip.webp',
    ],
    steps: ['Discovery', 'Arquitectura', 'Flujos', 'Diseño UI'],
    solution: {
      title: 'La solución',
      body: [
        'Una plataforma enterprise que conecta a los 5 tipos de usuario en un solo flujo digital, eliminando el proceso manual y centralizando la cotización de punta a punta.',
      ],
    },
    result: {
      title: 'El resultado',
      body: [
        'Un proceso antes 100% manual quedó completamente digitalizado en una sola plataforma que conecta a todos los perfiles involucrados.',
      ],
    },
    more: ['metro-de-medellin', 'logyca', 'summa-snetwork'],
  },

  {
    slug: 'metro-de-medellin',
    title: 'Metro de Medellín — Rediseño de Plataforma Interna',
    cardTitle: 'Metro de Medellín — Rediseño de Plataforma Interna',
    tag: 'Sofka Technologies',
    heroImage: '/images/metro-de-medellin/sitva-parametrizacion.webp',
    thumb: '/images/metro-de-medellin/intermunicipales-perfiles.webp',
    subtitle:
      'Rediseño de la plataforma de gestión de usuarios, permisos y movimientos del sistema de transporte público más importante de Colombia — de un sistema confuso a una herramienta centralizada implementada en producción.',
    meta: [
      { label: 'Rol', value: 'UX/UI Designer' },
      { label: 'Empresa', value: 'Sofka Technologies' },
      { label: 'Herramientas', value: 'Figma · Miro' },
      { label: 'Usuarios', value: 'Administradores internos' },
    ],
    problem: {
      title: 'El problema de negocio',
      body: [
        'El Metro de Medellín opera el sistema de transporte público más crítico de la ciudad. Su plataforma interna gestionaba tres funciones esenciales: administración de usuarios internos, asignación de permisos por rol y registro de movimientos de usuarios finales del sistema de transporte.',
        'El problema era que la herramienta existente era confusa, inconsistente y con flujos que generaban errores operativos. Los administradores no podían gestionar permisos de forma centralizada — dependían de procesos paralelos y manuales para compensar las deficiencias del sistema. Esto ralentizaba la operación y dificultaba la toma de decisiones en tiempo real.',
      ],
    },
    quote:
      'En infraestructura pública crítica, un sistema confuso no es solo una molestia — es un riesgo operativo. Los errores de permisos o la falta de trazabilidad tienen consecuencias directas en la operación del transporte.',
    carousel: [
      '/images/metro-de-medellin/sit-valores.webp',
      '/images/metro-de-medellin/intermunicipales-valores.webp',
      '/images/metro-de-medellin/intermunicipales-perfiles.webp',
    ],
    steps: [
      'Análisis heurístico',
      'Identificación de puntos de fricción',
      'Nueva arquitectura',
      'Wireframing y diseño UI',
    ],
    solution: {
      title: 'La solución — Plataforma rediseñada',
      body: [
        'El registro de movimientos en tiempo real fue uno de los cambios más valorados — pasó de ser una pantalla de difícil lectura a un log filtrable con indicadores visuales de estado que permite identificar anomalías de un vistazo y tomar decisiones operativas de forma inmediata.',
      ],
    },
    insight: {
      title: 'La mayor fricción no era visual — era arquitectural.',
      body: [
        'El análisis heurístico reveló que gestionar los permisos de un solo usuario requería navegar por múltiples pantallas sin un punto de control unificado. La decisión de diseño más importante fue consolidar toda la gestión de permisos en una vista única por perfil de usuario — un panel donde el administrador ve de un vistazo qué accesos tiene, cuáles están activos y puede modificarlos sin salir de la pantalla. Esta decisión, simple en apariencia, eliminó la mayor fuente de errores operativos del sistema.',
      ],
    },
    result: {
      title: 'El resultado',
      body: [
        'La plataforma rediseñada fue implementada en producción. Los administradores pasaron de un sistema fragmentado y confuso a una herramienta centralizada que permite gestionar usuarios, permisos y trazabilidad de movimientos desde un único punto de control — reduciendo errores operativos y agilizando la toma de decisiones.',
      ],
    },
    more: ['trib', 'summa-snetwork', 'sura-mexico'],
  },

  {
    slug: 'logyca',
    title: 'Logyca — Gestión de Inventario en Tiempo Real',
    cardTitle: 'Logyca — Gestión de Inventario en Tiempo Real',
    tag: 'Sofka Technologies',
    heroImage: '/images/logyca/ingesta.webp',
    thumb: '/images/logyca/ingesta-1.webp',
    subtitle:
      'Diseñé el corazón de una plataforma que reemplazó procesos manuales en Excel por un sistema visual e intuitivo para dos perfiles de usuario con necesidades radicalmente distintas.',
    meta: [
      { label: 'Rol', value: 'UX/UI Designer' },
      { label: 'Empresa', value: 'Sofka Technologies' },
      { label: 'Herramientas', value: 'Figma · Miro' },
      { label: 'Usuarios', value: 'Internos y externos' },
    ],
    problem: {
      title: 'El problema del negocio',
      body: [
        'Logyca necesitaba una plataforma para gestionar inventarios en tiempo real. El problema: los usuarios operaban con hojas de cálculo dispersas sin visibilidad centralizada, lo que generaba decisiones lentas de cara a operaciones de procesos manuales propensas a fallos.',
        'El reto adicional: no era solo complejo de diseñar — era que la plataforma debía servir simultáneamente a dos tipos de usuario con necesidades radicalmente distintas, empleados internos de Logyca y clientes externos de la empresa, sin sacrificar la usabilidad de ninguno.',
      ],
    },
    quote:
      'El reto no era solo digitalizar el inventario. Era diseñar una sola plataforma que funcionara perfectamente para dos audiencias con objetivos, contextos y niveles técnicos completamente diferentes.',
    carousel: [
      '/images/logyca/ingesta-1.webp',
      '/images/logyca/ingesta-2.webp',
      '/images/logyca/ingesta-3.webp',
    ],
    steps: [
      'Research',
      'Arquitectura dual',
      'Wireframe bajo',
      'Sistema de diseño',
      'UI HiFi y prototipo',
    ],
    blocks: [
      {
        kind: 'text',
        title: 'Wireframes',
        body: [
          'El proceso de creación de wireframes fue esencial para traducir los conceptos iniciales en diseños consensuados. Con estos wireframes de baja fidelidad pudimos validar las funcionalidades básicas de la plataforma, asegurándonos de que el flujo de usuarios fuera intuitivo y adecuado antes de invertir en el diseño de alta fidelidad.',
        ],
      },
      {
        kind: 'imageText',
        title: 'La solución — dos experiencias, un sistema',
        body: [
          'La clave de diseño fue crear dos experiencias diferenciadas dentro de un mismo sistema. El usuario interno ve toda la operación con herramientas de gestión completa; el cliente externo ve solo su información, con máxima claridad y sin ruido. Ambas experiencias comparten el mismo sistema de componentes y lenguaje visual.',
        ],
        image: '/images/logyca/ingesta-2.webp',
      },
      {
        kind: 'gallery',
        title: 'Módulo de ingesta',
        cols: 2,
        items: [
          { image: '/images/logyca/ingesta-1.webp', caption: 'Registro de cargas' },
          { image: '/images/logyca/ingesta-3.webp', caption: 'Maestro de productos' },
        ],
      },
    ],
    solution: {
      title: 'La solución',
      body: [
        'La clave de diseño fue crear dos experiencias diferenciadas dentro de un mismo sistema. El usuario interno ve toda la operación con herramientas de gestión completa; el cliente externo ve solo su información, con máxima claridad y sin ruido. Ambas experiencias comparten el mismo sistema de componentes y lenguaje visual.',
      ],
    },
    insight: {
      title: 'Wireframes',
      body: [
        'El proceso de creación de wireframes fue esencial para traducir los conceptos iniciales en diseños consensuados. Con estos wireframes de baja fidelidad pudimos validar las funcionalidades básicas de la plataforma, asegurándonos de que el flujo de usuarios fuera intuitivo y adecuado antes de invertir en el diseño de alta fidelidad.',
      ],
    },
    result: {
      title: 'El resultado',
      body: [
        'La plataforma reemplazó los procesos manuales en hojas de cálculo por un sistema visual centralizado con actualización en tiempo real. El diseño fue aprobado y entregado para desarrollo con un sistema de componentes documentado.',
      ],
    },
    metrics: [
      { label: 'experiencias diferenciadas dentro de un mismo sistema', value: '2 experiencias' },
      { label: 'Feedback positivo de usuarios internos y externos en validación', value: 'Feedback positivo' },
      { label: 'Cero dependencia de Excel — proceso completamente digitalizado', value: '0 excel' },
    ],
    more: ['metro-de-medellin', 'trib', 'sura-mexico'],
  },

  {
    slug: 'summa-snetwork',
    title: 'SUMMA - SNetwork',
    cardTitle: 'SUMMA - SNetwork',
    tag: 'Sofka Technologies',
    heroImage: '/images/summa-snetwork/inicio.webp',
    thumb: '/images/summa-snetwork/tabla.webp',
    subtitle:
      'Rediseño completo de una plataforma con más de 10 módulos, en un sistema complejo, convirtiendo cientos de pasos innecesarios a una experiencia unificada con flujos simplificados y un sistema de diseño documentado.',
    meta: [
      { label: 'Rol', value: 'UX/UI Designer' },
      { label: 'Empresa', value: 'Sofka Technologies' },
      { label: 'Herramientas', value: 'Figma · Figma Make · VO · Cursor · Azure' },
      { label: 'Alcance', value: '+10 módulos rediseñados' },
    ],
    problem: {
      title: 'El problema de negocio',
      body: [
        'SNetwork, la plataforma interna de Summa, necesitaba una migración compleja. Pero el equipo identificó rápidamente que migrar fielmente el sistema existente sería un error: la plataforma acumulaba años de deuda de diseño — más de 10 módulos con inconsistencias visuales entre sí, flujos cargados de pasos innecesarios y una experiencia que ralentizaba el trabajo diario de los usuarios.',
        'La oportunidad era clara: la migración no era solo un trabajo técnico, era el momento de rediseñar la experiencia desde adentro, unificar el lenguaje visual y eliminar la fricción acumulada en los flujos más críticos.',
      ],
    },
    quote:
      'La decisión estratégica no fue "¿cómo migramos esto?" sino "¿qué de esto merece seguir existiendo tal como está?". Esa pregunta cambió todo el enfoque del proyecto.',
    carousel: [
      '/images/summa-snetwork/seleccion-facturas.webp',
      '/images/summa-snetwork/pqrs-gestion.webp',
      '/images/summa-snetwork/usuario-seleccionado.webp',
    ],
    steps: [
      'Evaluación heurística del sistema',
      'Mapeo de flujos críticos',
      'Aceptación y extensión del sistema',
      'Rediseño y validación con QA',
    ],
    blocks: [
      {
        kind: 'imageText',
        title: 'La solución — Plataforma rediseñada',
        body: [
          'El sistema de navegación lateral fue uno de los cambios más importantes — en lugar de menús dispersos por módulo, toda la plataforma se recorre desde una sola barra de navegación consistente. Esto redujo la desorientación de usuarios y eliminó la necesidad de recordar en qué parte de la plataforma estaban.',
        ],
        image: '/images/summa-snetwork/seleccion-facturas.webp',
      },
      {
        kind: 'imageText',
        reverse: true,
        title: 'La decisión clave',
        body: [
          'No migrar — rediseñar. Propuse ir más allá de la migración fiel y rediseñar los flujos más críticos. El objetivo inicial era replicar el sistema existente lo más fielmente posible para no introducir errores. Pero después de la evaluación heurística, identifiqué flujos donde las mismas acciones repetitivas en múltiples pasos podían colapsarse en uno. Presenté la propuesta al equipo de producto y stakeholders, fue aceptada, y el resultado fue una plataforma notablemente más ágil para el trabajo diario.',
        ],
        image: '/images/summa-snetwork/usuario-seleccionado.webp',
      },
      {
        kind: 'gallery',
        title: 'Más del rediseño',
        cols: 3,
        items: [
          { image: '/images/summa-snetwork/pqrs-gestion.webp', caption: 'Gestión de PQRS' },
          { image: '/images/summa-snetwork/tabla.webp', caption: 'Listado de PQRS' },
          { image: '/images/summa-snetwork/reclamo.webp', caption: 'Registro de reclamos' },
        ],
      },
    ],
    solution: {
      title: 'La solución — Plataforma rediseñada',
      body: [
        'El sistema de navegación lateral fue uno de los cambios más importantes — en lugar de menús dispersos por módulo, toda la plataforma requería desde una sola barra de navegación consistente. Esto redujo la desorientación de usuarios y eliminó la necesidad de recordar en qué parte de la plataforma estaban.',
      ],
    },
    insight: {
      title: 'La decisión clave',
      body: [
        'No migrar — rediseñar. Propuse ir más allá de la migración fiel y rediseñar los flujos más críticos. En el momento inicial esto era el objetivo del sistema existente lo más fielmente posible para no introducir errores en el proyecto. Pero después de la evaluación heurística, identifiqué flujos y funcionalidades donde las mismas acciones repetitivas en múltiples pasos que podían colapsarse en uno. Presenté esta propuesta al equipo de producto y stakeholders, fue aceptada y el resultado fue una plataforma notablemente más ágil para el trabajo diario.',
      ],
    },
    result: {
      title: 'Estado actual',
      body: [
        'Así encontramos el producto. Realizamos una evaluación heurística, conversamos con stakeholders y usuarios, y logramos y consensuamos que encontramos grandes mejoras a nivel de experiencia e interfaz.',
      ],
    },
    status: 'Este proyecto se encuentra en desarrollo.',
    more: ['logyca', 'metro-de-medellin', 'trib'],
  },

  {
    slug: 'game-view',
    title: 'Game View — Ecosistema de Espacios 3D Interactivos',
    cardTitle: 'Game View — Ecosistema de Espacios 3D Interactivos',
    tag: 'Sofka Technologies',
    heroImage: '/images/game-view/designer-3.webp',
    thumb: '/images/game-view/evento-1.webp',
    subtitle:
      'Diseñé el sistema completo de dos productos alrededor de una experiencia 3D interactiva — una herramienta de creación de espacios 3D y su app de consumo para TV y móvil. El prototipo fue clave para conseguir el funding.',
    meta: [
      { label: 'Rol', value: 'UX/UI Designer' },
      { label: 'Empresa', value: 'Sofka Technologies' },
      { label: 'Herramientas', value: 'Figma · Miro · Stitch · Lovable' },
      { label: 'Impacto', value: 'Funding conseguido' },
    ],
    problem: {
      title: 'El problema de negocio',
      body: [
        'El cliente llegó con una idea y un objetivo: crear una plataforma donde crear espacios 3D interactivos y una herramienta de distribución para consumirlos en televisores. Dos plataformas, dos audiencias completamente distintas.',
        'El reto era doble y ambiguo: había que diseñar dos productos completamente distintos, que funcionaran como un ecosistema coherente. Y había que hacerlo sin referencias claras — el cliente no tenía nada, ni wireframes, ni MVP, ni referente visual. Solo la idea. Mi trabajo fue convertir esa visión en un prototipo lo suficientemente sólido para presentarlo a inversores.',
      ],
    },
    quote:
      'El cliente no tenía nada — ni wireframes, ni MVP, ni referente visual. Solo la idea. Mi trabajo fue convertir esa visión en un prototipo lo suficientemente sólido para presentarlo a inversores.',
    carousel: [
      '/images/game-view/ps.webp',
      '/images/game-view/evento-1.webp',
      '/images/game-view/ps-1.webp',
    ],
    steps: [
      'Customer Journey',
      'Decisiones de diseño',
      'Ecosistema — dos productos',
      'Prototipo para inversores',
    ],
    blocks: [
      {
        kind: 'gallery',
        title: 'Entendimiento y contexto',
        intro:
          'Antes de diseñar una sola pantalla, mapeé el problema: el recorrido del productor de contenido, sus historias de usuario y el flujo completo de creación. Ese entendimiento fue la base de todas las decisiones de diseño.',
        cols: 1,
        items: [
          {
            image: '/images/game-view/understanding-1.webp',
            caption: 'Customer Journey — Content producer',
          },
          {
            image: '/images/game-view/understanding-2.webp',
            caption: 'Mapeo de historias de usuario',
          },
          {
            image: '/images/game-view/understanding-3.webp',
            caption: 'User flow del creador de espacios',
          },
        ],
      },
      {
        kind: 'imageText',
        title: 'El ecosistema — dos productos, una visión',
        body: [
          'Content creator: la herramienta con la que se crean los espacios 3D interactivos. Consumer App: la app donde los usuarios exploran y consumen esos espacios en TV y móvil. Dos productos, un mismo lenguaje visual y una misma visión de ecosistema.',
        ],
        image: '/images/game-view/ps-1.webp',
      },
      {
        kind: 'gallery',
        title: 'Content Creator — el editor de espacios 3D',
        intro:
          'La herramienta con la que los productores crean, editan y publican sus espacios 3D interactivos.',
        cols: 2,
        items: [
          { image: '/images/game-view/designer-1.webp', caption: 'Selección de escena' },
          { image: '/images/game-view/designer-2.webp', caption: 'Edición de objetos en escena' },
        ],
      },
      {
        kind: 'gallery',
        title: 'Consumer App — TV y móvil',
        intro: 'La app donde los usuarios exploran y consumen los espacios y eventos.',
        cols: 2,
        items: [
          { image: '/images/game-view/ps.webp', caption: 'Explorar eventos' },
          { image: '/images/game-view/evento-1.webp', caption: 'Detalle de evento' },
        ],
      },
      {
        kind: 'text',
        title: 'Diseñar para inversores, no solo para usuarios',
        body: [
          'El prototipo no solo tenía que resolver el problema de producto, no solo demostrar funcionalidad. Con un ciclo de vida más maduro y las mejores decisiones de UX bien fundamentadas, la visión de un ecosistema fue lo suficientemente sólida como para convencer a los inversores. El resultado habló por sí solo: funding conseguido.',
        ],
      },
    ],
    solution: {
      title: 'El ecosistema — dos productos, una visión',
      body: [
        'Content creator: la herramienta con la que se crean los espacios 3D interactivos. Consumer App: la app donde los usuarios exploran y consumen esos espacios en TV y móvil. Dos productos, un mismo lenguaje visual y una misma visión de ecosistema.',
      ],
    },
    insight: {
      title: 'Diseñar para inversores, no solo para usuarios',
      body: [
        'El prototipo no solo tenía que resolver el problema de producto, no solo demostrar funcionalidad. Con un ciclo de vida más maduro y las mejores decisiones de UX bien fundamentadas, la visión de un ecosistema fue lo suficientemente sólida como para convencer a los inversores. El resultado habló por sí solo: funding conseguido.',
      ],
    },
    result: {
      title: 'El resultado',
      body: [
        'Dos productos coherentes como ecosistema, un prototipo de alta fidelidad, y el funding conseguido para llevar la visión a la realidad.',
      ],
    },
    metrics: [
      { label: 'Diseño de dos productos nuevos por un cliente desde cero', value: '0 → 1' },
      { label: 'Feedback positivo de cliente y equipo de negocio', value: 'Feedback positivo' },
      { label: 'Producto de creación y app de consumo diseñados', value: '2 productos' },
      { label: 'El prototipo fue clave para conseguir el funding', value: 'Funding' },
    ],
    more: ['summa-snetwork', 'logyca', 'metro-de-medellin'],
  },

  {
    slug: 'trib',
    title: 'Trib',
    cardTitle: 'Trib',
    tag: 'Case Study',
    heroImage: '/images/trib/misiones-pres.webp',
    thumb: '/images/trib/user-persona.webp',
    subtitle:
      'UX case study de una app mobile: research, definición de personas, arquitectura de información, flujos, wireframes y un sistema de diseño completo (tipografía, color, grid, componentes).',
    meta: [
      { label: 'Rol', value: 'UX/UI Designer' },
      { label: 'Tipo', value: 'Proyecto de estudio' },
      { label: 'Herramientas', value: 'Figma' },
      { label: 'Plataforma', value: 'Mobile app' },
    ],
    problem: {
      title: 'El problema',
      body: [
        'Trib nace como un proyecto de estudio para explorar de punta a punta el proceso de diseño de producto: desde el research y la definición de personas hasta un sistema de diseño documentado y pantallas de alta fidelidad.',
      ],
    },
    carousel: [
      '/images/trib/mision-recompensas.webp',
      '/images/trib/slide-27.webp',
      '/images/trib/tienda-tribcoins.webp',
    ],
    steps: [
      'Research',
      'Personas y flujos',
      'Wireframes',
      'Sistema de diseño',
      'UI HiFi',
    ],
    blocks: [
      {
        kind: 'wide',
        image: '/images/trib/user-persona.webp',
        caption: 'Definición de personas',
      },
      {
        kind: 'wide',
        image: '/images/trib/slide-36.webp',
        caption: 'Arquitectura de features y priorización del MVP',
      },
      {
        kind: 'gallery',
        title: 'Sistema de diseño',
        intro:
          'Un sistema de diseño completo y documentado que da consistencia a toda la experiencia.',
        cols: 2,
        items: [
          { image: '/images/trib/slide-27.webp', caption: 'Tipografía · Poppins' },
          { image: '/images/trib/slide-28.webp', caption: 'Paleta de color' },
          { image: '/images/trib/slide-29.webp', caption: 'Grid & spacing' },
          { image: '/images/trib/slide-30.webp', caption: 'Componentes' },
          { image: '/images/trib/slide-7.webp', caption: 'Atomic design' },
        ],
      },
      {
        kind: 'gallery',
        title: 'Pantallas de la app',
        cols: 4,
        items: [
          { image: '/images/trib/misiones-pres.webp', caption: 'Home · Misiones' },
          { image: '/images/trib/mision-recompensas.webp', caption: 'Recompensas' },
          { image: '/images/trib/tienda-tribcoins.webp', caption: 'Tienda de TribCoins' },
          { image: '/images/trib/compra.webp', caption: 'Checkout' },
        ],
      },
    ],
    solution: {
      title: 'Sistema de diseño',
      body: [
        'Se definió un sistema de diseño completo: tipografía (Poppins), paleta de color, grid system, spacing, iconografía, botones y componentes reutilizables que dan consistencia a toda la experiencia.',
      ],
    },
    result: {
      title: 'El resultado',
      body: [
        'Un case study end-to-end que documenta el proceso de diseño completo, desde la investigación hasta un producto mobile pulido con su propio sistema de diseño.',
      ],
    },
    more: ['metro-de-medellin', 'logyca', 'game-view'],
  },
];

export const getCaseStudy = (slug: string): CaseStudy | undefined =>
  CASE_STUDIES.find((c) => c.slug === slug);
