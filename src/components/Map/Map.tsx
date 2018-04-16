import * as React from 'react';
import GoogleMapReact from 'google-map-react';

import { googleMapKey } from '../../config/keys';
import { getLocations, getMeetings } from '../../api/getData';

import Day from '../../types/Day';
import Filters from '../../types/Filters';
import MapCoords from '../../types/MapCoords';
import MeetingLocation from '../../types/MeetingLocation';
import Meeting from '../../types/Meeting';
import { mobileWidth } from '../../config/styleConfig';

import { MapWrapper } from './MapStyles';
import MapFilterBar from '../MapFilterBar/MapFilterBar';
import MapMarker from '../MapMarker/MapMarker';
import MeetingList from '../MeetingList/MeetingList';
import UserMarker from '../UserMarker/UserMarker';

interface Props {
  defaultCenter: MapCoords;
  defaultZoom: number;
}

interface State {
  center: MapCoords | undefined; // Can't be null for google-map-react
  filters: Filters;
  isMobile: boolean;
  meetingLocations: MeetingLocation[];
  meetings: Meeting[];
  selectedLocation: number | null;
  userLocation: MapCoords | null;
  zoom: number;
}

class SimpleMap extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      center: undefined,
      filters: {
        dayOfWeek: Day[Day[new Date().getDay()]]
      },
      isMobile: true,
      meetingLocations: [],
      meetings: [],
      selectedLocation: null,
      userLocation: null,
      zoom: 10
    };

    const boundFunctions = [
      'checkForMobile',
      'filterChanged',
      'getData',
      'getUserLocation',
      'getUserLocationError',
      'getUserLocationSuccess',
      'hidePopup',
      'init',
      'selectLocation',
      'showMeetingLocations'
    ];

    boundFunctions.forEach((a: string): void => (this[a] = this[a].bind(this)));
    // this.checkForMobile = this.checkForMobile.bind(this);
    // this.filterChanged = this.filterChanged.bind(this);
    // this.getData = this.getData.bind(this);
    // this.getUserLocation = this.getUserLocation.bind(this);
    // this.getUserLocationSuccess = this.getUserLocationSuccess.bind(this);
    // this.getUserLocationError = this.getUserLocationError.bind(this);
    // this.hidePopup = this.hidePopup.bind(this);
    // this.init = this.init.bind(this);
    // this.selectLocation = this.selectLocation.bind(this);
    // this.showMeetingLocations = this.showMeetingLocations.bind(this);
    this.init();
  }

  componentDidMount() {
    this.checkForMobile();
    window.addEventListener('resize', this.checkForMobile);
  }

  init(): void {
    this.getUserLocation();
    this.getData();
  }

  checkForMobile(): void {
    if (window.innerWidth < mobileWidth) {
      this.setState({ isMobile: true });
    } else {
      this.setState({ isMobile: false });
    }
  }

  filterChanged(e: React.FormEvent<HTMLSelectElement>): void {
    const { dataset, value } = e.currentTarget;
    const filterId = dataset.filterId as string;
    const filters = { ...this.state.filters, [filterId]: value };
    this.setState({ filters });
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
          { /* enableHighAccuracy: true, */ timeout: 10000 }
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
    this.setState({ zoom: 8 }, () => {
      this.setState({ center: locationCoords, selectedLocation: id, zoom: 14 });
    });
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
          isMobile={this.state.isMobile}
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
    console.log(this.state.filters.dayOfWeek);
    const {
      center,
      filters,
      isMobile,
      meetingLocations,
      meetings,
      userLocation,
      zoom
    } = this.state;
    const locations = this.showMeetingLocations(meetingLocations, meetings);
    return (
      <MapWrapper onClick={this.hidePopup}>
        <MapFilterBar filterChanged={this.filterChanged} filters={filters} />
        <GoogleMapReact
          bootstrapURLKeys={{ key: googleMapKey }}
          center={center}
          defaultCenter={this.props.defaultCenter}
          resetBoundsOnResize={true}
          zoom={zoom}
        >
          {userLocation && (
            <UserMarker lat={userLocation.lat} lng={userLocation.lng} />
          )}
          {locations}
        </GoogleMapReact>
        {!isMobile && (
          <MeetingList
            meetingLocations={meetingLocations}
            meetings={meetings}
          />
        )}
      </MapWrapper>
    );
  }
}

export default SimpleMap;
