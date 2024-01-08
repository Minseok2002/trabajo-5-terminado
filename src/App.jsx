import { Route, Routes } from "react-router-dom";
import Home from "./assets/pages/Home";
import Pokedex from "./assets/pages/Pokedex";
import PokemonDetail from "./assets/pages/PokemonDetail";
import ProtectedRoutes from "./components/ProtectedRoutes";


function App() {
  return (
    <>
       <Routes>
        <Route path="/"  element={<Home/>}/> 
        <Route element={<ProtectedRoutes/>}> 
        <Route path="/pokedex" element={<Pokedex/>}/> 
        <Route path="/pokedex/:id" element={<PokemonDetail/>}/> 
        </Route>
        </Routes>
    </>
  );
}

export default App;
