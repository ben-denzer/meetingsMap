import styled from 'styled-components';
import { mobileWidth } from '../../config/styleConfig';

export const MapWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 60px);

  @media (min-width: ${mobileWidth}) {
    height: 50vh;
  }
`;
