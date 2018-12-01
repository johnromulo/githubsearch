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
  LogoContent,
  NotFound
} from './styles';
import Logo from '../logo/';
import RepositoryInfo from '../repository-info/'
import UserDetail from '../user-detail';
import SearchIcon from '../../assets/icons/search.svg';

class Result extends Component {

  componentDidMount() {
    const userName = this.props.match.params.filter;
    this.props.actionGetUser(userName);
    this.props.actionGetUserRepos(userName);
  }

  render() {

    console.log('strore', this.props.store)
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
        {
          !this.props.store.loading ?
            this.props.store.error ?
              <Content>
                <NotFound> User not found :(</NotFound>
              </Content>
              :
              <Content>
                <SectionDatail>
                  <UserDetail user={this.props.store.user} />
                </SectionDatail>
                <SectionListRepo>
                  {
                    this.props.store.repos.map((repo, index) => <RepositoryInfo key={index} repository={repo} />)
                  }
                </SectionListRepo>
              </Content> : null
        }
      </Wrapper>
    )
  };
}

export default Result;
