import * as React from 'react';
import { shallow } from 'enzyme';
import { mockFilters } from '../../types/Filters';
import MapFilterBar from './MapFilterBar';

const filterChanged = jest.fn();

describe('MapFilterBar', () => {
  it('should render without crashing', () => {
    shallow(<MapFilterBar filterChanged={filterChanged} filters={mockFilters} />);
  });
});
