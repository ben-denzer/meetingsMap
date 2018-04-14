import * as React from 'react';
import { shallow } from 'enzyme';
import MeetingList from './MeetingList';

describe('MeetingList', () => {
  it('should render without crashing', () => {
    shallow(<MeetingList />);
  });
});
