import { useDispatch } from "react-redux";
import { setTrainerName } from "../../store/slices/trainerName.slice";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
 

const Home = () => {

    const dispatch = useDispatch();
    const  Navigate = useNavigate();

    const handleSubmit = (e) => {
       e.preventDefault();
       dispatch(setTrainerName(e.target.trainerName.value));
       Navigate("/Pokedex");
         
    };
    return(
    <section className="grid grid-rows-[1fr_auto] h-screen overflow-hidden">
        <div className="text-center justify-self-center self-center">
            <main>
               <header>
                <img src="/images/pokedex.png" alt="" />
               </header>
               <h3>Hello trainer!</h3>
               <p>Write your name for start ...</p>
               <form onSubmit={handleSubmit}>
                <input  
                name="trainerName" 
                placeholder="your name" 
                type="text" 
                autoComplete="off"
                required />
                <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" type="submit">Start</button>
               </form>
            </main>
        </div>
        <Footer/>
    </section>
    );
};

export default Home;