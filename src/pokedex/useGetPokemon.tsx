import { useEffect, useState } from "react";

const POKEMON_API = "https://pokeapi.co/api/v2/pokemon/";

export function useGetPokemon(randomId: number) {
  const [data, setData] = useState<Pokemon>();

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch(POKEMON_API + randomId);
      const responsePokemon = await response.json();
      setData(responsePokemon);
      console.log(responsePokemon);
    };
    fetchPokemon();
  }, [randomId]);

  return { pokemon: data };
}

type Type = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

type Sprites = {
  front_default?: string;
  other: ImageSource;
};

type ImageSource = {
  "official-artwork": {
    front_default: string;
    front_shiny: string;
  };
};

type Stats = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
};

export type Pokemon = {
  height: number;
  id: number;
  name: string;
  sprites: Sprites;
  types: Array<Type>;
  weight: number;
  stats: Array<Stats>;
};
