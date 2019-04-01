import React, { Component } from 'react';
import Title from '../../components/Title';
import data from '../../data.json';
import { MainHeading, Wrapper, SubWrapper, ListItem, Item } from './styles';

class Home extends Component {

  render() {
    const uniqueDestination = data.destinations.filter((destination, index, self) =>
      index === self.findIndex((t) => (
        t.text === destination.text
      ))
    )
    return (
      <Wrapper>
        <MainHeading> Pickyourtrail Sitemap </MainHeading>
        <Title text="Destinations" />
        <hr />
        <SubWrapper>
          {
            uniqueDestination.map((item, i) => (
              <ListItem key={i}>
                <Item href={item.url} target="_blank"> {item.text} </Item>
              </ListItem>
            ))
          }
        </SubWrapper>
        <Title text="Themed vacations" />
        <hr />
        <SubWrapper>
          {
            data.vacations.map((item, i) => (
              <ListItem key={i}>
                <Item href={item.url} target="_blank"> {item.text} </Item>
              </ListItem>
            ))
          }
        </SubWrapper>
        <Title text="Showing all pages" />
        <hr />
        <SubWrapper>
          {
            data.vacations.map((item, i) => (
              <ListItem key={i}>
                <Item href={item.url} target="_blank"> {item.text} </Item>
              </ListItem>
            ))
          }
        </SubWrapper>
      </Wrapper>
    );
  }
}

export default Home;
