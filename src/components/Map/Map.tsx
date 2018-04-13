import * as React from 'react';
import GoogleMapReact from 'google-map-react';

import { googleMapKey } from '../../config/keys';
import { getLocations, getMeetings } from '../../api/getData';

import MapCoords from '../../types/MapCoords';
import MeetingLocation from '../../types/MeetingLocation';
import Meeting from '../../types/Meeting';

import { LoadingWrapper, MapWrapper } from './MapStyles';
import MapMarker from '../MapMarker/MapMarker';
import UserMarker from '../UserMarker/UserMarker';

interface Props {
  center: MapCoords;
  zoom: number;
}

interface State {
  hoveredId: number | null;
  loading: boolean;
  meetingLocations: MeetingLocation[];
  meetings: Meeting[];
  userLocation: MapCoords | null;
}

class SimpleMap extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      hoveredId: null,
      loading: true,
      meetingLocations: [],
      meetings: [],
      userLocation: null
    };

    this.getData = this.getData.bind(this);
    this.getDefaultCenter = this.getDefaultCenter.bind(this);
    this.getUserLocation = this.getUserLocation.bind(this);
    this.getUserLocationSuccess = this.getUserLocationSuccess.bind(this);
    this.getUserLocationError = this.getUserLocationError.bind(this);
    this.init = this.init.bind(this);
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

  getDefaultCenter(): MapCoords {
    if (!this.state.userLocation) {
      return this.props.center;
    }
    const { lat, lng } = this.state.userLocation;
    return { lat, lng };
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
        this.setState({ loading: false });
      }
    } else {
      this.setState({ loading: false });
    }
  }

  getUserLocationSuccess(position: Position): void {
    const { coords } = position;
    const { latitude: lat, longitude: lng } = coords;
    this.setState({ loading: false, userLocation: { lat, lng } });
  }

  getUserLocationError(err: PositionError): void {
    this.setState({ loading: false });
    console.log('err', err);
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
        />
      );
    });
  }

  render(): JSX.Element {
    const { meetingLocations, meetings, loading, userLocation } = this.state;
    const center = this.getDefaultCenter();
    const locations = this.showMeetingLocations(meetingLocations, meetings);

    if (loading) {
      return <LoadingWrapper>Loading...</LoadingWrapper>;
    }
    return (
      <MapWrapper>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: googleMapKey
          }}
          defaultCenter={center}
          defaultZoom={this.props.zoom}
          resetBoundsOnResize={true}
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
