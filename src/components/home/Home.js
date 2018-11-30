import React, { Component } from 'react';
import { Wrapper, Content } from './styles';
import Logo from '../logo/';
import Search from '../search/';

class Home extends Component {
  render() {
    return (
      <Wrapper>
        <Logo />
        <Content>
          <Search />
        </Content>
      </Wrapper>
    );
  }
}

export default Home;
