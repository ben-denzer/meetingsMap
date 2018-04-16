import * as React from 'react';
import Meeting from '../../types/Meeting';
import MeetingLocation from '../../types/MeetingLocation';
import { MarkerPopupWrapper } from './MarkerPopupStyles';
import MeetingDetails from '../MeetingDetails/MeetingDetails';

interface Props {
  isMobile: boolean;
  locationData: MeetingLocation;
  meetingsAtLocation: Meeting[];
}

const MarkerPopup: React.SFC<Props> = (props: Props) => {
  const {
    address,
    city,
    clubName,
    locationNotes,
    phone,
    state,
    website,
    zip
  } = props.locationData;

  const meetingDetails = props.meetingsAtLocation.map(meeting => (
    <MeetingDetails
      key={meeting.meetingId}
      inPopup={true}
      meetingInfo={meeting}
    />
  ));
  return (
    <MarkerPopupWrapper>
      {clubName && <div className="clubName">{clubName}</div>}
      <div className="address">{address}</div>
      <div className="address">
        {city}, {state} {zip}
      </div>
      {website && (
        <a href={website} className="website">
          {website}
        </a>
      )}
      {phone && <div className="phone">{phone}</div>}
      {locationNotes && (
        <div className="locationNotes">
          <span className="noteLabel">Notes:</span> {locationNotes}
        </div>
      )}
      {props.isMobile && meetingDetails}
    </MarkerPopupWrapper>
  );
};

export default MarkerPopup;
