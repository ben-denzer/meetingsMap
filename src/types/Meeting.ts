import Day from './Day';

interface Meeting {
  meetingId: number;
  locationFk: number;
  groupType: string;
  meetingName: string;
  day: Day;
  hour: number;
  min: number;
  type: string;
  open: boolean;
  meetingNotes?: string;
  mensMeeting?: boolean;
  womensMeeting?: boolean;
}

const mockMeeting = {
  meetingId: 1,
  locationFk: 12,
  groupType: 'aa',
  meetingName: 'My New Meeting',
  day: Day.Monday,
  hour: 12,
  min: 0,
  type: 'Big Book Study',
  open: true,
  meetingNotes: 'Here are some notes for the meeting'
};

export { mockMeeting };
export default Meeting;
