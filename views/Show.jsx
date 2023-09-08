const React = require('react');

class Show extends React.Component {
  render() {
    const { pokemon } = this.props;

    return (
      <main>
        <h1>Gotta Catch 'Em All</h1>
        <h2>{pokemon.name[0].toUpperCase()}{pokemon.name.substring(1)}</h2>
        <img src={`${pokemon.img}.jpg`} alt={pokemon.name} /><br />
        <a href='/pokemon'>back</a>
      </main>
    );
  }
}

module.exports = Show;