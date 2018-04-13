import * as React from 'react';
import { shallow } from 'enzyme';
import MapMarker from './MapMarker';

describe('MapMarker', () => {
  it('should render without crashing', () => {
    shallow(<MapMarker lat={30} lng={30} markerType="user" />);
  });
});
