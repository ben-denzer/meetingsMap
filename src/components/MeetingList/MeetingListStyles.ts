import styled from 'styled-components';
import { filterHeight, headerHeight } from '../../config/styleConfig';

export const MeetingListWrapper = styled.div`
  height: calc(50vh - ${headerHeight}px - ${filterHeight}px);
  overflow: auto;
`;
