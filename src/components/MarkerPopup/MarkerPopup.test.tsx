import * as React from 'react';
import { shallow } from 'enzyme';
import MarkerPopup from './MarkerPopup';
import { mockMeetingLocation } from '../../types/MeetingLocation';
import Meeting, { mockMeeting } from '../../types/Meeting';

const meetingsAtLocation: Meeting[] = [mockMeeting];

describe('MarkerPopup', () => {
  it('should render without crashing', () => {
    shallow(
      <MarkerPopup
        locationData={mockMeetingLocation}
        meetingsAtLocation={meetingsAtLocation}
      />
    );
  });
});
