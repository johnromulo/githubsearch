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
        <Logo />
        <Content>
          <Search value={this.state.userName} onChange={this.onChangeInput.bind(this)} onClick={this.handleResult.bind(this)} />
        </Content>
      </Wrapper>
    );
  }
}

export default Home;
