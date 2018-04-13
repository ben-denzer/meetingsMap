enum Day {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday
}

interface Meeting {
  locationFk: number;
  meetingType: string;
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
  locationFk: 12,
  meetingType: 'aa',
  meetingName: 'My New Meeting',
  day: Day.Monday,
  hour: 12,
  min: 0,
  type: 'Big Book Study',
  open: true,
  meetingNotes: 'Here are some notes for the meeting'
};

export { Day, mockMeeting };
export default Meeting;
