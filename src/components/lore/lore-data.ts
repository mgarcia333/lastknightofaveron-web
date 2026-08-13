export const storyParagraphs = [
  "Averon no siempre estuvo en ruinas. Antes de la luna de sangre hubo una ciudad de piedra blanca, una corona, y un juramento que sus caballeros repetían al amanecer: proteger lo que dormía bajo la catedral. Nadie fuera de la Orden sabía qué era. Puede que ya ni siquiera quede nadie de la Orden que lo sepa.",
  "La luna cambió de color en una sola noche. No hay crónica que explique por qué, ni astrónomo de Averon que lo viera venir. Al amanecer siguiente la ciudad baja estaba sellada, la superficie cubierta de tumbas que nadie recordaba haber cavado, y algo se movía otra vez entre los pasillos de la catedral.",
  "El último caballero no es el último por ser el más fuerte. Es, simplemente, el único que quedó en pie cuando terminó la cuenta. Viste la armadura de la Orden porque nadie más la reclamó — y porque, dicen algunos, la armadura decide quién la lleva tanto como quien la lleva decide vestirla.",
  "Al final de todo espera una corona que nadie ha osado tocar. Quien llegue hasta allí tendrá que decidir si el hombre que la lleva puesta sigue siendo un rey, un padre, o solo el recuerdo de los dos.",
];

export const knightLore = [
  "No tiene nombre en ninguna crónica que haya sobrevivido a la caída. Se le conoce solo por el título que se ganó la noche que la ciudad se selló: el último caballero de Averon.",
  "Antes de la luna de sangre era, como mucho, un caballero más de la guardia — nadie destacado, nadie recordado. Lo único que lo distingue ahora es que sigue en pie cuando todos los demás dejaron de estarlo.",
  "Carga con una espada demasiado grande para el brazo que la sostiene, y con la certeza incómoda de que su siguiente combate podría ser contra alguien que una vez conoció.",
];

export interface LoreEntry {
  icon: string;
  name: string;
  desc: string;
  glow: string;
}

export const abilities: LoreEntry[] = [
  {
    icon: "/images/art/attack.png",
    name: "Espada",
    desc: "Golpe cuerpo a cuerpo. Encadena varios mandobles seguidos para abrir hueco entre la horda antes de que te rodee.",
    glow: "rgba(179,18,47,0.35)",
  },
  {
    icon: "/images/art/fireball.png",
    name: "Bola de fuego",
    desc: "Consume maná para golpear a distancia. El pozo no es infinito — quémalo con cabeza, no con pánico.",
    glow: "rgba(224,120,30,0.4)",
  },
  {
    icon: "/images/art/dash.png",
    name: "Esquiva",
    desc: "Un paso fuera del tiempo justo. Atraviesa el peligro un instante antes de que te alcance.",
    glow: "rgba(201,169,97,0.35)",
  },
  {
    icon: "/images/art/jump.png",
    name: "Salto doble",
    desc: "El segundo impulso no viene de las piernas. Nadie te lo va a explicar mejor que eso.",
    glow: "rgba(120,150,200,0.32)",
  },
];

export const bestiary: LoreEntry[] = [
  {
    icon: "/images/art/skeleton.png",
    name: "Esqueleto",
    desc: "Centinelas de la vieja guardia de Averon. La carne se pudrió hace siglos; el puesto asignado, no.",
    glow: "rgba(180,180,170,0.3)",
  },
  {
    icon: "/images/art/goblin.png",
    name: "Goblin",
    desc: "Carroñeros oportunistas que anidan en las grietas de la ciudad baja. Nunca vienen solos por mucho tiempo.",
    glow: "rgba(90,160,60,0.35)",
  },
  {
    icon: "/images/art/mushroom.png",
    name: "Brote",
    desc: "Germinó de esporas que trajo la luna de sangre. Nadie ha bajado lo bastante hondo para ver qué más está creciendo ahí.",
    glow: "rgba(70,190,90,0.35)",
  },
  {
    icon: "/images/art/flyingeye.png",
    name: "Ojo volador",
    desc: "Solo ojo, colmillo y ala. Vigila e informa — a algo que ni él mismo ha visto de cerca.",
    glow: "rgba(60,140,150,0.35)",
  },
  {
    icon: "/images/art/heavybandit.png",
    name: "Bandido pesado",
    desc: "Lo que queda de la guardia real, todavía jurando lealtad a un rey que ya no está en el trono.",
    glow: "rgba(70,100,160,0.32)",
  },
  {
    icon: "/images/art/lightbandit.png",
    name: "Bandido ligero",
    desc: "Saqueadores de las ruinas exteriores. Rápidos, temerarios, y casi siempre a solas por elección.",
    glow: "rgba(180,140,80,0.32)",
  },
  {
    icon: "/images/art/medievalenemy.png",
    name: "Espadachín errante",
    desc: "Quedó atrapado en Averon la noche que cayó la ciudad. Sigue defendiendo una calle que ya no lleva a ningún sitio.",
    glow: "rgba(179,18,47,0.3)",
  },
  {
    icon: "/images/art/wolf.png",
    name: "Lobo sombrío",
    desc: "Ronda la superficie junto a la Bruja. Nadie sabe si lo convocó ella o si simplemente decidió seguirla — ni si hay diferencia.",
    glow: "rgba(90,70,130,0.4)",
  },
];

export const bosses: LoreEntry[] = [
  {
    icon: "/images/art/boss.png",
    name: "Jefe Oscuro",
    desc: "La primera prueba, a las puertas de Averon. Nadie lo llama de otra forma porque nadie se ha quedado el tiempo suficiente para preguntarle su nombre.",
    glow: "rgba(120,60,180,0.35)",
  },
  {
    icon: "/images/art/boss_witch.png",
    name: "La Bruja",
    desc: "Domina la superficie con un báculo rematado en un cráneo que no es suyo. El lobo sombrío que la acompaña la obedece — o eso parece, hasta que deja de hacerlo.",
    glow: "rgba(150,40,90,0.35)",
  },
  {
    icon: "/images/art/boss_void.png",
    name: "El Vacío",
    desc: "Primera forma de lo que espera al final de Averon. El fuego que lo envuelve no calienta: consume. Habla con una voz que claramente no es la suya.",
    glow: "rgba(224,90,20,0.4)",
  },
  {
    icon: "/images/art/boss_father.png",
    name: "El Padre",
    desc: "Lo que queda cuando el Vacío se agota. Corona, capa, y un rostro que a algunos jugadores les recordará a alguien. Nadie lo confirma en voz alta.",
    glow: "rgba(179,18,47,0.42)",
  },
];
