import styled from 'styled-components';

interface Props {
  hover?: boolean;
}

export const MapMarkerWrapper = styled.div`
  position: relative;
  z-index: ${(p: Props) => (p.hover ? '2' : '1')};

  img {
    height: 20px;
    width: auto;
    position: relative;
  }
`;
