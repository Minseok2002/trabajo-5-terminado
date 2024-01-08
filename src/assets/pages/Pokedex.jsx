import { useSelector } from "react-redux";
import PokemonList from "../../components/PokemonList";
import { useEffect, useState } from "react";
import axios from "axios";
  
const Pokedex = () =>{
const [allPokemons, setAllPokemons]=useState([]); 
const [pokemonName, setPokemonName]=useState(""); 
const [types, setTypes]=useState([]); 

const  trainerName = useSelector((store) => store.trainerName.name);

 const pokemonsByName = allPokemons.filter((pokemon)=> 
 pokemon.name.includes(pokemonName)
);
const handleSubmit = (e)=>{
    e.preventDefault();
    setPokemonName(e.target.pokemonName.value.toLowerCase().trim());
};

const handleChangeType = (e) => {
    const url = e.target.value;
    axios
    .get(url)
    .then(({data})=>{
        if(url.includes("type")) {
           const pokemonsFormat = data.pokemon.map((pokemon)=>
            pokemon.pokemon);
            setAllPokemons(pokemonsFormat)
        } else {
            setAllPokemons(data.results);
        }
     })
    .catch((err) => console.log(err));
};

 

useEffect(()=>{
    axios
    .get("https://pokeapi.co/api/v2/pokemon?limit=1200")
    .then(({data}) => setAllPokemons(data.results))
    .catch((err) => console.log(err));

},[]);

useEffect(()=>{
    axios
    .get("https://pokeapi.co/api/v2/type")
    .then(({data}) => setTypes(data.results))
    .catch((err) => console.log(err));
},[]);
 return (
    <section>
         <header/>
          <main>
            <p>
            <b>Welcome {trainerName}</b>, here can you find your favorite Pokemon
            </p>

            <form onSubmit={handleSubmit}>
                <div>
                    <input 
                    name="pokemonName" 
                    placeholder="Search Pokemon.."
                    type="text" 
                    />
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Search</button>
                </div>
                <select onChange={handleChangeType}>
                    <option value="https://pokeapi.co/api/v2/pokemon?limit=1200">
                        All Pokemons
                        </option>
                        {types.map((type)=>(
                          <option value={type.url} className="capitalize" key=
                          {type.name} >
                           {type.name}
                        </option>
                    ))}
                </select>
            </form>
            <PokemonList  Pokemons={pokemonsByName}/>
          </main>
        </section>
    );
};

export default Pokedex;