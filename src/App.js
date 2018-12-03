import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home/';
import Result from './components/result/';
import NotFound from './components/notfound';
import store from './store';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/:filter' component={Result} />
            <Route render={(props) => <NotFound {...props} text="Page not found!" />} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
