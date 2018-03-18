import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Redirect } from 'react-router-dom';
import Content from '../Content';
import LoginPage from '../../../authentication/login/components/LoginPage';
import * as contentUtils from '../../utils/contentUtils';

describe('Content', () => {
  it('renders', () => {
    const component = shallow(<Content />);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('calls loginRouteRenderer with correct parameters', () => {
    const isAuthenticated = jest.fn();
    const loginRouteRendererSpy = jest.spyOn(
      contentUtils,
      'loginRouteRenderer'
    );
    const component = shallow(<Content isAuthenticated={isAuthenticated} />);
    expect(loginRouteRendererSpy).toHaveBeenCalledWith(isAuthenticated);
  });
});
