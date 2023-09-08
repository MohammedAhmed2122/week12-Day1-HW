const React = require('react');

class Index extends React.Component {
  render() {
    const { pokemon } = this.props;

    return (
      <main>
        <nav>
          <a href='/'>Home</a>
        </nav>
        <h1>See All The Pokemon!</h1>
        <h3><a href='/pokemon/new'>Add Pokemon</a></h3>
        <ul>
          {pokemon.map((pokemon, i) => {
            return (
              <li key={i}>
                <a href={`/pokemon/${pokemon._id}`}>
                  {pokemon.name[0].toUpperCase()}{pokemon.name.substring(1)}
                </a>
              </li>
            );
          })}
        </ul>
        
      </main>
    )
  }
}

module.exports = Index;