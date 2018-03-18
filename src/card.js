import React, { Component } from 'react';

export default class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{backgroundColor: 'yellow', width: '300px'}}>
        <h3>{ this.props.item }</h3>
        <span>Card component</span>
      </div>
    );
  }

}