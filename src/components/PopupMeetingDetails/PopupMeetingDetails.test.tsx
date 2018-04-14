import * as React from 'react';
import { shallow } from 'enzyme';
import { mockMeeting } from '../../types/Meeting';
import PopupMeetingDetails from './PopupMeetingDetails';

describe('PopupMeetingDetails', () => {
  it('should render without crashing', () => {
    shallow(<PopupMeetingDetails meetingInfo={mockMeeting} />);
  });
});
