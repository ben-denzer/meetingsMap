import * as React from 'react';
import Meeting, { Day } from '../../types/Meeting';
import { PopupMeetingDetailsWrapper } from './PopupMeetingDetailsStyles';

interface Props {
  meetingInfo: Meeting;
}

const PopupMeetingDetails: React.SFC<Props> = (props: Props) => {
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
    <PopupMeetingDetailsWrapper>
      <div className="heading">
        {groupType.toUpperCase()} - {meetingName}
      </div>
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
    </PopupMeetingDetailsWrapper>
  );
};

export default PopupMeetingDetails;
