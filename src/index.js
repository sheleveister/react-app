import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: 'text'
    };
  }

  inputOnChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div className="test">
        <h1>Hello</h1>
        <input type="text" value={ this.state.value } onChange={ this.inputOnChange.bind(this) }/>
      </div>
    );
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
