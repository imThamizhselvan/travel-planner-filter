import React, { Component } from 'react';
import { Heading } from './styles';

class Title extends Component {
  render() {
    return (
      <div>
        <Heading> {this.props.text} </Heading>
      </div>
    );
  }
}

export default Title;
