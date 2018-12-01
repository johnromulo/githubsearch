import React, { Component } from 'react';
import { Wrapper, ContentSearch, ContentLogo } from './styles';
import Logo from '../logo/';
import Search from '../search/';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
    }
  }

  handleResult = () => {
    this.props.history.push(`/${this.state.userName}`);
  }

  onChangeInput = (event) => {
    this.setState(
      { userName: event.target.value }
    )
  }

  render() {
    return (
      <Wrapper>
        <ContentLogo>
          <Logo />
        </ContentLogo>
        <ContentSearch>
          <Search
            value={this.state.userName}
            onChange={this.onChangeInput.bind(this)}
            onClick={this.handleResult.bind(this)} />
        </ContentSearch>
      </Wrapper>
    );
  }
}

export default Home;
