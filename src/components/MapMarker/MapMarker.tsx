import * as React from 'react';
import { MapMarkerWrapper } from './MapMarkerStyles';
const person = require('../../img/person.png');

interface Props {
  lat: number;
  lng: number;
  markerType: string;
}

const markerTypes = {
  user: person
};

const MapMarker: React.SFC<Props> = (props: Props) => {
  return (
    <MapMarkerWrapper>
      <img src={markerTypes[props.markerType]} />;
    </MapMarkerWrapper>
  );
};

export default MapMarker;
