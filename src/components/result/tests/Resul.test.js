import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import Result from '../index';



describe('Result tests', () => {

  let wrapper, store, match, historyMock;
  // definição do estado  inicial do componente.
  beforeEach(() => {
    const mockStore = configureStore();

    const initialState = {
      gitReducer: {
        user: {},
        repos: [],
        loading: true,
        erros: false,
      }
    }
    match = {
      params: { filter: 'john' }
    }

    historyMock = { push: jest.fn() };
    store = mockStore(initialState);
    wrapper = shallow(<Result store={store} match={match} history={historyMock} />);
  });


  // teste de renderização do Logo component.
  test('render Logo', () => {
    const resul = wrapper.find('Result').dive();
    expect(resul.find('Logo')).toHaveLength(1);
    const logo = resul.find('Logo').dive();
    expect(logo.text()).toBe('GithubSearch');
  });

  // teste de renderização  do Search componet.
  test('render Search', () => {
    const resul = wrapper.find('Result').dive()
    expect(resul.find('Search')).toHaveLength(1);

    const search = resul.find('Search').dive();
    search.find('#inputUserName').simulate('change', { target: { id: 'inputUserName', value: 'john' } })
    expect(resul.state('userName')).toEqual('john');
  });

});

describe('Result test click search', () => {

  let wrapper, store, match, historyMock, loadUserInfo;
  // definição do estado  inicial do componente.
  beforeEach(() => {
    const mockStore = configureStore();

    const initialState = {
      gitReducer: {
        user: {},
        repos: [],
        loading: true,
        erros: false,
      },
    }
    match = {
      params: { filter: 'john' }
    }
    historyMock = { push: jest.fn() };
    store = mockStore(initialState);

    wrapper = shallow(<Result
      store={store}
      match={match}
      history={historyMock} />);
  });

  // testin push history
  test('render Search', () => {
    const resul = wrapper.find('Result').dive();
    resul.setState({ userName: 'john' }, () => {
      resul.update();
    });
    const search = resul.find('Search').dive();
    search.find('#buttonSearch').simulate('click', {
      preventDefault: () => {
      }
    });
    expect(historyMock.push.mock.calls.length).toBe(1);
    expect(historyMock.push.mock.calls[0]).toEqual(["/john"]);
  });

  test('render Search2 ', () => {
    const resul = wrapper.find('Result').dive();
    resul.instance().loadUserInfo = jest.fn();
    resul.setProps({ match: { params: { filter: 'newpros' } } }, () => {
      resul.update();
    });

    expect(resul.instance().loadUserInfo).toBeCalled();
  });


});
