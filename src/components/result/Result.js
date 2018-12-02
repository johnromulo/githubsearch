import React, { Component } from 'react';
import {
  Wrapper,
  Header, Content,
  SectionDatail,
  SectionListRepo,
  WrapperSearch,
  LogoContent,
  NotFound
} from './styles';
import Logo from '../logo/';
import RepositoryInfo from '../repository-info/'
import UserDetail from '../user-detail';
import Search from '../search';

class Result extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: '',
    }
  }

  componentDidMount() {
    const userName = this.props.match.params.filter;
    this.loadUserInfo(userName);
  }

  handleResult = (event) => {
    event.preventDefault();
    this.props.history.push(`/${this.state.userName}`);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.filter !== prevProps.match.params.filter) {
      const userName = this.props.match.params.filter;
      this.loadUserInfo(userName);
    }
  }

  onChangeInput = (event) => {
    this.setState(
      { userName: event.target.value }
    )
  }

  loadUserInfo = (userName) => {
    this.props.actionGetUser(userName);
    this.props.actionGetUserRepos(userName);
  }

  render() {
    return (
      <Wrapper id="wrapper">
        <Header>
          <LogoContent>
            <Logo fontSize={'2.58rem'} />
          </LogoContent>
          <WrapperSearch>
            <Search
              value={this.state.userName}
              onChange={this.onChangeInput.bind(this)}
              handleSearch={this.handleResult.bind(this)} />
          </WrapperSearch>
        </Header>
        {
          !this.props.store.loading ?
            this.props.store.error ?
              <Content id="contenNoFound">
                <NotFound id="notFound"> User not found :(</NotFound>
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
              </Content>
            :
            null
        }
      </Wrapper>
    )
  };
}

export default Result;
