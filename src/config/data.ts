import Day from '../types/Day';
import Meeting from '../types/Meeting';
import MeetingLocation from 'types/MeetingLocation';

export const hendersonMeetingLocations: MeetingLocation[] = [
  {
    locationId: 1,
    clubName: '51 Club',
    address: '46 Magnesium Street',
    city: 'Henderson',
    state: 'NV',
    zip: '89015',
    coords: { lat: 36.034193, lng: -114.985822 },
    locationNotes: 'Pacific/Water (behind gas station)'
  },
  {
    locationId: 2,
    address: '1785 E. Cactus Ave',
    city: 'Las Vegas',
    state: 'NV',
    zip: '89183',
    coords: { lat: 35.999518, lng: -115.128096 }
  },
  {
    locationId: 3,
    clubName: 'New Song Church',
    address: '1291 Cornet St',
    city: 'Henderson',
    state: 'NV',
    zip: '89052',
    coords: { lat: 35.979774, lng: -115.094369 }
  },
  {
    locationId: 4,
    clubName: 'Green Valley Club',
    address: '1481 W. Warm Springs #137',
    city: 'Henderson',
    state: 'NV',
    zip: '89014',
    coords: { lat: 36.055097, lng: -115.049697 },
    website: 'www.greenvalleyclub.org',
    phone: '(702) 433-9550'
  }
];

export const hendersonMeetings: Meeting[] = [
  {
    meetingId: 1,
    locationFk: 4,
    groupType: 'aa',
    meetingName: 'No Reservations III',
    day: Day.Tuesday,
    hour: 8,
    min: 15,
    type: 'Speaker Meeting',
    open: true
  },
  {
    meetingId: 2,
    locationFk: 1,
    groupType: 'aa',
    meetingName: 'Newcomers 4PM',
    day: Day.Monday,
    hour: 16,
    min: 0,
    type: 'Open Discussion',
    open: true
  },
  {
    meetingId: 3,
    meetingName: 'Newcomers 4PM',
    groupType: 'aa',
    locationFk: 1,
    day: Day.Tuesday,
    hour: 16,
    min: 0,
    type: 'Open Discussion',
    open: true
  },
  {
    meetingId: 4,
    meetingName: 'Newcomers 4PM',
    groupType: 'aa',
    locationFk: 1,
    day: Day.Wednesday,
    hour: 16,
    min: 0,
    type: 'Open Discussion',
    open: true
  },
  {
    meetingId: 5,
    meetingName: 'Newcomers 4PM',
    groupType: 'aa',
    locationFk: 1,
    day: Day.Thursday,
    hour: 16,
    min: 0,
    type: 'Open Discussion',
    open: true
  },
  {
    meetingId: 6,
    meetingName: 'Newcomers 4PM',
    groupType: 'aa',
    locationFk: 1,
    day: Day.Friday,
    hour: 16,
    min: 0,
    type: 'Open Discussion',
    open: true
  },
  {
    meetingId: 7,
    meetingName: 'Principles Before Personalities',
    groupType: 'aa',
    locationFk: 4,
    day: Day.Tuesday,
    hour: 20,
    min: 30,
    type: 'Open Discussion',
    open: true
  },
  {
    meetingId: 8,
    meetingName: 'Principles Before Personalities',
    groupType: 'aa',
    locationFk: 4,
    day: Day.Wednesday,
    hour: 20,
    min: 30,
    type: 'Literature Study',
    open: true
  },
  {
    meetingId: 9,
    meetingName: 'Quiet Minds Meditation',
    groupType: 'aa',
    locationFk: 4,
    day: Day.Wednesday,
    hour: 16,
    min: 0,
    type: 'Candlelight Meditation Meeting',
    open: true
  },
  {
    meetingId: 10,
    meetingName: "Men's Eating Meeting",
    groupType: 'aa',
    locationFk: 2,
    day: Day.Monday,
    type: "Men's Open Discussion",
    hour: 12,
    min: 15,
    open: true,
    mensMeeting: true
  },
  {
    meetingId: 11,
    meetingName: "Men's Eating Meeting",
    groupType: 'aa',
    locationFk: 2,
    type: "Men's Open Discussion",
    day: Day.Tuesday,
    hour: 12,
    min: 15,
    open: true,
    mensMeeting: true
  },
  {
    meetingId: 12,
    meetingName: "Men's Eating Meeting",
    groupType: 'aa',
    day: Day.Wednesday,
    locationFk: 2,
    type: "Men's Open Discussion",
    hour: 12,
    min: 15,
    open: true,
    mensMeeting: true
  },
  {
    meetingId: 13,
    meetingName: "Men's Eating Meeting",
    groupType: 'aa',
    day: Day.Thursday,
    locationFk: 2,
    type: "Men's Open Discussion",
    hour: 12,
    min: 15,
    open: true,
    mensMeeting: true
  },
  {
    meetingId: 14,
    meetingName: "Men's Eating Meeting",
    groupType: 'aa',
    locationFk: 2,
    day: Day.Friday,
    type: "Men's Open Discussion",
    hour: 12,
    min: 15,
    open: true,
    mensMeeting: true
  },
  {
    meetingId: 15,
    meetingName: 'Women Standing Sober',
    groupType: 'aa',
    locationFk: 1,
    day: Day.Tuesday,
    type: "Women's Open Discussion",
    hour: 18,
    min: 30,
    open: true,
    womensMeeting: true
  },
  {
    meetingId: 16,
    meetingName: 'Daily Reflections',
    groupType: 'aa',
    locationFk: 4,
    day: Day.Sunday,
    type: 'Step Study',
    hour: 10,
    min: 0,
    open: true
  },
  {
    meetingId: 17,
    meetingName: 'Daily Reflections',
    groupType: 'aa',
    locationFk: 4,
    day: Day.Monday,
    type: 'Big Book Study',
    hour: 10,
    min: 0,
    open: true
  },
  {
    meetingId: 18,
    meetingName: 'Daily Reflections',
    groupType: 'aa',
    locationFk: 4,
    day: Day.Tuesday,
    type: 'Speaker Open Discussion',
    hour: 10,
    min: 0,
    open: true
  },
  {
    meetingId: 19,
    meetingName: 'Daily Reflections',
    groupType: 'aa',
    locationFk: 4,
    day: Day.Wednesday,
    type: 'Newcomers Open Discussion',
    hour: 10,
    min: 0,
    open: true
  },
  {
    meetingId: 20,
    meetingName: 'Daily Reflections',
    groupType: 'aa',
    locationFk: 4,
    day: Day.Thursday,
    type: 'Open Discussion',
    hour: 10,
    min: 0,
    open: true
  },
  {
    meetingId: 21,
    meetingName: 'Daily Reflections',
    groupType: 'aa',
    locationFk: 4,
    day: Day.Friday,
    type: 'Open Discussion',
    hour: 10,
    min: 0,
    open: true
  },
  {
    meetingId: 22,
    meetingName: 'Anthem Sunrise',
    groupType: 'aa',
    locationFk: 3,
    day: Day.Tuesday,
    type: 'Open Discussion',
    hour: 6,
    min: 45,
    open: true
  },
  {
    meetingId: 23,
    meetingName: 'Anthem Sunrise',
    groupType: 'aa',
    locationFk: 3,
    day: Day.Wednesday,
    type: 'Open Discussion',
    hour: 6,
    min: 45,
    open: true
  },
  {
    meetingId: 24,
    meetingName: 'Anthem Sunrise',
    groupType: 'aa',
    locationFk: 3,
    day: Day.Thursday,
    type: 'Open Discussion',
    hour: 6,
    min: 45,
    open: true
  }
];
