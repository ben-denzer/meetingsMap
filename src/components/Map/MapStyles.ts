import styled from 'styled-components';
import {
  filterHeight,
  headerHeight,
  mobileWidth
} from '../../config/styleConfig';

export const MapWrapper = styled.div`
  width: 100%;
  height: calc(100vh - ${headerHeight}px - ${filterHeight}px);

  @media (min-width: ${mobileWidth}px) {
    height: 50vh;
  }
`;
