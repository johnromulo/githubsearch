import React, { Component } from 'react';
import {
  Wrapper,
  Header, Content,
  SectionDatail,
  SectionListRepo,
  WrapperSearch,
  Input,
  Button,
  Img,
  LogoContent
} from './styles';
import Logo from '../logo/';
import RepositoryInfo from '../repository-info/'
import SearchIcon from '../../assets/icons/search.svg';

class Result extends Component {
  render() {
    return (
      <Wrapper>
        <Header>
          <LogoContent>
            <Logo fontSize={'2.58rem'} margin={'0em'} />
          </LogoContent>
          <WrapperSearch>
            <Input type="text" />
            <Button>
              <Img src={SearchIcon} alt="logo" />
            </Button>
          </WrapperSearch>
        </Header>
        <Content>
          <SectionDatail></SectionDatail>
          <SectionListRepo>
            <RepositoryInfo />
          </SectionListRepo>
        </Content>
      </Wrapper>
    )
  };
}

export default Result;
