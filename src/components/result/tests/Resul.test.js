import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import Result from '../index';



describe('Result tests', () => {

  let wrapper, store, match;

  beforeEach(() => {
    const mockStore = configureStore();

    const initialState = {
      gitReducer: {
        user: {},
        repos: [],
        loading: false,
        erros: true,
      }
    }
    match = {
      params: { filter: 'john' }
    }

    store = mockStore(initialState);
    wrapper = shallow(<Result store={store} match={match} />);
  });


  test('render Logo', () => {
    const resul = wrapper.find('Result').dive();
    expect(resul.find('Logo')).toHaveLength(1);
    const logo = resul.find('Logo').dive();
    expect(logo.text()).toBe('GithubSearch');
  });

  test('render Search', () => {
    const resul = wrapper.find('Result').dive()
    expect(resul.find('Search')).toHaveLength(1);

    const search = resul.find('Search').dive();
    search.find('#inputUserName').simulate('change', { target: { id: 'inputUserName', value: 'john' } })
    expect(resul.state('userName')).toEqual('john');
  });
});
