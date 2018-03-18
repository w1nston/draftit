import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import BlogPost from '../BlogPost';

describe('BlogPost', () => {
  it('renders', () => {
    const match = { params: { title: 'Title' } };
    const component = shallow(<BlogPost match={match} />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
