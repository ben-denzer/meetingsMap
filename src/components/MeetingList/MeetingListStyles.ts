import styled from 'styled-components';
import { headerHeight } from '../../config/styleConfig';

export const MeetingListWrapper = styled.div`
  height: calc(50vh - ${headerHeight}px);
  overflow: auto;
`;
