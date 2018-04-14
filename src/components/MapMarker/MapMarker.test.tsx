import * as React from 'react';
import { shallow } from 'enzyme';
import MapMarker from './MapMarker';
import { mockMeetingLocation } from '../../types/MeetingLocation';
import Meeting, { mockMeeting } from '../../types/Meeting';

const meetingsAtLocation: Meeting[] = [mockMeeting];
const selectLocation = jest.fn();

describe('MarkerPopup', () => {
  it('should render without crashing', () => {
    shallow(
      <MapMarker
        isMobile={false}
        lat={35}
        lng={-115}
        locationData={mockMeetingLocation}
        markerType="meeting"
        meetingsAtLocation={meetingsAtLocation}
        selectLocation={selectLocation}
        selectedLocation={null}
      />
    );
  });
  it('should match snapshot', () => {
    const wrapper = shallow(
      <MapMarker
        isMobile={false}
        lat={35}
        lng={-115}
        locationData={mockMeetingLocation}
        markerType="meeting"
        meetingsAtLocation={meetingsAtLocation}
        selectLocation={selectLocation}
        selectedLocation={null}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
