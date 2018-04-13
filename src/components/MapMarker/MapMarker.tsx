import * as React from 'react';
import { MapMarkerWrapper } from './MapMarkerStyles';
const person = require('../../img/person.png');
const triangle = require('../../img/triangle.jpg');

interface Props {
  lat: number;
  lng: number;
  markerType: string;
  $hover?: boolean;
}

const markerTypes = {
  user: person,
  aa: triangle
};

const MapMarker: React.SFC<Props> = (props: Props) => {
  const { markerType, $hover: hover } = props;
  return (
    <MapMarkerWrapper>
      {hover && <div className="markerPopup">Popup</div>}
      <img src={markerTypes[markerType]} />
    </MapMarkerWrapper>
  );
};

export default MapMarker;
