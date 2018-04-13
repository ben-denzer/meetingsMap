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

export default MeetingLocation;
