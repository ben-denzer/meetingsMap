import * as React from 'react';
import Meeting from '../../types/Meeting';
import MeetingLocation from '../../types/MeetingLocation';

const triangle = require('../../img/triangle.jpg');
import { MapMarkerWrapper } from './MapMarkerStyles';
import MarkerPopup from '../MarkerPopup/MarkerPopup';

interface Props {
  $hover?: boolean;
  lat: number;
  lng: number;
  locationData: MeetingLocation;
  markerType: string;
  meetingsAtLocation: Meeting[];
}

const markerTypes = {
  meeting: triangle
};

const MapMarker: React.SFC<Props> = (props: Props) => {
  const { $hover: hover, locationData, markerType, meetingsAtLocation } = props;
  if (!meetingsAtLocation || !meetingsAtLocation.length) {
    return null;
  }
  return (
    <MapMarkerWrapper hover={hover}>
      <img src={markerTypes[markerType]} />
      {hover && (
        <MarkerPopup
          locationData={locationData}
          meetingsAtLocation={meetingsAtLocation}
        />
      )}
    </MapMarkerWrapper>
  );
};

export default MapMarker;
