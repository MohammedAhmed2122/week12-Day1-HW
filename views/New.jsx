const React = require('react');

class New extends React.Component {
  render() {
    return (
      <main>
        <h1>Add a Pokemon!</h1>
        <form action='/pokemon' method='POST'>
          <label htmlFor='name'>Name: 
            <input type="text" id='name' name='name' /><br />
          </label>
          <label htmlFor="img">Image URL: 
            <input type="text" id='img' name='img' /><br />
          </label>
          <input type="submit" value="Add" />
        </form>
        <a href='/pokemon'>back</a>
      </main>
    );
  }
}

module.exports = New;