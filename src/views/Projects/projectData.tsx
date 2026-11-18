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
      "15+ apps behind one login. Feeds, Chat, Events, Recipes, Media, Timeline, Maps, Lights, Chords, a Dev Tracker and more. Each app has its own API resource, and one shared catalog decides where each shows up on each platform.",
      "Jackson, a local AI assistant. It runs through Ollama inside the Electron desktop app and can use tools across the platform: it controls smart lights, casts to the TV, searches your documents and recipes, and writes your morning summary.",
      "Base, Node and Client devices. One desktop holds a member’s data and runs Jackson, and every other device reads from it. Spare desktops with GPUs can take on model work, and a router sends each request to the best machine on the home network.",
      "Five clients from one codebase. A pnpm monorepo where Next.js web, Electron desktop and Expo mobile share Zod schemas, an RTK Query client and UI packages, all on one Express/Postgres API with Redis pub/sub for realtime.",
    ],
    tools: [
      "TypeScript",
      "Next.js",
      "Express",
      "PostgreSQL",
      "Electron",
      "Docker",
      "React Native",
      "Redis",
      "Ollama",
      "Drizzle",
      "Zod",
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
