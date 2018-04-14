import * as React from 'react';
import GoogleMapReact from 'google-map-react';

import { googleMapKey } from '../../config/keys';
import { getLocations, getMeetings } from '../../api/getData';

import MapCoords from '../../types/MapCoords';
import MeetingLocation from '../../types/MeetingLocation';
import Meeting from '../../types/Meeting';

import { MapWrapper } from './MapStyles';
import MapMarker from '../MapMarker/MapMarker';
import UserMarker from '../UserMarker/UserMarker';

interface Props {
  defaultCenter: MapCoords;
  defaultZoom: number;
}

interface State {
  center: MapCoords | undefined; // Can't be null for google-map-react
  hoveredId: number | null;
  meetingLocations: MeetingLocation[];
  meetings: Meeting[];
  selectedLocation: number | null;
  userLocation: MapCoords | null;
  zoom: number | undefined; // Can't be null for google-map-react
}

class SimpleMap extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      center: undefined,
      hoveredId: null,
      meetingLocations: [],
      meetings: [],
      selectedLocation: null,
      userLocation: null,
      zoom: undefined
    };

    this.getData = this.getData.bind(this);
    this.getUserLocation = this.getUserLocation.bind(this);
    this.getUserLocationSuccess = this.getUserLocationSuccess.bind(this);
    this.getUserLocationError = this.getUserLocationError.bind(this);
    this.hidePopup = this.hidePopup.bind(this);
    this.init = this.init.bind(this);
    this.selectLocation = this.selectLocation.bind(this);
    this.showMeetingLocations = this.showMeetingLocations.bind(this);
    this.init();
  }

  init(): void {
    this.getUserLocation();
    this.getData();
  }

  getData(): void {
    Promise.all([getLocations(), getMeetings()])
      .then(([meetingLocations, meetings]) => {
        this.setState({ meetingLocations, meetings });
      })
      .catch(e => console.log(e));
  }

  getUserLocation(): void {
    if ('geolocation' in window.navigator) {
      try {
        window.navigator.geolocation.getCurrentPosition(
          this.getUserLocationSuccess,
          this.getUserLocationError,
          { enableHighAccuracy: true, timeout: 10000 }
        );
      } catch (e) {
        console.log(e);
      }
    } else {
      console.log('no geolocation');
    }
  }

  getUserLocationSuccess(position: Position): void {
    const { coords } = position;
    const { latitude: lat, longitude: lng } = coords;
    this.setState({ center: { lat, lng }, userLocation: { lat, lng } });
  }

  getUserLocationError(err: PositionError): void {
    console.log('err', err);
  }

  hidePopup(): void {
    if (!this.state.selectedLocation) {
      return;
    }
    this.setState({ selectedLocation: null });
  }

  selectLocation(id: number): void {
    const locationCoords: MapCoords = this.state.meetingLocations.filter(
      (m: MeetingLocation) => {
        return m.locationId === id && m;
      }
    )[0].coords;
    this.setState({ center: locationCoords, selectedLocation: id, zoom: 16 });
  }

  showMeetingLocations(
    locations: MeetingLocation[],
    meetings: Meeting[]
  ): JSX.Element[] {
    return locations.map(location => {
      const meetingsAtLocation: Meeting[] = meetings.filter(
        meeting => meeting.locationFk === location.locationId
      );
      return (
        <MapMarker
          key={location.locationId}
          lat={location.coords.lat}
          lng={location.coords.lng}
          locationData={location}
          markerType="meeting"
          meetingsAtLocation={meetingsAtLocation}
          selectLocation={this.selectLocation}
          selectedLocation={this.state.selectedLocation}
        />
      );
    });
  }

  render(): JSX.Element {
    const {
      center,
      meetingLocations,
      meetings,
      userLocation,
      zoom
    } = this.state;
    const locations = this.showMeetingLocations(meetingLocations, meetings);
    console.log('zoom is', zoom);
    return (
      <MapWrapper onClick={this.hidePopup}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: googleMapKey }}
          center={center}
          defaultCenter={this.props.defaultCenter}
          defaultZoom={this.props.defaultZoom}
          resetBoundsOnResize={true}
          zoom={zoom}
        >
          {userLocation && (
            <UserMarker lat={userLocation.lat} lng={userLocation.lng} />
          )}
          {locations}
        </GoogleMapReact>
      </MapWrapper>
    );
  }
}

export default SimpleMap;
