import classes from "./pokedex.module.css";
import { Pokemon } from "./useGetPokemon";

export function Pokedex({
  pokemon,
  setRandomId,
}: {
  pokemon: Pokemon;
  setRandomId: any;
}) {
  return (
    <div className={classes.pokedex}>
      <div className={classes.top_margin}>
        <div className={classes.circle_blue}></div>
        <svg viewBox="0 0 500 140">
          <path
            className={classes.svg_path}
            d="M 500 140 L 500 80 Q 440.5 79.5 381 79 Q 320 80 240 120 Q 200 140 160 140 Z"
          />
        </svg>
      </div>
      <div className={classes.screen_margin}>
        <div className={classes.screen_container}>
          <img
            className={classes.pokemon_sprite}
            src={pokemon?.sprites.other["official-artwork"].front_default}
          />
        </div>
        <div className={classes.corner}></div>
        <div className={classes.circle_top_left}></div>
        <div className={classes.circle_top_right}></div>
        <div className={classes.circle_bottom}></div>
      </div>
      <div className={classes.pokedex_menu}>
        <div className={classes.select_button_blue}></div>
        <div className={classes.select_button_red}></div>
        <div className={classes.pokemon_name}>
          {pokemon?.name.toUpperCase()}
        </div>
        <button className={classes.generate_button} onClick={setRandomId}>
          GENERATE RANDOM POKEMON
        </button>
      </div>
    </div>
  );
}
