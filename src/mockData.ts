export interface Post {
  id: string;
  createdAt: string;
  name: string;
  avatar: string;
  title: string;
  content: string;
}

export interface Comment {
  id: string;
  createdAt: string;
  name: string;
  avatar: string;
  content: string;
  parentId: string | null;
}

export const posts: Post[] = [
  {
    id: "1",
    createdAt: "2025-11-26T10:30:00Z",
    name: "María García",
    avatar: "https://i.pravatar.cc/150?img=1",
    title: "Mi primera experiencia con React",
    content: "Acabo de terminar mi primer proyecto en React y estoy muy emocionada. El desarrollo de componentes es realmente intuitivo una vez que entiendes el concepto de props y state.",
  },
  {
    id: "2",
    createdAt: "2025-11-26T09:15:00Z",
    name: "Carlos Rodríguez",
    avatar: "https://i.pravatar.cc/150?img=2",
    title: "Consejos para desarrolladores junior",
    content: "Después de 5 años en la industria, estos son mis consejos: practica todos los días, lee documentación oficial, y no tengas miedo de hacer preguntas. La comunidad está aquí para ayudar.",
  },
  {
    id: "3",
    createdAt: "2025-11-26T08:45:00Z",
    name: "Ana Martínez",
    avatar: "https://i.pravatar.cc/150?img=3",
    title: "TypeScript vs JavaScript",
    content: "He estado usando TypeScript por 6 meses y no puedo imaginar volver a JavaScript puro. El tipado estático me ha salvado de innumerables bugs en producción.",
  },
  {
    id: "4",
    createdAt: "2025-11-25T22:30:00Z",
    name: "Luis Hernández",
    avatar: "https://i.pravatar.cc/150?img=4",
    title: "Tailwind CSS cambió mi forma de trabajar",
    content: "Solía escribir CSS personalizado para todo, pero Tailwind ha acelerado mi flujo de trabajo tremendamente. Las clases utility-first son un game changer.",
  },
  {
    id: "5",
    createdAt: "2025-11-25T20:00:00Z",
    name: "Sofía López",
    avatar: "https://i.pravatar.cc/150?img=5",
    title: "Optimización de rendimiento en aplicaciones web",
    content: "Les comparto algunas técnicas que uso: lazy loading de imágenes, code splitting, memorización de componentes, y debouncing en inputs de búsqueda. Cada milisegundo cuenta.",
  },
];

