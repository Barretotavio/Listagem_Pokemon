import './styles.css';

function Main() {
  return (
    <div className="container-main">
      <div className='container-titulo'>
        <h1>Pokedex</h1>
      </div>
      <section>
        <ol className='container-pokemons'>
          <div className='container-pares-pokemons'>
            <li>Bulbasaur</li>
            <li>Ivysaur</li>
          </div>
          <div>
            <li>Venusaur</li>
            <li>Charmander</li>
          </div>
        </ol>
      </section>
    </div>
  );
}

export default Main;
