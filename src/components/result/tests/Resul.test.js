import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import Result from '../index';



describe('Result tests', () => {

  let wrapper, store, match;
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

    store = mockStore(initialState);
    wrapper = shallow(<Result store={store} match={match} />);
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
