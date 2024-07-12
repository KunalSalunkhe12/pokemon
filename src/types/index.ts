export type PokemonPaginatedData = {
  count: number;
  next: URL | null;
  previous: URL | null;
  results: {
    name: string;
    url: URL;
  }[];
};

export type PokemonData = {
  name: string;
  height: number;
  base_experience: number;
  order: number;
  sprites: {
    front_default: string;
    back_default: string;
  };
};
