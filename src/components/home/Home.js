import React, { Component } from 'react';
import { Wrapper } from './styles';
import Logo from '../logo/Logo';
import Search from '../search/Search';

class Home extends Component {
  render() {
    return (
      <Wrapper>
        <Logo />
        <Search />
      </Wrapper>
    );
  }
}

export default Home;
