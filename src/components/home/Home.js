import React, { Component } from 'react';
import { Wrapper, Content } from './styles';
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
    this.props.history.push('/result');
  }

  render() {
    return (
      <Wrapper>
        <Logo />
        <Content>
          <Search onClick={() => this.handleResult()} />
        </Content>
      </Wrapper>
    );
  }
}

export default Home;
