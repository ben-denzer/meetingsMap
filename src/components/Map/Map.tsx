import * as React from 'react';
import GoogleMapReact from 'google-map-react';
import { googleMapKey } from '../../config/keys';
import { LoadingWrapper, MapWrapper } from './MapStyles';
import MapMarker from '../MapMarker/MapMarker';

interface MapCoords {
  lat: number;
  lng: number;
}
interface Props {
  center: MapCoords;
  zoom: number;
}
interface State {
  userLocation: MapCoords | null;
  loading: boolean;
}

class SimpleMap extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      userLocation: null,
      loading: true
    };

    this.getDefaultCenter = this.getDefaultCenter.bind(this);
    this.getLocation = this.getLocation.bind(this);
    this.positionSuccess = this.positionSuccess.bind(this);
    this.positionError = this.positionError.bind(this);
    this.getLocation();
  }

  getDefaultCenter() {
    if (!this.state.userLocation) {
      return this.props.center;
    }
    const { lat, lng } = this.state.userLocation;
    return { lat, lng };
  }

  getLocation(): void {
    if ('geolocation' in window.navigator) {
      try {
        window.navigator.geolocation.getCurrentPosition(
          this.positionSuccess,
          this.positionError,
          { timeout: 10000 }
        );
      } catch (e) {
        this.setState({ loading: false });
      }
    } else {
      this.setState({ loading: false });
    }
  }

  positionSuccess(position: Position): void {
    const { coords } = position;
    const { latitude: lat, longitude: lng } = coords;
    this.setState({ loading: false, userLocation: { lat, lng } });
  }

  positionError(err: PositionError): void {
    this.setState({ loading: false });
    console.log('err', err);
  }

  render(): JSX.Element {
    const { loading, userLocation } = this.state;
    const center = this.getDefaultCenter();
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
            <MapMarker
              lat={userLocation.lat}
              lng={userLocation.lng}
              markerType="user"
            />
          )}
        </GoogleMapReact>
      </MapWrapper>
    );
  }
}

export default SimpleMap;
