import { useState } from "react";
import "./App.css";
import { StatsTable } from "./statsTable/statsTable";
import { useGetPokemon } from "./pokedex/useGetPokemon";
import { Pokedex } from "./pokedex/pokedex";

function App() {
  const [randomId, setRandomId] = useState<number>(1);
  const handleRandomIdGeneration = () => {
    setRandomId(Math.ceil(Math.random() * 1026));
  };
  const { pokemon } = useGetPokemon(randomId);

  if (!pokemon) return null;

  return (
    <main className="layout">
      <Pokedex
        pokemon={pokemon}
        setRandomId={handleRandomIdGeneration}
      ></Pokedex>
      <StatsTable pokemon={pokemon} />
    </main>
  );
}

export default App;
