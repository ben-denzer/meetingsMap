import * as React from 'react';
import { MeetingListWrapper } from './MeetingListStyles';

interface Props {}

const MeetingList: React.SFC<Props> = (props: Props) => {
  return (
    <MeetingListWrapper>MeetingList Component</MeetingListWrapper>
  );
};

export default MeetingList;
