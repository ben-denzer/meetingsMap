import * as React from 'react';
import Meeting from '../../types/Meeting';
import MeetingLocation from '../../types/MeetingLocation';
import { MarkerPopupWrapper } from './MarkerPopupStyles';

interface Props {
  locationData: MeetingLocation;
  meetingsAtLocation: Meeting[];
}

const MarkerPopup: React.SFC<Props> = (props: Props) => {
  return <MarkerPopupWrapper>MarkerPopup Component</MarkerPopupWrapper>;
};

export default MarkerPopup;
