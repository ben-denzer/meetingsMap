import { hendersonMeetings, hendersonMeetingLocations } from '../config/data';
import Meeting from '../types/Meeting';
import MeetingLocation from '../types/MeetingLocation';

export function getLocations(): Promise<MeetingLocation[]> {
  return new Promise(resolve => {
    resolve(hendersonMeetingLocations);
  });
}

export function getMeetings(): Promise<Meeting[]> {
  return new Promise(resolve => {
    resolve(hendersonMeetings);
  });
}
