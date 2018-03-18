import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CardComponent from './card';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>App component</h1>
        <CardComponent item="App card name"/>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
