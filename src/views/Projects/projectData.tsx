export type Project = {
  title: string;
  number: string;
  link: string;
  path: string;
  description: string;
  subDescriptions: string[];
  tools: string[];
  href?: string;
};

export const projectData: Project[] = [
  {
    title: "alt.church",
    number: "01",
    link: "https://github.com/stephanis1494/alt-church",
    path: "stephanis1494/alt-church",
    description:
      "A transparent community platform. Every post, event, ledger entry and message is public to anyone with a link.",
    subDescriptions: [
      "Public on the read side, invite only on the write side. Search engines are opted out, so it is viewable without being discoverable",
      "A pnpm monorepo serving three clients: Next.js web, Electron desktop, and Expo mobile from one Express/Postgres API",
    ],
    tools: [
      "TypeScript",
      "Next.js",
      "Express",
      "PostgreSQL",
      "Electron",
      "Docker",
      "React Native",
    ],
  },
  {
    title: "Pokédex",
    number: "02",
    link: "https://github.com/HunterJerochim/styled-pokedex-redux",
    path: "HunterJerochim/styled-pokedex-redux",
    description:
      "A work-in-progress Pokédex for searching Pokémon, exploring their data, and building a personalized favorites collection.",
    subDescriptions: [
      "Fetches Pokémon and species data from PokéAPI by name or ID, with loading and error states, official artwork, descriptions, types, and type-specific visual themes",
      "Uses Redux Toolkit to manage asynchronous Pokémon data and favorites, with support for adding, removing, and viewing saved Pokémon through routed detail pages",
    ],
    tools: [
      "JavaScript",
      "React",
      "Redux Toolkit",
      "Styled Components",
      "React Router",
      "PokéAPI",
    ],
  },
];
