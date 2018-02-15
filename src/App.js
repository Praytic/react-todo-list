import React, { Component } from 'react';
import List from './List';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: {title: '', description: '', isDone: false},
      items: []
    };
  }

  onChange = (event) => {
    const newTerm = {...this.state.term};
    newTerm[event.target.name] = event.target.value;
    this.setState({ term: newTerm });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term: {title: '', description: '', isDone: false},
      items: [...this.state.items, this.state.term]
    });
  };

  render() {
    return (
        <div>
          <form className="App" onSubmit={this.onSubmit}>
            <input name="title" value={this.state.term.title} onChange={this.onChange} />
            <input name="description" value={this.state.term.description} onChange={this.onChange} />
            <button>Submit</button>
          </form>
          <List items={this.state.items} />
        </div>
    );
  }
}