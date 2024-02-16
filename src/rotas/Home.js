import './Home.css';
import Pikachu from '../componentes/Pikachu'
import Bulbasaur from '../componentes/Bulbasaur'
import Charmander from '../componentes/Charmander'
import Squirtle from '../componentes/Squirtle'
import TituloDaHome from '../componentes/TituloDaHome'


function Home() {
  return (
      <header className="Home">
        <div className='dropDown'>
          <TituloDaHome/> 
        </div>
        <div className='pokemon fadeInDown'>
        <Charmander></Charmander>
        <Pikachu></Pikachu>
        <Bulbasaur></Bulbasaur>
        <Squirtle></Squirtle>
        </div>
      </header>
  );
}

export default Home;
