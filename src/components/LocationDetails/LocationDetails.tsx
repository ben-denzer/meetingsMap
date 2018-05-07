import * as React from 'react';
import { LocationDetailsWrapper } from './LocationDetailsStyles';
import MeetingLocation from '../../types/MeetingLocation';

interface Props {
  locationInfo: MeetingLocation;
}

const LocationDetails: React.SFC<Props> = (props: Props) => {
  const { clubName, address, city, state, zip, website, phone, locationNotes } = props.locationInfo;

  return (
    <LocationDetailsWrapper>
      {clubName && <div className="clubName">{clubName}</div>}
      <div className="address">
        {address} - {city}, {state} {zip}
      </div>
      <div>
        {website && <a href={website}>{website}</a>}
        {website && phone && ' - '}
        {phone && <span className="phone">{phone}</span>}
      </div>
      <div className="locationNotes">{locationNotes}</div>
    </LocationDetailsWrapper>
  );
};

export default LocationDetails;
