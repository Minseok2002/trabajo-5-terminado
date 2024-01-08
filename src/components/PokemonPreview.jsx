import axios from "axios";
import { useEffect, useState } from "react";
import { borderByType,gradientsByType } from "./constants/pokemon";
import { Link } from "react-router-dom";


const  PokemonPreview = ({pokemonURL}) => {
 const [pokemoninfo, setPokemonInfo] = useState(null);

useEffect (()=>{
    axios
    .get(pokemonURL)
    .then(({data}) => setPokemonInfo(data))
    .catch((err) => console.log(err));
}, []);
    return (
    <Link
    className={`border-8  ${
        borderByType[pokemoninfo?.types[0].type.name]} rounded-lg 
    text-center grid gap-1`}
    to={`/pokedex/${pokemoninfo?.id}`}
    >
        <header 
        className={`${
            gradientsByType[pokemoninfo?.types[0].type.name]
        } relative h-[140px]`} 
        >
            <img
            src={pokemoninfo ?.sprites.other["official-artwork"].front_default} 
            alt=""
            className="absolute bottom-0 translate-y-[35%] w-full p-12"/>
        </header>
        <h3 className="capitalize text-lg font-bold pt-10">{pokemoninfo?.name}</h3>
        <h4 className="capitalize text-sm font-semibold">{pokemoninfo?.types.map((type)=> type.type.name).join(" / ")}</h4>
        <h5 className="text-xs text-slate-400">Types</h5>
        <hr/>
        <ul className="grid grid-cols-2 gap-2 p-2">
        {pokemoninfo?.stats.map((stat)=>(
            <li key={stat.stat.name}>
                  <h5 className="uppercase  text-xs">{stat.stat.name}</h5>
                  <span className="text-sm font-bold">{stat.base_stat}</span>
            </li>
              ))}
        </ul>
        </Link>
    

    );
    
};

export default PokemonPreview;