import * as React from 'react';
import { shallow } from 'enzyme';
import HomePage from './HomePage';

describe('HomePage', () => {
  it('should render without crashing', () => {
    shallow(<HomePage />);
  });
});
