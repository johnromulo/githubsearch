import React from 'react';
import UserDetail from '../UserDetail';
import { shallow } from 'enzyme';

describe('UserDetail tests', () => {
  test('render object full', () => {

    const repo = {
      avatar_url:'http://www.caferadioativo.com/wp-content/uploads/2014/02/dath-vader.jpg',
      name:'John Romulo',
      login:'johnromulo',
      company: 'Company',
      location: 'Location',
      star_all_repos: 30,
      public_repos: 7,
      followers: 8
    }

    const wrapper = shallow(<UserDetail user={repo} />);
    expect(wrapper.find('#name')).toHaveLength(1);

    expect(wrapper.find('#name').text()).toBe('John Romulo');

    expect(wrapper.find('#login')).toHaveLength(1);

    expect(wrapper.find('#login').text()).toBe('johnromulo');

    expect(wrapper.find('#company')).toHaveLength(1);

    expect(wrapper.find('#company').text()).toBe('Company');

    expect(wrapper.find('#location')).toHaveLength(1);

    expect(wrapper.find('#location').text()).toBe('Location');

    expect(wrapper.find('#star_all_repos')).toHaveLength(1);

    expect(wrapper.find('#star_all_repos').text()).toBe('30');

    expect(wrapper.find('#public_repos')).toHaveLength(1);

    expect(wrapper.find('#public_repos').text()).toBe('7');

    expect(wrapper.find('#followers')).toHaveLength(1);

    expect(wrapper.find('#followers').text()).toBe('8');

  });

  test('render object no company, location, star_all_repos, public_repos and followers', () => {

    const repo = {
      avatar_url:'http://www.caferadioativo.com/wp-content/uploads/2014/02/dath-vader.jpg',
      name:'John Romulo',
      login:'johnromulo',
      company: null,
      location: null,
      star_all_repos: null,
      public_repos: null,
      followers: null
    }

    const wrapper = shallow(<UserDetail user={repo} />);
    expect(wrapper.find('#name')).toHaveLength(1);

    expect(wrapper.find('#name').text()).toBe('John Romulo');

    expect(wrapper.find('#login')).toHaveLength(1);

    expect(wrapper.find('#login').text()).toBe('johnromulo');

    expect(wrapper.find('#company')).toHaveLength(1);

    expect(wrapper.find('#company').text()).toBe('no company');

    expect(wrapper.find('#location')).toHaveLength(1);

    expect(wrapper.find('#location').text()).toBe('no location');

    expect(wrapper.find('#star_all_repos')).toHaveLength(1);

    expect(wrapper.find('#star_all_repos').text()).toBe('0');

    expect(wrapper.find('#public_repos')).toHaveLength(1);

    expect(wrapper.find('#public_repos').text()).toBe('0');

    expect(wrapper.find('#followers')).toHaveLength(1);

    expect(wrapper.find('#followers').text()).toBe('0');

  });

});
