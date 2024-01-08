import { useEffect, useState } from "react";
import paginatePokemons from "../utils/pagination";
import Pagination from "./Pagination";
import PokemonPreview from "./PokemonPreview";

const PokemonList = ( {Pokemons} ) =>{
   const [CurrentPage, setCurrentPage]= useState(1);
   const{ lastPage,pagesInCurrentBlock,pokemonsInCurrentPage}=paginatePokemons(Pokemons,CurrentPage);


   useEffect (() =>{
     setCurrentPage(1);
   },[Pokemons]);

   return (
   <section>
   <section className="grid grid-cols-[repeat(auto-fill,_280px)] justify-center max-w-[1200px] max-auto gap-4 py-10">
  {pokemonsInCurrentPage.map((pokemon) => (
   <PokemonPreview key={pokemon.url} pokemonURL={pokemon.url}/>
   ))}
  </section>
  <Pagination  
  lastPage={lastPage}
  pagesInCurrentBlock={pagesInCurrentBlock}
  setCurrentPage={setCurrentPage}
  CurrentPage={CurrentPage}
  />
  </section>
    );
};

export default PokemonList;