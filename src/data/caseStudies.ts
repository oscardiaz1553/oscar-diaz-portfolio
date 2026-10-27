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
    tag: 'Diseño y desarrollo web',
    short: 'Rediseño y migración en vivo de un diario con más de 47.000 notas.',
    isNew: true,
    heroImage: '/images/diario-deportes/hero.webp',
    thumb: '/images/diario-deportes/hero.webp',
    subtitle:
      'Auditoré, rediseñé y reconstruí en WordPress Diario Deportes, el diario deportivo del Caribe colombiano. Migré en vivo más de 47.000 notas sin detener a la redacción.',
    meta: [
      { label: 'Rol', value: 'Diseño UX/UI y desarrollo web' },
      { label: 'Cliente', value: 'Diario Deportes, Barranquilla' },
      { label: 'Plataforma', value: 'WordPress' },
      { label: 'Sitio', value: 'diariodeportes.com.co' },
    ],
    problem: {
      title: 'El problema',
      body: [
        'Diario Deportes tiene más de 20 años y su sitio había crecido sin orden. La auditoría mostró seis problemas: un menú de diez secciones al mismo nivel, contenido duplicado en la portada, siete o más banners sueltos y sin etiqueta, widgets de terceros que rompían la imagen del diario, ninguna jerarquía editorial y una accesibilidad floja.',
        'Medido el 19 de octubre, la portada pesaba unos 32 MB. En celular, el rendimiento en PageSpeed era de 29 sobre 100, y el contenido principal tardaba 38 segundos en aparecer con una red lenta simulada.',
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
          'Poner orden sin perder la voz del diario: una nota principal que manda, la publicidad en su lugar y siempre etiquetada, los datos del fútbol con diseño propio y una redacción que publica sin pelear con la página. Todo editable por el equipo del diario, sin depender de mí.',
        ],
      },
      {
        kind: 'gallery',
        title: 'Antes y ahora, en el celular',
        intro: 'El sitio se pensó primero para el celular, sin desplazamiento lateral y con áreas táctiles grandes.',
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
        title: 'Una estructura que se lee',
        body: [
          'Reduje el menú a pocas secciones principales más un «Más», sin cambiar ninguna dirección web, para no afectar el posicionamiento en Google. La portada ahora tiene jerarquía: una nota principal, secciones con su nota destacada y notas secundarias con foto.',
          'Cada sección tiene un diseño ajustado a lo suyo: Fútbol Colombiano, Internacional, Béisbol, Boxeo, Más Deportes, Columnistas con foto y En video, conectado al canal de YouTube. Cada categoría, como el Junior o el béisbol, tiene además su propia ficha.',
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
        title: 'La publicidad, en su lugar',
        body: [
          'Espacios fijos y predecibles, cada uno con su etiqueta «Publicidad», y un sistema que reparte los anuncios para que nunca haya tres a la vista al mismo tiempo. Las nueve piezas de los anunciantes del diario quedaron en su lugar, y hay un bloque «Anuncie en Diario Deportes» con sus logos.',
        ],
        image: '/images/diario-deportes/futbol-colombiano.webp',
      },
      {
        kind: 'columns',
        title: 'Herramientas para la redacción',
        intro: 'Un sitio de noticias se juega en la redacción, así que construí herramientas para quienes lo usan todos los días.',
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
            description: 'El número de edición y «Un día como hoy» cambian solos a medianoche, sin que nadie toque nada.',
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
        title: 'La migración: cambiar el motor con el avión en vuelo',
        body: [
          'Reconstruí el sitio en WordPress. El reto no era el diseño, era pasar más de 47.000 notas a un sitio nuevo sin que la redacción dejara de publicar.',
          'Antes de tocar el sitio real, monté una copia completa en un subdominio cerrado y corrí todo el procedimiento de principio a fin. La noche del lanzamiento, entre el 20 y el 21 de octubre, arranqué a las 8 p. m. con el sitio detrás de una página de mantenimiento que le dice a Google «vuelvo pronto». La redacción siguió publicando durante toda la noche, y el sitio nuevo salió a las 3:10 a. m.: casi tres horas antes de lo que esperaba el cliente.',
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
        'Un sitio con jerarquía editorial, publicidad ordenada, datos de fútbol en vivo con diseño propio y herramientas para la redacción. Salió en una noche y no se perdió ni una nota.',
      ],
    },
    result: {
      title: 'Lo que cambió',
      body: [
        'El peso de la portada en celular pasó de 32,5 a 4,3 MB, el rendimiento en celular de 29 a 50 sobre 100 en PageSpeed, y el tiempo hasta ver el contenido principal de 38,3 a 12,5 segundos. Se migraron 47.616 notas sin perder ninguna.',
      ],
    },
    more: ['game-view', 'summa-snetwork', 'logyca'],
  },
  {
    slug: 'sura-mexico',
    short: 'Plataforma enterprise que digitalizó un proceso 100 % manual.',
    title: 'Sura México: Cotizadores',
    cardTitle: 'Sura México: Cotizadores',
    tag: 'Sofka Technologies',
    heroImage: '/images/sura-mexico/calendario-abierto.webp',
    thumb: '/images/sura-mexico/calendario-abierto.webp',
    subtitle:
      'Diseñé desde cero una plataforma enterprise que digitalizó un proceso 100% manual y conecta 5 tipos de usuario en un solo flujo.',
    meta: [
      { label: 'Rol', value: 'UX/UI Designer' },
      { label: 'Empresa', value: 'Sofka Technologies' },
      { label: 'Herramientas', value: 'Figma' },
      { label: 'Usuarios', value: '5 tipos de usuario' },
    ],
    problem: {
      title: 'El problema de negocio',
      body: [
        'Sura México cotizaba 100% a mano, con varios tipos de usuario y sin un flujo común. El reto fue diseñar desde cero una plataforma enterprise que pasara todo el proceso a digital.',
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
        'Una plataforma enterprise que conecta a los 5 tipos de usuario en un solo flujo digital. Se acabó el proceso manual y la cotización quedó centralizada de punta a punta.',
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
    short: 'Usuarios, permisos y movimientos del sistema de transporte público, en producción.',
    title: 'Metro de Medellín: Rediseño de plataforma interna',
    cardTitle: 'Metro de Medellín: Rediseño de plataforma interna',
    tag: 'Sofka Technologies',
    heroImage: '/images/metro-de-medellin/sitva-parametrizacion.webp',
    thumb: '/images/metro-de-medellin/intermunicipales-perfiles.webp',
    subtitle:
      'Rediseño de la plataforma de gestión de usuarios, permisos y movimientos del sistema de transporte público más importante de Colombia. Pasó de ser un sistema confuso a una herramienta centralizada que ya está en producción.',
    meta: [
      { label: 'Rol', value: 'UX/UI Designer' },
      { label: 'Empresa', value: 'Sofka Technologies' },
      { label: 'Herramientas', value: 'Figma · Miro' },
      { label: 'Usuarios', value: 'Administradores internos' },
    ],
    problem: {
      title: 'El problema de negocio',
      body: [
        'El Metro de Medellín opera el sistema de transporte público más crítico de la ciudad. Su plataforma interna hacía tres cosas: administrar usuarios internos, asignar permisos por rol y registrar los movimientos de los usuarios finales del sistema.',
        'La herramienta era confusa e inconsistente, y sus flujos causaban errores operativos. Los administradores no podían manejar los permisos en un solo lugar, así que se apoyaban en procesos paralelos y manuales para compensar. Eso frenaba la operación y hacía más difícil decidir en tiempo real.',
      ],
    },
    quote:
      'En infraestructura pública crítica, un sistema confuso es un riesgo operativo, no una simple molestia. Un error de permisos o la falta de trazabilidad afecta directamente la operación del transporte.',
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
        title: 'La solución: la plataforma rediseñada',
        body: [
          'El registro de movimientos en tiempo real fue uno de los cambios más valorados. Pasó de ser una pantalla difícil de leer a un registro filtrable, con indicadores de estado que dejan ver las anomalías de un vistazo y decidir al instante.',
        ],
        image: '/images/metro-de-medellin/sit-valores.webp',
      },
      {
        kind: 'imageText',
        reverse: true,
        title: 'El problema de fondo era la arquitectura.',
        body: [
          'El análisis heurístico mostró que manejar los permisos de un solo usuario obligaba a pasar por varias pantallas, sin un punto de control único. La decisión de diseño más importante fue juntar toda la gestión de permisos en una sola vista por perfil: un panel donde el administrador ve de un vistazo qué accesos tiene el usuario y cuáles están activos, y puede cambiarlos sin salir de la pantalla. Parece una decisión simple, pero eliminó la mayor fuente de errores operativos del sistema.',
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
      title: 'La solución: la plataforma rediseñada',
      body: [
        'El registro de movimientos en tiempo real fue uno de los cambios más valorados. Pasó de ser una pantalla difícil de leer a un registro filtrable, con indicadores de estado que dejan ver las anomalías de un vistazo y decidir al instante.',
      ],
    },
    insight: {
      title: 'El problema de fondo era la arquitectura.',
      body: [
        'El análisis heurístico mostró que manejar los permisos de un solo usuario obligaba a pasar por varias pantallas, sin un punto de control único. La decisión de diseño más importante fue juntar toda la gestión de permisos en una sola vista por perfil: un panel donde el administrador ve de un vistazo qué accesos tiene el usuario y cuáles están activos, y puede cambiarlos sin salir de la pantalla. Parece una decisión simple, pero eliminó la mayor fuente de errores operativos del sistema.',
      ],
    },
    result: {
      title: 'El resultado',
      body: [
        'La plataforma rediseñada ya está en producción. Los administradores pasaron de un sistema fragmentado y confuso a una herramienta centralizada para gestionar usuarios, permisos y trazabilidad de movimientos desde un solo lugar. Hay menos errores operativos y las decisiones se toman más rápido.',
      ],
    },
    more: ['trib', 'summa-snetwork', 'sura-mexico'],
  },

  {
    slug: 'logyca',
    short: 'Del Excel a un sistema visual para dos perfiles de usuario.',
    title: 'Logyca: Gestión de inventario en tiempo real',
    cardTitle: 'Logyca: Gestión de inventario en tiempo real',
    tag: 'Sofka Technologies',
    heroImage: '/images/logyca/ingesta.webp',
    thumb: '/images/logyca/ingesta-1.webp',
    subtitle:
      'Diseñé el corazón de una plataforma que reemplazó los procesos manuales en Excel por un sistema visual para dos perfiles de usuario con necesidades muy distintas.',
    meta: [
      { label: 'Rol', value: 'UX/UI Designer' },
      { label: 'Empresa', value: 'Sofka Technologies' },
      { label: 'Herramientas', value: 'Figma · Miro' },
      { label: 'Usuarios', value: 'Internos y externos' },
    ],
    problem: {
      title: 'El problema del negocio',
      body: [
        'Logyca necesitaba una plataforma para gestionar inventarios en tiempo real. Los usuarios trabajaban con hojas de cálculo dispersas y sin una vista central, y eso hacía lentas las decisiones y propensos a fallos los procesos manuales.',
        'Había otro reto: la plataforma tenía que servir al mismo tiempo a dos tipos de usuario con necesidades muy distintas, los empleados internos de Logyca y los clientes externos, sin sacrificar la usabilidad de ninguno.',
      ],
    },
    quote:
      'El reto era digitalizar el inventario y, a la vez, hacer una sola plataforma que funcionara bien para dos audiencias con objetivos, contextos y niveles técnicos distintos.',
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
          'Los wireframes sirvieron para convertir las ideas iniciales en diseños que todos aprobaron. Con la baja fidelidad validamos las funciones básicas y comprobamos que el flujo fuera claro antes de invertir en la alta fidelidad.',
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
        title: 'La solución: dos experiencias, un sistema',
        body: [
          'La clave fue crear dos experiencias distintas dentro de un mismo sistema. El usuario interno ve toda la operación y tiene las herramientas de gestión completas. El cliente externo ve solo su información, clara y sin ruido. Las dos comparten los mismos componentes y el mismo lenguaje visual.',
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
        'La clave fue crear dos experiencias distintas dentro de un mismo sistema. El usuario interno ve toda la operación y tiene las herramientas de gestión completas. El cliente externo ve solo su información, clara y sin ruido. Las dos comparten los mismos componentes y el mismo lenguaje visual.',
      ],
    },
    insight: {
      title: 'Wireframes',
      body: [
        'Los wireframes sirvieron para convertir las ideas iniciales en diseños que todos aprobaron. Con la baja fidelidad validamos las funciones básicas y comprobamos que el flujo fuera claro antes de invertir en la alta fidelidad.',
      ],
    },
    result: {
      title: 'El resultado',
      body: [
        'La plataforma reemplazó los procesos manuales en hojas de cálculo por un sistema visual centralizado, con actualización en tiempo real. El diseño se aprobó y se entregó a desarrollo con un sistema de componentes documentado.',
      ],
    },
    metrics: [
      { label: 'experiencias diferenciadas dentro de un mismo sistema', value: '2 experiencias' },
      { label: 'Feedback positivo de usuarios internos y externos en validación', value: 'Feedback positivo' },
      { label: 'Cero dependencia de Excel, con el proceso completamente digitalizado', value: '0 excel' },
    ],
    more: ['metro-de-medellin', 'trib', 'sura-mexico'],
  },

  {
    slug: 'summa-snetwork',
    short: 'Rediseño de una plataforma de más de 10 módulos, con sistema de diseño.',
    title: 'SUMMA: SNetwork',
    cardTitle: 'SUMMA: SNetwork',
    tag: 'Sofka Technologies',
    heroImage: '/images/summa-snetwork/inicio.webp',
    thumb: '/images/summa-snetwork/tabla.webp',
    subtitle:
      'Rediseño completo de una plataforma de más de 10 módulos. Cientos de pasos innecesarios pasaron a una experiencia unificada, con flujos más simples y un sistema de diseño documentado.',
    meta: [
      { label: 'Rol', value: 'UX/UI Designer' },
      { label: 'Empresa', value: 'Sofka Technologies' },
      { label: 'Herramientas', value: 'Figma · Figma Make · VO · Cursor · Azure' },
      { label: 'Alcance', value: '+10 módulos rediseñados' },
    ],
    problem: {
      title: 'El problema de negocio',
      body: [
        'SNetwork, la plataforma interna de Summa, necesitaba una migración compleja. El equipo vio rápido que migrarla tal cual sería un error: acumulaba años de deuda de diseño, con más de 10 módulos distintos entre sí en lo visual, flujos llenos de pasos innecesarios y una experiencia que frenaba el trabajo diario de los usuarios.',
        'La oportunidad era clara. La migración era el momento de rediseñar la experiencia desde adentro, unificar el lenguaje visual y quitar la fricción acumulada en los flujos más críticos.',
      ],
    },
    quote:
      'En vez de preguntarnos "¿cómo migramos esto?", nos preguntamos "¿qué de esto merece seguir igual?". Esa pregunta cambió el enfoque de todo el proyecto.',
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
        title: 'La solución: la plataforma rediseñada',
        body: [
          'La navegación lateral fue uno de los cambios más importantes. En lugar de menús sueltos por módulo, toda la plataforma se recorre desde una sola barra consistente. Los usuarios se desorientan menos y ya no tienen que recordar en qué parte de la plataforma están.',
        ],
        image: '/images/summa-snetwork/seleccion-facturas.webp',
      },
      {
        kind: 'imageText',
        reverse: true,
        title: 'La decisión clave',
        body: [
          'No migrar, rediseñar. Propuse ir más allá de la migración fiel y rediseñar los flujos más críticos. El objetivo inicial era replicar el sistema existente lo más fiel posible para no meter errores. Pero después de la evaluación heurística encontré flujos donde las mismas acciones repetitivas, en varios pasos, se podían reducir a uno. Presenté la propuesta al equipo de producto y a los stakeholders, la aceptaron, y la plataforma quedó mucho más ágil para el trabajo diario.',
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
      title: 'La solución: la plataforma rediseñada',
      body: [
        'La navegación lateral fue uno de los cambios más importantes. En lugar de menús sueltos por módulo, toda la plataforma se recorre desde una sola barra consistente. Los usuarios se desorientan menos y ya no tienen que recordar en qué parte de la plataforma están.',
      ],
    },
    insight: {
      title: 'La decisión clave',
      body: [
        'No migrar, rediseñar. Propuse ir más allá de la migración fiel y rediseñar los flujos más críticos. El objetivo inicial era replicar el sistema existente lo más fiel posible para no meter errores. Pero después de la evaluación heurística encontré flujos donde las mismas acciones repetitivas, en varios pasos, se podían reducir a uno. Presenté la propuesta al equipo de producto y a los stakeholders, la aceptaron, y la plataforma quedó mucho más ágil para el trabajo diario.',
      ],
    },
    result: {
      title: 'Estado actual',
      body: [
        'Así encontramos el producto. Hicimos una evaluación heurística, hablamos con stakeholders y usuarios, y acordamos las grandes mejoras de experiencia e interfaz que encontramos.',
      ],
    },
    status: 'Este proyecto sigue en desarrollo.',
    more: ['logyca', 'metro-de-medellin', 'trib'],
  },

  {
    slug: 'game-view',
    short: 'Dos productos alrededor de una experiencia 3D interactiva.',
    title: 'Game View: Dos productos para espacios 3D interactivos',
    cardTitle: 'Game View: Dos productos para espacios 3D interactivos',
    tag: 'Sofka Technologies',
    heroImage: '/images/game-view/designer-3.webp',
    thumb: '/images/game-view/evento-1.webp',
    subtitle:
      'Diseñé el sistema completo de dos productos alrededor de una experiencia 3D interactiva: una herramienta para crear espacios 3D y su app de consumo para TV y móvil. El prototipo fue clave para conseguir el funding.',
    meta: [
      { label: 'Rol', value: 'UX/UI Designer' },
      { label: 'Empresa', value: 'Sofka Technologies' },
      { label: 'Herramientas', value: 'Figma · Miro · Stitch · Lovable' },
      { label: 'Impacto', value: 'Funding conseguido' },
    ],
    problem: {
      title: 'El problema de negocio',
      body: [
        'El cliente llegó con una idea y un objetivo: una plataforma para crear espacios 3D interactivos y una herramienta de distribución para verlos en televisores. Dos plataformas, dos audiencias muy distintas.',
        'El reto era doble: diseñar dos productos muy distintos que funcionaran juntos de forma coherente, y hacerlo sin referencias claras. El cliente no tenía wireframes, ni MVP, ni referente visual. Solo la idea. Mi trabajo fue convertirla en un prototipo lo bastante sólido para presentarlo a inversores.',
      ],
    },
    quote:
      'El cliente no tenía nada: ni wireframes, ni MVP, ni referente visual. Solo la idea. Mi trabajo fue convertir esa visión en un prototipo lo bastante sólido para presentarlo a inversores.',
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
          'Antes de diseñar una sola pantalla, mapeé el problema: el recorrido del productor de contenido, sus historias de usuario y el flujo completo de creación. Eso fue la base de todas las decisiones de diseño.',
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
        title: 'Dos productos, una misma visión',
        body: [
          'Content creator: la herramienta con la que se crean los espacios 3D interactivos. Consumer App: la app donde los usuarios exploran esos espacios en TV y móvil. Dos productos con el mismo lenguaje visual y la misma visión.',
        ],
        image: '/images/game-view/ps-1.webp',
      },
      {
        kind: 'gallery',
        title: 'Content Creator: el editor de espacios 3D',
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
        title: 'Consumer App: TV y móvil',
        intro: 'La app donde los usuarios exploran y consumen los espacios y eventos.',
        cols: 2,
        items: [
          { image: '/images/game-view/ps.webp', caption: 'Explorar eventos' },
          { image: '/images/game-view/evento-1.webp', caption: 'Detalle de evento' },
        ],
      },
      {
        kind: 'text',
        title: 'Diseñar para inversores y para usuarios',
        body: [
          'El prototipo tenía que resolver el problema de producto, demostrar que funcionaba y, además, convencer a los inversores. Con decisiones de UX bien fundamentadas, la visión quedó lo bastante sólida para lograrlo. El resultado habló por sí solo: funding conseguido.',
        ],
      },
    ],
    solution: {
      title: 'Dos productos, una misma visión',
      body: [
        'Content creator: la herramienta con la que se crean los espacios 3D interactivos. Consumer App: la app donde los usuarios exploran esos espacios en TV y móvil. Dos productos con el mismo lenguaje visual y la misma visión.',
      ],
    },
    insight: {
      title: 'Diseñar para inversores y para usuarios',
      body: [
        'El prototipo tenía que resolver el problema de producto, demostrar que funcionaba y, además, convencer a los inversores. Con decisiones de UX bien fundamentadas, la visión quedó lo bastante sólida para lograrlo. El resultado habló por sí solo: funding conseguido.',
      ],
    },
    result: {
      title: 'El resultado',
      body: [
        'Dos productos que funcionan juntos, un prototipo de alta fidelidad y el funding conseguido para llevar la visión a la realidad.',
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
    short: 'App mobile: research, sistema de diseño y UI de alta fidelidad.',
    title: 'Trib',
    cardTitle: 'Trib',
    tag: 'Case Study',
    heroImage: '/images/trib/misiones-pres.webp',
    thumb: '/images/trib/user-persona.webp',
    subtitle:
      'Case study UX de una app mobile: research, personas, arquitectura de información, flujos, wireframes y un sistema de diseño con tipografía, color, grid y componentes.',
    meta: [
      { label: 'Rol', value: 'UX/UI Designer' },
      { label: 'Tipo', value: 'Proyecto de estudio' },
      { label: 'Herramientas', value: 'Figma' },
      { label: 'Plataforma', value: 'Mobile app' },
    ],
    problem: {
      title: 'El problema',
      body: [
        'Trib nació como un proyecto de estudio para recorrer de punta a punta el proceso de diseño de producto, desde el research y las personas hasta un sistema de diseño documentado y pantallas de alta fidelidad.',
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
          'Un sistema de diseño documentado que mantiene consistente toda la experiencia.',
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
        'El sistema de diseño incluye tipografía (Poppins), paleta de color, grid, spacing, iconografía, botones y componentes reutilizables, para que toda la experiencia sea consistente.',
      ],
    },
    result: {
      title: 'El resultado',
      body: [
        'Un case study end-to-end que documenta todo el proceso de diseño, desde la investigación hasta una app mobile con su propio sistema de diseño.',
      ],
    },
    more: ['metro-de-medellin', 'logyca', 'game-view'],
  },
];

export const getCaseStudy = (slug: string): CaseStudy | undefined =>
  CASE_STUDIES.find((c) => c.slug === slug);
