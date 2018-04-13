import * as React from 'react';
import { shallow } from 'enzyme';
import UserMarker from './UserMarker';

describe('UserMarker', () => {
  it('should render without crashing', () => {
    shallow(<UserMarker lat={35} lng={-115} />);
  });
  it('should match snapshot', () => {
    const wrapper = shallow(<UserMarker lat={35} lng={-115} />);
    expect(wrapper).toMatchSnapshot();
  });
});
