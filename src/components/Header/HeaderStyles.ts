import styled from 'styled-components';
import { headerHeight } from '../../config/styleConfig';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: ${headerHeight}px;
  background: #222;
  color: #f7f7f7;

  a {
    font-size: 20px;
    color: white;
    margin: 5px;
  }
`;
