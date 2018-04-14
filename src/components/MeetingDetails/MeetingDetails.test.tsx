import * as React from 'react';
import { shallow } from 'enzyme';
import { mockMeeting } from '../../types/Meeting';
import MeetingDetails from './MeetingDetails';

describe('PopupMeetingDetails', () => {
  it('should render without crashing', () => {
    shallow(<MeetingDetails meetingInfo={mockMeeting} />);
  });
});
