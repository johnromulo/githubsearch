import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './components/home/';
import Result from './components/result/';
import store from './store';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/:filter' component={Result} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
