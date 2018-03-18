import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CardComponent from './card';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      array: [
        {
          id: 1,
          text: 'Card 1'
        },
        {
          id: 2,
          text: 'Card 2'
        },
        {
          id: 3,
          text: 'Card 3'
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <h1>App component</h1>
        <CardComponent array={ this.state.array } />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
