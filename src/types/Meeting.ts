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

export { Day };
export default Meeting;
