/**
 * Case study content, transcribed from the current portfolio.
 * Image fields are left empty for now; drop in URLs later and the layout
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
  | { kind: 'metrics'; title?: string; items: { value: string; label: string }[] }
  | {
      kind: 'video';
      title?: string;
      intro?: string;
      /** Versión horizontal (escritorio) y vertical (celular). */
      horizontal: { src: string; poster: string };
      vertical: { src: string; poster: string };
      caption?: string;
    };

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
  /** Una línea para las tarjetas de la home. */
  short?: string;
  /** true = lleva la etiqueta "New" (proyecto reciente). */
  isNew?: boolean;
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
    slug: 'diario-deportes',
    title: 'Diario Deportes: Rediseño y migración en vivo',
    cardTitle: 'Diario Deportes: Rediseño y migración en vivo',
    tag: 'Proyecto propio, UX/UI y desarrollo web',
    short: 'Rediseño y migración en vivo de un diario con más de 47.000 notas.',
    isNew: true,
    heroImage: '/images/diario-deportes/hero.webp',
    thumb: '/images/diario-deportes/hero.webp',
    subtitle:
      'Auditoré, rediseñé y reconstruí en WordPress el sitio de Diario Deportes y migré en vivo más de 47.000 notas. La portada en celular bajó de 32,5 a 4,3 MB.',
    meta: [
      { label: 'Rol', value: 'Diseño UX/UI y desarrollo web' },
      { label: 'Alcance', value: 'Auditoría, rediseño, desarrollo en WordPress y migración en vivo' },
      { label: 'Medio', value: 'Diario Deportes, Barranquilla' },
      { label: 'Sitio', value: 'diariodeportes.com.co' },
    ],
    problem: {
      title: 'El problema',
      body: [
        'Diario Deportes tiene más de 20 años y su sitio había crecido sin orden. La auditoría encontró seis problemas: un menú de diez secciones al mismo nivel, contenido duplicado en la portada, siete o más banners sueltos y sin etiqueta, widgets de terceros que rompían la imagen del diario, ninguna jerarquía editorial y una accesibilidad floja.',
        'Medido el 19 de octubre, la portada pesaba unos 32 MB. En celular, PageSpeed daba 29 sobre 100 y el contenido principal tardaba 38 segundos en aparecer con una red lenta simulada.',
      ],
    },
    quote: '“Una palabra: espectacular. Quedó excelente.” Hugo Illera, director de Diario Deportes',
    carousel: [
      '/images/diario-deportes/antes.webp',
      '/images/diario-deportes/movil.webp',
      '/images/diario-deportes/hero.webp',
    ],
    steps: ['Auditoría', 'Propuesta navegable', 'Rediseño', 'Desarrollo en WordPress', 'Migración en vivo'],
    blocks: [
      {
        kind: 'text',
        title: 'La idea',
        body: [
          'Ordenar el sitio sin perder la voz del diario: una nota principal, la publicidad etiquetada y en su lugar, datos de fútbol con diseño propio y una redacción que publica sin pelear con la página. El equipo del diario puede editar todo sin depender de mí.',
        ],
      },
      {
        kind: 'gallery',
        title: 'Antes y ahora, en el celular',
        intro: 'Lo diseñé primero para el celular, sin desplazamiento lateral y con áreas táctiles grandes.',
        cols: 2,
        items: [
          { image: '/images/diario-deportes/antes.webp', caption: 'Antes: un encabezado enorme y publicidad sobre lo que se quiere leer' },
          { image: '/images/diario-deportes/movil.webp', caption: 'Ahora: la nota principal al frente y los partidos a la vista' },
        ],
      },
      {
        kind: 'wide',
        image: '/images/diario-deportes/hero.webp',
        caption: 'La portada: una nota grande en carrusel y la tira de partidos arriba de todo',
      },
      {
        kind: 'imageText',
        title: 'Estructura del sitio',
        body: [
          'Reduje el menú a pocas secciones más un «Más», sin cambiar ninguna dirección web para no afectar el posicionamiento en Google. La portada tiene una nota principal, secciones con su nota destacada y notas secundarias con foto.',
          'Cada sección tiene su propio diseño: Fútbol Colombiano, Internacional, Béisbol, Boxeo, Más Deportes, Columnistas con foto y En video, conectado al canal de YouTube. Cada categoría, como el Junior o el béisbol, tiene su ficha.',
        ],
        image: '/images/diario-deportes/menu.webp',
      },
      {
        kind: 'imageText',
        title: 'Datos de fútbol con diseño propio',
        body: [
          'Una tira de partidos arriba de todo, con selector de calendario: Liga BetPlay, Copa, Libertadores y más. Tabla de posiciones y resultados de la fecha, con la zona de clasificación, el Junior y su rival del día marcados.',
          'La ficha del próximo partido del Junior, con cuenta regresiva, estadio y canal de televisión, y la programación de TV con un desplegable de 63 competiciones y equipos, banderas de cada liga y escudos de los clubes colombianos.',
        ],
        image: '/images/diario-deportes/proximo-partido.webp',
        reverse: true,
      },
      {
        kind: 'imageText',
        title: 'La publicidad',
        body: [
          'Espacios fijos, cada uno con su etiqueta «Publicidad», y un sistema que reparte los anuncios para que nunca haya tres a la vista al mismo tiempo. Las nueve piezas de los anunciantes quedaron en su lugar, y hay un bloque «Anuncie en Diario Deportes» con sus logos.',
        ],
        image: '/images/diario-deportes/futbol-colombiano.webp',
      },
      {
        kind: 'columns',
        title: 'Herramientas para la redacción',
        intro: 'Construí herramientas para quienes usan el sitio todos los días en la redacción.',
        items: [
          {
            label: 'Lo más leído hoy',
            description:
              'Con contador propio: mide las últimas 24 horas en la portada, en cada sección y en las notas. No cuenta robots ni las visitas del equipo, y funciona aunque el sitio esté en caché.',
          },
          {
            label: 'Pizarra deportiva',
            description: 'Una pantalla simple para publicar, reemplazar o quitar la pizarra del día.',
          },
          {
            label: 'Baloncito',
            description: 'La caricatura diaria, con su archivo.',
          },
          {
            label: 'Edición y efemérides',
            description: 'El número de edición y «Un día como hoy» cambian solos a medianoche.',
          },
          {
            label: 'Accesibilidad',
            description: 'Texto alternativo en las imágenes, contraste suficiente y navegación por teclado.',
          },
        ],
      },
      {
        kind: 'gallery',
        title: 'En video y en columnas',
        cols: 2,
        items: [
          { image: '/images/diario-deportes/youtube.webp', caption: 'El canal de YouTube del diario, dentro de la portada' },
          { image: '/images/diario-deportes/columna.webp', caption: 'Pelotas y Letras, la columna del director' },
        ],
      },
      {
        kind: 'text',
        title: 'La migración',
        body: [
          'Reconstruí el sitio en WordPress. El reto principal fue pasar más de 47.000 notas a un sitio nuevo sin que la redacción dejara de publicar.',
          'Antes de tocar el sitio real, monté una copia completa en un subdominio cerrado y corrí todo el procedimiento. La noche del 20 al 21 de octubre arranqué a las 8 p. m., con el sitio detrás de una página de mantenimiento que le dice a Google «vuelvo pronto». La redacción publicó toda la noche y el sitio nuevo salió a las 3:10 a. m., casi tres horas antes de lo que esperaba el cliente.',
        ],
      },
      {
        kind: 'metrics',
        items: [
          { value: '6 min', label: 'Lo que tardaron los scripts en el ensayo general; el plan estimaba 140' },
          { value: '27 s', label: 'La vuelta atrás, probada, sin borrar nada del sitio anterior' },
          { value: '3:10 a. m.', label: 'Hora de publicación, casi tres horas antes de lo esperado' },
          { value: '47.616', label: 'Notas publicadas, más que las 47.606 del inicio' },
        ],
      },
      {
        kind: 'video',
        title: 'Lo que dijo el director',
        intro: 'Hugo Illera, director de Diario Deportes, habla del resultado y del proceso.',
        horizontal: {
          src: '/images/diario-deportes/testimonio-horizontal.mp4',
          poster: '/images/diario-deportes/testimonio-horizontal.webp',
        },
        vertical: {
          src: '/images/diario-deportes/testimonio-vertical.mp4',
          poster: '/images/diario-deportes/testimonio-vertical.webp',
        },
      },
    ],
    solution: {
      title: 'La solución',
      body: [
        'Un sitio con jerarquía editorial, publicidad ordenada, datos de fútbol en vivo y herramientas para la redacción. Salió en una noche sin perder ninguna nota.',
      ],
    },
    result: {
      title: 'Lo que cambió',
      body: [
        'En celular, el peso de la portada pasó de 32,5 a 4,3 MB, el puntaje de PageSpeed de 29 a 50 sobre 100 y el tiempo hasta ver el contenido principal de 38,3 a 12,5 segundos. Se migraron 47.616 notas sin perder ninguna.',
      ],
    },
    more: ['game-view', 'summa-snetwork', 'logyca'],
  },
  {
    slug: 'sura-mexico',
    short: 'Lideré la interfaz de una plataforma enterprise que digitalizó un proceso 100% manual.',
    title: 'Sura México: Cotizadores',
    cardTitle: 'Sura México: Cotización y emisión de pólizas',
    tag: 'Sofka Technologies',
    heroImage: '/images/sura-mexico/calendario-abierto.webp',
    thumb: '/images/sura-mexico/calendario-abierto.webp',
    subtitle:
      'Lideré la interfaz de la plataforma de cotización y emisión de pólizas de Sura México. Digitalizó un proceso 100% manual y conecta 5 tipos de usuario en un solo flujo.',
    meta: [
      { label: 'Rol', value: 'UX/UI Designer, líder de la interfaz' },
      { label: 'Alcance', value: 'Plataforma enterprise desde cero, con 5 tipos de usuario' },
      { label: 'Empresa', value: 'Sofka Technologies' },
      { label: 'Herramientas', value: 'Figma' },
    ],
    problem: {
      title: 'El problema de negocio',
      body: [
        'Sura México cotizaba 100% a mano, con varios tipos de usuario y sin un flujo común. Diseñé desde cero una plataforma que pasara todo el proceso a digital. Lideré la interfaz y acompañé continuamente a desarrollo.',
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
        'Una plataforma que conecta a los 5 tipos de usuario en un solo flujo digital y centraliza la cotización. Es responsive y resuelve flujos multi-rol.',
      ],
    },
    result: {
      title: 'El resultado',
      body: [
        'Un proceso que era 100% manual quedó digitalizado en una sola plataforma, con todos los perfiles conectados.',
      ],
    },
    more: ['metro-de-medellin', 'logyca', 'summa-snetwork'],
  },

  {
    slug: 'metro-de-medellin',
    short: 'Rediseñé la plataforma interna de usuarios, permisos y movimientos del sistema de transporte público. Ya está en producción.',
    title: 'Metro de Medellín: Rediseño de plataforma interna',
    cardTitle: 'Metro de Medellín: Usuarios, permisos y trazabilidad',
    tag: 'Sofka Technologies',
    heroImage: '/images/metro-de-medellin/sitva-parametrizacion.webp',
    thumb: '/images/metro-de-medellin/intermunicipales-perfiles.webp',
    subtitle:
      'Rediseñé la plataforma interna de usuarios, permisos y movimientos del Metro de Medellín, para sus administradores. Ya está en producción.',
    meta: [
      { label: 'Rol', value: 'UX/UI Designer' },
      { label: 'Alcance', value: 'Plataforma interna para administradores: usuarios, permisos y movimientos' },
      { label: 'Empresa', value: 'Sofka Technologies' },
      { label: 'Herramientas', value: 'Figma · Miro' },
    ],
    problem: {
      title: 'El problema de negocio',
      body: [
        'La plataforma interna del Metro de Medellín administra usuarios internos, asigna permisos por rol y registra los movimientos de los usuarios finales del sistema.',
        'Era confusa e inconsistente y sus flujos causaban errores operativos. Los administradores no podían manejar los permisos en un solo lugar y compensaban con procesos manuales paralelos, lo que frenaba la operación y dificultaba decidir en tiempo real.',
      ],
    },
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
    blocks: [
      {
        kind: 'imageText',
        title: 'El registro de movimientos',
        body: [
          'El registro de movimientos en tiempo real pasó de ser una pantalla difícil de leer a un registro filtrable, con indicadores de estado que muestran las anomalías de un vistazo. Fue uno de los cambios más valorados.',
        ],
        image: '/images/metro-de-medellin/sit-valores.webp',
      },
      {
        kind: 'imageText',
        reverse: true,
        title: 'La arquitectura de permisos',
        body: [
          'El análisis heurístico mostró que cambiar los permisos de un usuario obligaba a pasar por varias pantallas, sin un punto de control único. Junté toda la gestión de permisos en una sola vista por perfil, donde el administrador ve qué accesos tiene el usuario, cuáles están activos y los cambia sin salir de la pantalla. Eso eliminó la mayor fuente de errores operativos del sistema.',
        ],
        image: '/images/metro-de-medellin/intermunicipales-perfiles.webp',
      },
      {
        kind: 'gallery',
        title: 'La plataforma rediseñada',
        intro:
          'Parametrización de tarifas por ruta y perfil, valores del SIT e intermunicipales, y generación de la política tarifaria, todo desde un único punto de control.',
        cols: 3,
        items: [
          { image: '/images/metro-de-medellin/intermunicipales-valores.webp', caption: 'Valores intermunicipales' },
          { image: '/images/metro-de-medellin/politica-tarifaria.webp', caption: 'Generar política tarifaria' },
          { image: '/images/metro-de-medellin/parametrizacion.webp', caption: 'Bienvenida · Parametrización' },
        ],
      },
    ],
    solution: {
      title: 'El registro de movimientos',
      body: [
        'El registro de movimientos en tiempo real pasó de ser una pantalla difícil de leer a un registro filtrable, con indicadores de estado que muestran las anomalías de un vistazo. Fue uno de los cambios más valorados.',
      ],
    },
    insight: {
      title: 'La arquitectura de permisos',
      body: [
        'El análisis heurístico mostró que cambiar los permisos de un usuario obligaba a pasar por varias pantallas, sin un punto de control único. Junté toda la gestión de permisos en una sola vista por perfil, donde el administrador ve qué accesos tiene el usuario, cuáles están activos y los cambia sin salir de la pantalla. Eso eliminó la mayor fuente de errores operativos del sistema.',
      ],
    },
    result: {
      title: 'El resultado',
      body: [
        'La plataforma ya está en producción. Los administradores gestionan usuarios, permisos y trazabilidad de movimientos desde un solo lugar. Hay menos errores operativos y las decisiones se toman más rápido.',
      ],
    },
    more: ['trib', 'summa-snetwork', 'sura-mexico'],
  },

  {
    slug: 'logyca',
    short: 'De hojas de cálculo a una plataforma de inventario para usuarios internos y externos.',
    title: 'Logyca: Gestión de inventario en tiempo real',
    cardTitle: 'Logyca: Gestión de inventario en tiempo real',
    tag: 'Sofka Technologies',
    heroImage: '/images/logyca/ingesta.webp',
    thumb: '/images/logyca/ingesta-1.webp',
    subtitle:
      'Diseñé la plataforma de inventario de Logyca, que reemplazó los procesos manuales en Excel y sirve a usuarios internos y a clientes externos.',
    meta: [
      { label: 'Rol', value: 'UX/UI Designer' },
      { label: 'Alcance', value: 'Diseño de la plataforma, para usuarios internos y externos' },
      { label: 'Empresa', value: 'Sofka Technologies' },
      { label: 'Herramientas', value: 'Figma · Miro' },
    ],
    problem: {
      title: 'El problema del negocio',
      body: [
        'Logyca necesitaba gestionar inventarios en tiempo real. Los usuarios trabajaban con hojas de cálculo dispersas y sin una vista central, lo que hacía lentas las decisiones y los procesos manuales propensos a fallos.',
        'La plataforma tenía que servir a dos tipos de usuario con necesidades distintas: los empleados internos de Logyca y los clientes externos.',
      ],
    },
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
        kind: 'gallery',
        title: 'Wireframes de baja fidelidad',
        intro:
          'Con la baja fidelidad convertimos las ideas iniciales en diseños que todos aprobaron, validamos las funciones básicas y comprobamos que el flujo fuera claro antes de pasar a la alta fidelidad.',
        cols: 2,
        items: [
          { image: '/images/logyca/gestion-productos.webp', caption: 'Selección de módulo' },
          { image: '/images/logyca/carga-masiva.webp', caption: 'Carga masiva' },
          { image: '/images/logyca/cargas-individuales.webp', caption: 'Cargas individuales' },
          { image: '/images/logyca/actualizacion-productos.webp', caption: 'Actualización de productos' },
        ],
      },
      {
        kind: 'imageText',
        title: 'Dos experiencias en un sistema',
        body: [
          'Hice dos experiencias dentro de un mismo sistema. El usuario interno ve toda la operación y tiene las herramientas de gestión completas. El cliente externo ve solo su información. Las dos comparten componentes y lenguaje visual.',
        ],
        image: '/images/logyca/ingesta-2.webp',
      },
      {
        kind: 'gallery',
        title: 'Módulo de ingesta en alta fidelidad',
        cols: 3,
        items: [
          { image: '/images/logyca/ingesta.webp', caption: 'Vista general de módulos' },
          { image: '/images/logyca/ingesta-1.webp', caption: 'Registro de cargas' },
          { image: '/images/logyca/ingesta-3.webp', caption: 'Maestro de productos' },
        ],
      },
    ],
    solution: {
      title: 'La solución',
      body: [
        'Hice dos experiencias dentro de un mismo sistema. El usuario interno ve toda la operación y tiene las herramientas de gestión completas. El cliente externo ve solo su información. Las dos comparten componentes y lenguaje visual.',
      ],
    },
    insight: {
      title: 'Wireframes',
      body: [
        'Con la baja fidelidad convertimos las ideas iniciales en diseños que todos aprobaron, validamos las funciones básicas y comprobamos que el flujo fuera claro antes de pasar a la alta fidelidad.',
      ],
    },
    result: {
      title: 'El resultado',
      body: [
        'La plataforma reemplazó las hojas de cálculo por un sistema centralizado con actualización en tiempo real. El diseño se aprobó y se entregó a desarrollo con un sistema de componentes documentado.',
      ],
    },
    metrics: [
      { label: 'Experiencias diferenciadas en un mismo sistema', value: '2 experiencias' },
      { label: 'Feedback positivo de usuarios internos y externos en validación', value: 'Feedback positivo' },
      { label: 'Proceso digitalizado, sin depender de Excel', value: '0 excel' },
    ],
    more: ['metro-de-medellin', 'trib', 'sura-mexico'],
  },

  {
    slug: 'summa-snetwork',
    short: 'Rediseñé una plataforma de más de 10 módulos y armé su sistema de diseño. Sigue en desarrollo.',
    title: 'SUMMA: SNetwork',
    cardTitle: 'SUMMA: Rediseño de SNetwork y sistema de diseño',
    tag: 'Sofka Technologies',
    heroImage: '/images/summa-snetwork/inicio.webp',
    thumb: '/images/summa-snetwork/tabla.webp',
    subtitle:
      'Rediseñé SNetwork, la plataforma interna de Summa, de más de 10 módulos. Quité cientos de pasos innecesarios de sus flujos y armé el sistema de diseño.',
    meta: [
      { label: 'Rol', value: 'UX/UI Designer' },
      { label: 'Alcance', value: '+10 módulos rediseñados, con sistema de diseño y librería de componentes' },
      { label: 'Empresa', value: 'Sofka Technologies' },
      { label: 'Herramientas', value: 'Figma · Figma Make · VO · Cursor · Azure' },
    ],
    problem: {
      title: 'El problema de negocio',
      body: [
        'SNetwork, la plataforma interna de Summa, necesitaba una migración compleja. Migrarla tal cual habría sido un error: acumulaba años de deuda de diseño, con más de 10 módulos distintos entre sí en lo visual, flujos llenos de pasos innecesarios y una experiencia que frenaba el trabajo diario.',
        'La migración era el momento de unificar el lenguaje visual y quitar la fricción acumulada en los flujos más críticos.',
      ],
    },
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
        title: 'Navegación lateral',
        body: [
          'Reemplacé los menús sueltos por módulo con una sola barra de navegación lateral para toda la plataforma. Los usuarios se desorientan menos y ya no tienen que recordar en qué parte están.',
        ],
        image: '/images/summa-snetwork/seleccion-facturas.webp',
      },
      {
        kind: 'imageText',
        reverse: true,
        title: 'Rediseñar en lugar de migrar',
        body: [
          'El objetivo inicial era replicar el sistema existente lo más fiel posible para no meter errores. Después de la evaluación heurística encontré flujos donde acciones repetitivas en varios pasos se podían reducir a uno, y propuse rediseñar los más críticos en lugar de migrarlos tal cual. Presenté la propuesta al equipo de producto y a los stakeholders, la aceptaron y la plataforma quedó más ágil para el trabajo diario. También armé el sistema de diseño, la librería de componentes y prototipos HTML que sirven de especificación.',
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
      title: 'Navegación lateral',
      body: [
        'Reemplacé los menús sueltos por módulo con una sola barra de navegación lateral para toda la plataforma. Los usuarios se desorientan menos y ya no tienen que recordar en qué parte están.',
      ],
    },
    insight: {
      title: 'Rediseñar en lugar de migrar',
      body: [
        'El objetivo inicial era replicar el sistema existente lo más fiel posible para no meter errores. Después de la evaluación heurística encontré flujos donde acciones repetitivas en varios pasos se podían reducir a uno, y propuse rediseñar los más críticos en lugar de migrarlos tal cual. Presenté la propuesta al equipo de producto y a los stakeholders, la aceptaron y la plataforma quedó más ágil para el trabajo diario. También armé el sistema de diseño, la librería de componentes y prototipos HTML que sirven de especificación.',
      ],
    },
    result: {
      title: 'Estado actual',
      body: [
        'Hasta ahora hicimos una evaluación heurística, hablamos con stakeholders y usuarios y acordamos las mejoras principales de experiencia e interfaz.',
      ],
    },
    status: 'Este proyecto sigue en desarrollo.',
    more: ['logyca', 'metro-de-medellin', 'trib'],
  },

  {
    slug: 'game-view',
    short: 'Dos productos 3D diseñados desde cero. El prototipo fue clave para conseguir el funding.',
    title: 'Game View: Dos productos para espacios 3D interactivos',
    cardTitle: 'Game View: Dos productos para espacios 3D interactivos',
    tag: 'Sofka Technologies',
    heroImage: '/images/game-view/designer-3.webp',
    thumb: '/images/game-view/evento-1.webp',
    subtitle:
      'Diseñé dos productos desde cero: una herramienta para crear espacios 3D interactivos y su app para verlos en TV y móvil. El prototipo fue clave para conseguir el funding.',
    meta: [
      { label: 'Rol', value: 'UX/UI Designer' },
      { label: 'Alcance', value: 'Dos productos desde cero: creador de espacios 3D y app para TV y móvil' },
      { label: 'Herramientas', value: 'Figma · Miro · Stitch · Lovable' },
      { label: 'Impacto', value: 'Funding conseguido' },
    ],
    problem: {
      title: 'El problema de negocio',
      body: [
        'El cliente llegó con una idea: una plataforma para crear espacios 3D interactivos y una herramienta para verlos en televisores. Dos plataformas, dos audiencias distintas.',
        'Había que diseñar dos productos que funcionaran juntos, sin referencias: el cliente no tenía wireframes, MVP ni referente visual. Mi trabajo fue convertir la idea en un prototipo que se pudiera presentar a inversores.',
      ],
    },
    carousel: [
      '/images/game-view/ps.webp',
      '/images/game-view/evento-1.webp',
      '/images/game-view/ps-1.webp',
    ],
    steps: [
      'Customer Journey',
      'Decisiones de diseño',
      'Dos productos',
      'Prototipo para inversores',
    ],
    blocks: [
      {
        kind: 'gallery',
        title: 'Entendimiento y contexto',
        intro:
          'Antes de diseñar, mapeé el recorrido del productor de contenido, sus historias de usuario y el flujo completo de creación. Fue la base de las decisiones de diseño.',
        cols: 1,
        items: [
          {
            image: '/images/game-view/understanding-1.webp',
            caption: 'Customer Journey del productor de contenido',
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
        title: 'Dos productos',
        body: [
          'Content Creator es la herramienta para crear los espacios 3D interactivos. Consumer App es la app donde los usuarios los exploran en TV y móvil. Los dos comparten lenguaje visual.',
        ],
        image: '/images/game-view/ps-1.webp',
      },
      {
        kind: 'gallery',
        title: 'Content Creator: el editor de espacios 3D',
        intro:
          'Donde los productores crean, editan y publican espacios 3D interactivos.',
        cols: 2,
        items: [
          { image: '/images/game-view/designer-1.webp', caption: 'Selección de escena' },
          { image: '/images/game-view/designer-2.webp', caption: 'Edición de objetos en escena' },
        ],
      },
      {
        kind: 'gallery',
        title: 'Consumer App: TV y móvil',
        intro: 'Donde los usuarios exploran los espacios y eventos.',
        cols: 2,
        items: [
          { image: '/images/game-view/ps.webp', caption: 'Explorar eventos' },
          { image: '/images/game-view/evento-1.webp', caption: 'Detalle de evento' },
        ],
      },
      {
        kind: 'text',
        title: 'Diseñar para inversores y usuarios',
        body: [
          'El prototipo tenía que resolver el problema de producto, demostrar que funcionaba y convencer a los inversores. Se consiguió el funding.',
        ],
      },
    ],
    solution: {
      title: 'Dos productos',
      body: [
        'Content Creator es la herramienta para crear los espacios 3D interactivos. Consumer App es la app donde los usuarios los exploran en TV y móvil. Los dos comparten lenguaje visual.',
      ],
    },
    insight: {
      title: 'Diseñar para inversores y usuarios',
      body: [
        'El prototipo tenía que resolver el problema de producto, demostrar que funcionaba y convencer a los inversores. Se consiguió el funding.',
      ],
    },
    result: {
      title: 'El resultado',
      body: [
        'Dos productos que funcionan juntos, un prototipo de alta fidelidad y el funding conseguido.',
      ],
    },
    metrics: [
      { label: 'Dos productos nuevos diseñados desde cero para un cliente', value: '0 → 1' },
      { label: 'Feedback positivo de cliente y equipo de negocio', value: 'Feedback positivo' },
      { label: 'Producto de creación y app de consumo diseñados', value: '2 productos' },
      { label: 'El prototipo fue clave para conseguir el funding', value: 'Funding' },
    ],
    more: ['summa-snetwork', 'logyca', 'metro-de-medellin'],
  },

  {
    slug: 'trib',
    short: 'Proyecto de estudio: research, sistema de diseño y UI de alta fidelidad para una app mobile.',
    title: 'Trib',
    cardTitle: 'Trib',
    tag: 'Proyecto de estudio',
    heroImage: '/images/trib/misiones-pres.webp',
    thumb: '/images/trib/user-persona.webp',
    subtitle:
      'Proyecto de estudio: diseñé una app mobile con research, personas, arquitectura de información, flujos, wireframes y un sistema de diseño.',
    meta: [
      { label: 'Rol', value: 'UX/UI Designer' },
      { label: 'Alcance', value: 'App mobile: research, sistema de diseño y UI de alta fidelidad' },
      { label: 'Tipo', value: 'Proyecto de estudio' },
      { label: 'Herramientas', value: 'Figma' },
    ],
    problem: {
      title: 'El problema',
      body: [
        'Trib es un proyecto de estudio para recorrer el proceso de diseño de producto, desde el research y las personas hasta un sistema de diseño documentado y pantallas de alta fidelidad.',
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
          'El sistema de diseño de la app, documentado.',
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
        'El sistema de diseño incluye tipografía (Poppins), paleta de color, grid, spacing, iconografía, botones y componentes reutilizables.',
      ],
    },
    result: {
      title: 'El resultado',
      body: [
        'Un case study que documenta el proceso completo, desde la investigación hasta una app mobile con su propio sistema de diseño.',
      ],
    },
    more: ['metro-de-medellin', 'logyca', 'game-view'],
  },
];

export const getCaseStudy = (slug: string): CaseStudy | undefined =>
  CASE_STUDIES.find((c) => c.slug === slug);
