import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      language: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      location: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('Submitted');
  }

  render() {
    return (
      <div className="app">
        <header>
          <h1>Junior Dev Job Search</h1>
          <p>Find the perfect role right here</p>
          <form onSubmit={this.handleSubmit}>
            <label>Location</label>
            <input
              type="text"
              placeholder="Search"
              onChange={this.handleChange}
            />
            <button type="submit">Search</button>
          </form>
        </header>
      </div>
    );
  }
}

export default App;
