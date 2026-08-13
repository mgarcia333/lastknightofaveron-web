export const storyParagraphs = [
  "Averon no siempre estuvo en ruinas. Antes de la luna de sangre hubo una ciudad de piedra blanca, una corona, y un juramento que sus caballeros repetían al amanecer: proteger lo que dormía bajo la catedral. Nadie fuera de la Orden sabía qué era. Puede que ya ni siquiera quede nadie de la Orden que lo sepa.",
  "La luna cambió de color en una sola noche. No hay crónica que explique por qué, ni astrónomo de Averon que lo viera venir. Al amanecer siguiente la ciudad baja estaba sellada, la superficie cubierta de tumbas que nadie recordaba haber cavado, y algo se movía otra vez entre los pasillos de la catedral.",
  "El último caballero no es el último por ser el más fuerte. Es, simplemente, el único que quedó en pie cuando terminó la cuenta. Viste la armadura de la Orden porque nadie más la reclamó — y porque, dicen algunos, la armadura decide quién la lleva tanto como quien la lleva decide vestirla.",
  "Bajo la ciudad sellada hay algo que respira al ritmo de la luna. Quien ha llegado hasta el final de Averon sabe qué es. No lo cuenta.",
];

export interface LoreEntry {
  icon: string;
  name: string;
  desc: string;
}

export const abilities: LoreEntry[] = [
  {
    icon: "/images/art/attack.png",
    name: "Espada",
    desc: "Golpe cuerpo a cuerpo. Encadena varios mandobles seguidos para abrir hueco entre la horda antes de que te rodee.",
  },
  {
    icon: "/images/art/fireball.png",
    name: "Bola de fuego",
    desc: "Consume maná para golpear a distancia. El pozo no es infinito — quémalo con cabeza, no con pánico.",
  },
  {
    icon: "/images/art/dash.png",
    name: "Esquiva",
    desc: "Un paso fuera del tiempo justo. Atraviesa el peligro un instante antes de que te alcance.",
  },
  {
    icon: "/images/art/jump.png",
    name: "Salto doble",
    desc: "El segundo impulso no viene de las piernas. Nadie te lo va a explicar mejor que eso.",
  },
];

export const bestiary: LoreEntry[] = [
  {
    icon: "/images/art/skeleton.png",
    name: "Esqueleto",
    desc: "Centinelas de la vieja guardia de Averon. La carne se pudrió hace siglos; el puesto asignado, no.",
  },
  {
    icon: "/images/art/goblin.png",
    name: "Goblin",
    desc: "Carroñeros oportunistas que anidan en las grietas de la ciudad baja. Nunca vienen solos por mucho tiempo.",
  },
  {
    icon: "/images/art/mushroom.png",
    name: "Brote",
    desc: "Germinó de esporas que trajo la luna de sangre. Nadie ha bajado lo bastante hondo para ver qué más está creciendo ahí.",
  },
  {
    icon: "/images/art/flyingeye.png",
    name: "Ojo volador",
    desc: "Solo ojo, colmillo y ala. Vigila e informa — a algo que ni él mismo ha visto de cerca.",
  },
  {
    icon: "/images/art/heavybandit.png",
    name: "Bandido pesado",
    desc: "Lo que queda de la guardia real, todavía jurando lealtad a un rey que ya no está en el trono.",
  },
  {
    icon: "/images/art/lightbandit.png",
    name: "Bandido ligero",
    desc: "Saqueadores de las ruinas exteriores. Rápidos, temerarios, y casi siempre a solas por elección.",
  },
  {
    icon: "/images/art/medievalenemy.png",
    name: "Espadachín errante",
    desc: "Quedó atrapado en Averon la noche que cayó la ciudad. Sigue defendiendo una calle que ya no lleva a ningún sitio.",
  },
];

export const bosses: LoreEntry[] = [
  {
    icon: "/images/art/boss.png",
    name: "El Guardián del Umbral",
    desc: "La primera prueba, a las puertas de Averon. Quien lo derrota aprende rápido que el título de \"último caballero\" se gana, no se hereda.",
  },
  {
    icon: "/images/art/boss.png",
    name: "El Guardián de la Superficie",
    desc: "Se alza entre las ruinas bajo cielo abierto, con la misma armadura que el guardián del umbral. ¿Es el mismo ser? Nadie que lo haya preguntado ha vuelto para responder.",
  },
  {
    icon: "/images/art/boss.png",
    name: "El Último Guardián",
    desc: "Lo que espera al final de Averon viste la armadura de todos los que cayeron antes que él. Quizás es memoria. Quizás es otra cosa que aprendió a parecerse a un caballero.",
  },
];
