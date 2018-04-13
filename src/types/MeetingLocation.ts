import MapCoords from './MapCoords';

interface MeetingLocation {
  locationId: number;
  clubName?: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  coords: MapCoords;
  website?: string;
  phone?: string;
  locationNotes?: string;
}

const mockMeetingLocation: MeetingLocation = {
  locationId: 123,
  clubName: 'My Club',
  address: '123 Main St',
  city: 'My Town',
  state: 'NV',
  zip: '89023',
  coords: { lat: 35, lng: -115 },
  website: 'https://mywebsite.com',
  phone: '(555) 555-5555',
  locationNotes: 'here are some notes about this location'
};

export { mockMeetingLocation };
export default MeetingLocation;
