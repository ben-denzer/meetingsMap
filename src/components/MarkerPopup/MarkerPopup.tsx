import * as React from 'react';
import Meeting from '../../types/Meeting';
import MeetingLocation from '../../types/MeetingLocation';
import { MarkerPopupWrapper } from './MarkerPopupStyles';
import PopupMeetingDetails from '../PopupMeetingDetails/PopupMeetingDetails';

interface Props {
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
  const createKey = (m: Meeting): string =>
    `${m.groupType}${m.meetingName}${m.day}${m.hour}${m.min}${m.type}`;

  const meetingDetails = props.meetingsAtLocation.map(meeting => (
    <PopupMeetingDetails key={createKey(meeting)} meetingInfo={meeting} />
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
      {meetingDetails}
    </MarkerPopupWrapper>
  );
};

export default MarkerPopup;
