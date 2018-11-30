import React, { Component } from 'react';
import { Wrapper, Header, Content, SectionDatail, SectionListRepo } from './styles';
import Logo from '../logo/';
import Search from '../search/';

class Result extends Component {
  render() {
    return (
      <Wrapper>
        <Header>
          <Logo fontSize={'2.58rem'} margin={'0em'} />
          <Search justifyContent={'flex-end'}
            widthInput={'100%'} widthWrapper={'68%'}/>
        </Header>
        <Content>
          <SectionDatail></SectionDatail>
          <SectionListRepo></SectionListRepo>
        </Content>
      </Wrapper>
    )
  };
}

export default Result;
