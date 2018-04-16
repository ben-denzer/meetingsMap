import * as React from 'react';
import Day from '../../types/Day';
import Meeting from '../../types/Meeting';
import MeetingLocation from '../../types/MeetingLocation';
import { MeetingDetailsWrapper } from './MeetingDetailsStyles';
import LocationDetails from '../LocationDetails/LocationDetails';

interface Props {
  meetingInfo: Meeting;
  locationInfo?: MeetingLocation;
  inPopup?: boolean;
}

const MeetingDetails: React.SFC<Props> = (props: Props) => {
  const {
    day,
    groupType,
    hour,
    meetingName,
    meetingNotes,
    mensMeeting,
    min,
    open,
    type,
    womensMeeting
  } = props.meetingInfo;

  const readableTime = (h: number, m: number): string => {
    if (h > 12) {
      return `${h - 12}:${m === 0 ? '00' : m}PM`;
    }
    return `${h}:${m === 0 ? '00' : m}${h === 12 ? 'PM' : 'AM'}`;
  };

  const openOrClosed = (o: boolean): string => (o ? 'Open' : 'Closed');

  return (
    <MeetingDetailsWrapper className={props.inPopup ? 'popupDetails' : ''}>
      <div className="heading">
        {groupType.toUpperCase()} - {meetingName}
      </div>
      {!props.inPopup &&
        props.locationInfo && (
          <LocationDetails locationInfo={props.locationInfo} />
        )}
      <div>
        <span className="day">{Day[day]}</span>{' '}
        <span className="time">{readableTime(hour, min)}</span>{' '}
        <span className="meetingType">{type}</span>
      </div>
      <div>
        <span className="openOrClosed">{openOrClosed(open)} Meeting</span>
        {mensMeeting && <span className="special"> - Men's Meeting</span>}
        {womensMeeting && <span className="special"> - Women's Meeting</span>}
      </div>
      {meetingNotes && (
        <div className="meetingNotes">
          <span className="special">Notes:</span> {meetingNotes}
        </div>
      )}
    </MeetingDetailsWrapper>
  );
};

export default MeetingDetails;
