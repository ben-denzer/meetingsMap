import * as React from 'react';
import Meeting from '../../types/Meeting';
import MeetingLocation from '../../types/MeetingLocation';

const triangle = require('../../img/triangle.jpg');
import { MapMarkerWrapper } from './MapMarkerStyles';
import MarkerPopup from '../MarkerPopup/MarkerPopup';

interface Props {
  $hover?: boolean;
  isMobile: boolean;
  lat: number;
  lng: number;
  locationData: MeetingLocation;
  markerType: string;
  meetingsAtLocation: Meeting[];
  selectedLocation: number | null;
  selectLocation(id: number): void;
}

const markerTypes = {
  meeting: triangle
};

const MapMarker: React.SFC<Props> = (props: Props) => {
  const {
    isMobile,
    locationData,
    markerType,
    meetingsAtLocation,
    selectLocation,
    selectedLocation
  } = props;

  if (!meetingsAtLocation || !meetingsAtLocation.length) {
    return null;
  }

  const popupStatus =
    selectedLocation === locationData.locationId && isMobile ? 'showPopup' : '';

  return (
    <MapMarkerWrapper
      className={popupStatus}
      onClick={() => selectLocation(locationData.locationId)}
    >
      <img src={markerTypes[markerType]} />
      <div className="popupWrapper">
        <MarkerPopup
          isMobile={isMobile}
          locationData={locationData}
          meetingsAtLocation={meetingsAtLocation}
        />
      </div>
    </MapMarkerWrapper>
  );
};

export default MapMarker;
