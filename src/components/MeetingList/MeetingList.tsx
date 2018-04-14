import * as React from 'react';
import { MeetingListWrapper } from './MeetingListStyles';
import Meeting from '../../types/Meeting';
import MeetingLocation from '../../types/MeetingLocation';
import MeetingDetails from '../MeetingDetails/MeetingDetails';

interface Props {
  meetingLocations: MeetingLocation[];
  meetings: Meeting[];
}

const MeetingList: React.SFC<Props> = (props: Props) => {
  const details = props.meetings.map((m: Meeting): JSX.Element => {
    const locationInfo: MeetingLocation = props.meetingLocations.filter(
      (location: MeetingLocation) => {
        return location.locationId === m.locationFk;
      }
    )[0];
    return (
      <MeetingDetails
        key={m.meetingId}
        meetingInfo={m}
        locationInfo={locationInfo}
        inPopup={false}
      />
    );
  });
  return <MeetingListWrapper>{details}</MeetingListWrapper>;
};

export default MeetingList;
