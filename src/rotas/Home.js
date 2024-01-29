import './Home.css';
import Pikachu from '../componentes/Pikachu'
import Bulbasaur from '../componentes/Bulbasaur'
import Charmander from '../componentes/Charmander'
import Squirtle from '../componentes/Squirtle';

function Home() {
  return (
    <div className="App">
      <header className="Home">
        <Charmander></Charmander>
        <Pikachu></Pikachu>
        <Bulbasaur></Bulbasaur>
        <Squirtle></Squirtle>
      </header>
    </div>
  );
}

export default Home;
