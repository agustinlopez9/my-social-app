export interface Post {
  id: number;
  createdAt: string;
  name: string;
  avatar: string;
  title: string;
  content: string;
}

export interface Comment {
  id: number;
  createdAt: string;
  name: string;
  avatar: string;
  content: string;
  parentId: number;
}

export const posts: Post[] = [
  {
    id: 1,
    createdAt: "2025-11-26T10:30:00Z",
    name: "María García",
    avatar: "https://i.pravatar.cc/150?img=1",
    title: "Mi primera experiencia con React",
    content: "Acabo de terminar mi primer proyecto en React y estoy muy emocionada. El desarrollo de componentes es realmente intuitivo una vez que entiendes el concepto de props y state.",
  },
  {
    id: 2,
    createdAt: "2025-11-26T09:15:00Z",
    name: "Carlos Rodríguez",
    avatar: "https://i.pravatar.cc/150?img=2",
    title: "Consejos para desarrolladores junior",
    content: "Después de 5 años en la industria, estos son mis consejos: practica todos los días, lee documentación oficial, y no tengas miedo de hacer preguntas. La comunidad está aquí para ayudar.",
  },
  {
    id: 3,
    createdAt: "2025-11-26T08:45:00Z",
    name: "Ana Martínez",
    avatar: "https://i.pravatar.cc/150?img=3",
    title: "TypeScript vs JavaScript",
    content: "He estado usando TypeScript por 6 meses y no puedo imaginar volver a JavaScript puro. El tipado estático me ha salvado de innumerables bugs en producción.",
  },
  {
    id: 4,
    createdAt: "2025-11-25T22:30:00Z",
    name: "Luis Hernández",
    avatar: "https://i.pravatar.cc/150?img=4",
    title: "Tailwind CSS cambió mi forma de trabajar",
    content: "Solía escribir CSS personalizado para todo, pero Tailwind ha acelerado mi flujo de trabajo tremendamente. Las clases utility-first son un game changer.",
  },
  {
    id: 5,
    createdAt: "2025-11-25T20:00:00Z",
    name: "Sofía López",
    avatar: "https://i.pravatar.cc/150?img=5",
    title: "Optimización de rendimiento en aplicaciones web",
    content: "Les comparto algunas técnicas que uso: lazy loading de imágenes, code splitting, memorización de componentes, y debouncing en inputs de búsqueda. Cada milisegundo cuenta.",
  },
];

export const comments: Comment[] = [
  {
    id: 1,
    createdAt: "2025-11-29T19:25:00Z",
    name: "Pedro Sánchez",
    avatar: "https://i.pravatar.cc/150?img=2",
    content: "¡Felicitaciones! React es increíble una vez que le agarras el ritmo. ¿Ya probaste hooks?",
    parentId: 1,
  },
  {
    id: 2,
    createdAt: "2025-11-26T11:00:00Z",
    name: "Laura Torres",
    avatar: "https://i.pravatar.cc/150?img=7",
    content: "Totalmente de acuerdo. Yo también empecé hace poco y los componentes funcionales con hooks son lo mejor.",
    parentId: 1,
  },
  {
    id: 3,
    createdAt: "2025-11-26T09:30:00Z",
    name: "Diego Fernández",
    avatar: "https://i.pravatar.cc/150?img=8",
    content: "Excelentes consejos. Agregaría: contribuir a proyectos open source es una gran forma de aprender.",
    parentId: 2,
  },
  {
    id: 4,
    createdAt: "2025-11-26T09:45:00Z",
    name: "Carmen Ruiz",
    avatar: "https://i.pravatar.cc/150?img=9",
    content: "¿Qué recursos recomendarías para alguien que recién empieza?",
    parentId: 2,
  },
  {
    id: 5,
    createdAt: "2025-11-26T10:00:00Z",
    name: "Carlos Rodríguez",
    avatar: "https://i.pravatar.cc/150?img=2",
    content: "MDN Web Docs, FreeCodeCamp, y la documentación oficial de React son excelentes puntos de partida.",
    parentId: 2,
  },
  {
    id: 6,
    createdAt: "2025-11-26T09:00:00Z",
    name: "Roberto Díaz",
    avatar: "https://i.pravatar.cc/150?img=10",
    content: "TypeScript tiene una curva de aprendizaje al principio, pero vale totalmente la pena.",
    parentId: 3,
  },
  {
    id: 7,
    createdAt: "2025-11-26T09:15:00Z",
    name: "Isabel Morales",
    avatar: "https://i.pravatar.cc/150?img=11",
    content: "¿Cuál fue el mayor desafío al empezar con TypeScript?",
    parentId: 3,
  },
  {
    id: 8,
    createdAt: "2025-11-25T23:00:00Z",
    name: "Miguel Ángel Castro",
    avatar: "https://i.pravatar.cc/150?img=12",
    content: "Estoy 100% de acuerdo. Tailwind + componentes de React es la combinación perfecta.",
    parentId: 4,
  },
  {
    id: 9,
    createdAt: "2025-11-25T23:30:00Z",
    name: "Valentina Ortiz",
    avatar: "https://i.pravatar.cc/150?img=13",
    content: "Al principio los nombres de las clases me parecían confusos, pero ahora no puedo vivir sin ellas.",
    parentId: 4,
  },
  {
    id: 10,
    createdAt: "2025-11-25T20:30:00Z",
    name: "Andrés Vargas",
    avatar: "https://i.pravatar.cc/150?img=14",
    content: "Excelentes tips. También recomiendo usar React.memo para componentes que no necesitan re-renderizarse frecuentemente.",
    parentId: 5,
  },
  {
    id: 11,
    createdAt: "2025-11-25T21:00:00Z",
    name: "Gabriela Romero",
    avatar: "https://i.pravatar.cc/150?img=15",
    content: "¿Usas alguna herramienta específica para medir el rendimiento?",
    parentId: 5,
  },
  {
    id: 12,
    createdAt: "2025-11-25T21:15:00Z",
    name: "Sofía López",
    avatar: "https://i.pravatar.cc/150?img=5",
    content: "Sí, uso React DevTools Profiler y Lighthouse de Chrome. Son herramientas increíbles.",
    parentId: 5,
  },
];
