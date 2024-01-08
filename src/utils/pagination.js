const paginatePokemons = (pokemons, currrentPage) =>{
    //? cantidad de pokemon por pagina
    const POKEMONS_PER_PAGE = 20;
    
    //? Los pokemons que se renderinzan en la pagina actual

    const silceEnd = currrentPage * POKEMONS_PER_PAGE;
    const silceStart = silceEnd - POKEMONS_PER_PAGE;
    const pokemonsInCurrentPage = pokemons.slice(silceStart, silceEnd)

    //? ultima pagina o la cantidad de paginas

    const lastPage = Math.ceil(pokemons.length / POKEMONS_PER_PAGE);

    //? Bloque actual

    const PAGES_PER_BLOCK = 7
    const actualBlock = Math.ceil(currrentPage / PAGES_PER_BLOCK);

    //? Paginas  que se  van a mostrar en el block
    const pagesInCurrentBlock = [];
    const maxPage = actualBlock * PAGES_PER_BLOCK ;
    const minPage = maxPage - PAGES_PER_BLOCK + 1;

    for(let i =minPage; i <= maxPage; i++){
        if(i <= lastPage){
     pagesInCurrentBlock.push(i);
        }
    }
    return {
        pokemonsInCurrentPage, 
        lastPage,
        pagesInCurrentBlock,
    };

};

export default paginatePokemons;