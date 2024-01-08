import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PokemonDetail = () => {

    const [pokemoninfo,setPokemonInfo] = useState(null);

const {id}= useParams();

const getPercentBarProgress = (stat_value) => {
    const percent = (stat_value * 100 ) /255;
    return percent + "%";


}
 
useEffect (()=>{
    axios
    .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(({data}) => setPokemonInfo(data))
    .catch((err) => console.log(err));
}, []);
    return  (
        <section>
            <header/>
            <article className="text-center max-w-[500px] mx-auto">
              <header>
                <img src={pokemoninfo?.sprites.other["official-artwork"].front_default} 
                alt="" />
            </header>  
            <span>#{pokemoninfo?.id}</span>
            <h3>Pokemon Name</h3>
            <div>
                <div>
                    <h5>Weight</h5>
                    <span>{pokemoninfo?.weight}</span>
                </div>
                <div>
                <h5>Height</h5>
                <span>{pokemoninfo?.height}</span>
                </div>
            </div>
            <section>
                <h4>Stats</h4>
                <ul className="grid gap-3">
                {pokemoninfo?.stats.map((stat)=>(
                     <li key={stat.stat.name}>
                        <div className="flex justify-between">
                            <h5 className="capitalize">{stat.stat.name}</h5>
                            <span>{stat.base_stat}/255</span>
                        </div>
                        {/* Contenedor de Barra de progreso */}
                        <div className="h-6 bg-slate-200 rounded-sm overflow-hidden"> 
                        {/*Progreso sobre total */}
                           <div 
                            style={{ width: getPercentBarProgress(stat.base_stat),
                        }}
                           className="h-full bg-gradient-to-r from-orange-500 to-yellow-400"></div>
                        </div>
                     </li>
                     ))}
                </ul>
            </section>
            </article>
        </section>
    );
};

export default PokemonDetail;