export const comments: Comment[] = [
  {
    id: "1",
    createdAt: "2025-11-29T19:25:00Z",
    name: "Pedro Sánchez",
    avatar: "https://i.pravatar.cc/150?img=2",
    content: "¡Felicitaciones! React es increíble una vez que le agarras el ritmo. ¿Ya probaste hooks?",
    parentId: null,
  },
  {
    id: "2",
    createdAt: "2025-11-26T11:00:00Z",
    name: "Laura Torres",
    avatar: "https://i.pravatar.cc/150?img=7",
    content: "Sí! Los hooks son geniales. useState y useEffect son mis favoritos.",
    parentId: "1",
  },
  {
    id: "3",
    createdAt: "2025-11-26T11:15:00Z",
    name: "Diego Fernández",
    avatar: "https://i.pravatar.cc/150?img=8",
    content: "No olvides useContext para el manejo de estado global. Es muy útil.",
    parentId: "2",
  },
  {
    id: "4",
    createdAt: "2025-11-26T11:30:00Z",
    name: "Carmen Ruiz",
    avatar: "https://i.pravatar.cc/150?img=9",
    content: "¿Y qué opinas de useReducer? Me parece más complejo pero más poderoso.",
    parentId: "2",
  },
  {
    id: "5",
    createdAt: "2025-11-26T11:45:00Z",
    name: "Laura Torres",
    avatar: "https://i.pravatar.cc/150?img=7",
    content: "useReducer es excelente para estados complejos. Lo uso cuando tengo múltiples sub-valores relacionados.",
    parentId: "4",
  },
  {
    id: "6",
    createdAt: "2025-11-26T12:00:00Z",
    name: "Roberto Díaz",
    avatar: "https://i.pravatar.cc/150?img=10",
    content: "Excelente post! Me gustaría ver más contenido sobre patrones de diseño en React.",
    parentId: null,
  },
  {
    id: "7",
    createdAt: "2025-11-26T12:15:00Z",
    name: "Isabel Morales",
    avatar: "https://i.pravatar.cc/150?img=11",
    content: "Sí! Especialmente sobre compound components y render props.",
    parentId: "6",
  },
  {
    id: "8",
    createdAt: "2025-11-26T12:30:00Z",
    name: "Miguel Ángel Castro",
    avatar: "https://i.pravatar.cc/150?img=12",
    content: "Los compound components son perfectos para bibliotecas de UI. Headless UI usa ese patrón.",
    parentId: "7",
  },
  {
    id: "9",
    createdAt: "2025-11-26T12:45:00Z",
    name: "Valentina Ortiz",
    avatar: "https://i.pravatar.cc/150?img=13",
    content: "También el patrón de Higher Order Components (HOC) aunque está siendo reemplazado por hooks.",
    parentId: "6",
  },
  {
    id: "10",
    createdAt: "2025-11-26T13:00:00Z",
    name: "Andrés Vargas",
    avatar: "https://i.pravatar.cc/150?img=14",
    content: "¿Alguien ha probado React Server Components? Tengo curiosidad sobre su performance.",
    parentId: null,
  },
  {
    id: "11",
    createdAt: "2025-11-26T13:15:00Z",
    name: "Gabriela Romero",
    avatar: "https://i.pravatar.cc/150?img=15",
    content: "Sí, los probé con Next.js 13. La mejora en tiempo de carga inicial es impresionante.",
    parentId: "10",
  },
  {
    id: "12",
    createdAt: "2025-11-26T13:30:00Z",
    name: "Sofía López",
    avatar: "https://i.pravatar.cc/150?img=5",
    content: "¿Tuviste algún problema con la caché? He leído que puede ser complicado.",
    parentId: "11",
  },
  // Level 4 reply to comment 12
  {
    id: "13",
    createdAt: "2025-11-26T13:45:00Z",
    name: "Gabriela Romero",
    avatar: "https://i.pravatar.cc/150?img=15",
    content: "Sí, al principio sí. La revalidación automática es confusa, pero una vez entiendes las estrategias de fetch es mucho más simple.",
    parentId: "12",
  },
  // Level 5 reply to comment 13 - deepest level
  {
    id: "14",
    createdAt: "2025-11-26T14:00:00Z",
    name: "Carlos Rodríguez",
    avatar: "https://i.pravatar.cc/150?img=2",
    content: "¿Podrías compartir un ejemplo de cómo configuraste la revalidación? Estoy luchando con eso ahora.",
    parentId: "13",
  },
  // Another level 5 reply to comment 13
  {
    id: "15",
    createdAt: "2025-11-26T14:15:00Z",
    name: "Ana Martínez",
    avatar: "https://i.pravatar.cc/150?img=3",
    content: "Yo uso 'revalidate: 60' para la mayoría de mis páginas. Funciona perfecto para contenido que no cambia muy seguido.",
    parentId: "13",
  },
  // Level 6 reply to comment 14 (even deeper!)
  {
    id: "16",
    createdAt: "2025-11-26T14:30:00Z",
    name: "Gabriela Romero",
    avatar: "https://i.pravatar.cc/150?img=15",
    content: "Claro! Básicamente usas fetch con { next: { revalidate: 3600 } } para cachear por 1 hora. También puedes usar tags para invalidación manual.",
    parentId: "14",
  },
  // Level 7 reply to comment 16 (ultra deep!)
  {
    id: "17",
    createdAt: "2025-11-26T14:45:00Z",
    name: "Carlos Rodríguez",
    avatar: "https://i.pravatar.cc/150?img=2",
    content: "¡Perfecto! Justo lo que necesitaba. ¿Y para invalidar manualmente usas revalidatePath() o revalidateTag()?",
    parentId: "16",
  },
  // Level 8 reply to comment 17 (max depth!)
  {
    id: "18",
    createdAt: "2025-11-26T15:00:00Z",
    name: "Gabriela Romero",
    avatar: "https://i.pravatar.cc/150?img=15",
    content: "Uso revalidateTag() porque es más granular. Puedo invalidar solo lo que necesito sin afectar todo el path.",
    parentId: "17",
  },
  // New thread - reply to comment 8
  {
    id: "19",
    createdAt: "2025-11-26T15:15:00Z",
    name: "Pedro Sánchez",
    avatar: "https://i.pravatar.cc/150?img=2",
    content: "Totalmente de acuerdo. He estado usando Radix UI últimamente y la composición es brillante.",
    parentId: "8",
  },
  // Reply to comment 19
  {
    id: "20",
    createdAt: "2025-11-26T15:30:00Z",
    name: "Miguel Ángel Castro",
    avatar: "https://i.pravatar.cc/150?img=12",
    content: "Radix es increíble! El manejo de accesibilidad out-of-the-box es lo que más aprecio.",
    parentId: "19",
  },
  // Reply to comment 20
  {
    id: "21",
    createdAt: "2025-11-26T15:45:00Z",
    name: "Isabel Morales",
    avatar: "https://i.pravatar.cc/150?img=11",
    content: "¿Cómo compararías Radix con Chakra UI? Estoy evaluando opciones para mi próximo proyecto.",
    parentId: "20",
  },
  // Reply to comment 21
  {
    id: "22",
    createdAt: "2025-11-26T16:00:00Z",
    name: "Pedro Sánchez",
    avatar: "https://i.pravatar.cc/150?img=2",
    content: "Radix es headless, así que tienes control total del estilo. Chakra viene pre-estilizado. Depende de cuánto control quieras.",
    parentId: "21",
  },
];
