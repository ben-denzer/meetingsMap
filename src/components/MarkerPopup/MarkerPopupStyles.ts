import styled from 'styled-components';
import { mobileWidth } from '../../config/styleConfig';

export const MarkerPopupWrapper = styled.div`
  height: 200px;
  width: 300px;
  font-size: 12px;
  background: white;
  border-radius: 10px;
  padding: 5px;
  overflow-y: scroll;

  @media (min-width: ${mobileWidth}px) {
    height: auto;
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    overflow-y: auto;
  }

  .clubName {
    font-size: 14px;
    font-weight: bold;
  }
`;
