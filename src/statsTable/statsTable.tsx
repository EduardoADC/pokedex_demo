import { Pokemon } from "../pokedex/useGetPokemon";
import classes from "./statsTable.module.css";
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

export function StatsTable({ pokemon }: { pokemon: Pokemon }) {
  let statsData: any = [];
  for (let i = 0; i < pokemon.stats.length; i++) {
    statsData[i] = {
      Stat_name: pokemon.stats[i].stat.name.toUpperCase(),
      Value: pokemon.stats[i].base_stat,
      fullMark: 256,
    };
  }

  return (
    <section className={classes.stats_section}>
      <table>
        <thead>
          <tr>
            <th>STAT</th>
            <th>VALUE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>NAME</td>
            <td>{pokemon.name.toUpperCase()}</td>
          </tr>
          <tr>
            <td>POKEDEX ID</td>
            <td>{pokemon.id}</td>
          </tr>
          <tr>
            <td>TYPE</td>
            <td>
              {pokemon.types.map((type) => {
                return type.type.name.toUpperCase() + " ";
              })}
            </td>
          </tr>
          <tr>
            <td>HEIGHT</td>
            <td>{pokemon.height / 10} M</td>
          </tr>
          <tr>
            <td>WEIGHT</td>
            <td>{pokemon.weight / 10} KG</td>
          </tr>
        </tbody>
      </table>

      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={statsData} outerRadius={"75%"}>
          <Tooltip
            labelStyle={{ color: "black" }}
            itemStyle={{ color: "black" }}
            cursor={{ stroke: "red", strokeWidth: 3 }}
          />
          <PolarGrid />
          <PolarAngleAxis type="category" dataKey="Stat_name" />
          <PolarRadiusAxis domain={[0, 255]} tick={false} axisLine={false} />
          <Radar
            dataKey="Value"
            stroke="green"
            fill="green"
            fillOpacity={0.3}
            animationDuration={300}
          />
        </RadarChart>
      </ResponsiveContainer>
    </section>
  );
}
