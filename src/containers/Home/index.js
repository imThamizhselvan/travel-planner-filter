import React, { Component } from 'react';
import Title from '../../components/Title';
import { MainHeading } from './styles';

class Home extends Component {
  render() {
    return (
      <div>
        <MainHeading> title </MainHeading>
        <Title text="Destinations" />
        <Title text="Themed vacations" />

      </div>
    );
  }
}

export default Home;
