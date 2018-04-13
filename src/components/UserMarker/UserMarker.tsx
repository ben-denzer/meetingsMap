import * as React from 'react';
import { UserIcon } from './UserMarkerStyles';
const person = require('../../img/person.png');

interface Props {
  lat: number;
  lng: number;
}

const UserMarker: React.SFC<Props> = (props: Props) => {
  return <UserIcon src={person} />;
};

export default UserMarker;
