import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {

  static propTypes = {
    btnText: PropTypes.string.isRequired,
    h1Text: PropTypes.string.isRequired,
    newArray: PropTypes.array.isRequired
  };

  static defaultProps = {
    btnText: 'Default text'
  };

  btnOnClick(event) {
    return event.target;
  }

  render() {
    return (
      <div className="test">
        <h1>{ this.props.h1Text }</h1>
        <h3>It is really working</h3>
        <button onClick={this.btnOnClick}>{ this.props.btnText }</button>
      </div>
    );
  }
}

ReactDOM.render(
  <App btnText="Click btn" h1Text="This is h1 text" newArray={[1, 2, 3]}/>,
  document.getElementById('app')
);
