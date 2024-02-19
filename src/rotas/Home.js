import './Home.css';
import StarterPokemonCard from '../componentes/StarterPokemonCard';
import TituloDaHome from '../componentes/TituloDaHome'


function Home() {
  return (
      <header className="Home">
        <div className='bounce-in-right'>
          <TituloDaHome/> 
        </div>
        <div className='pokemon fadeInDown'>
        <StarterPokemonCard />
        </div>
      </header>
  );
}

export default Home;
