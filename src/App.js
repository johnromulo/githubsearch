import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/home/Home';
import Result from './components/result/Result';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/result' component={Result} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
