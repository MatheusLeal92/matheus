import './Home.css';
import TituloDaHome from '../componentes/TituloDaHome'
import StarterPokemonCards from '../componentes/StarterPokemonCard';


function Home() {
  return (
      <header className="Home">
        <div className='bounce-in-right'>
          <TituloDaHome/> 
        </div>
        <div className='pokemon fadeInDown'>
          <StarterPokemonCards />
        </div>
      </header>
  );
}

export default Home;
