import styled from 'styled-components';

export const MapMarkerWrapper = styled.div`
  position: relative;

  .markerPopup {
    position: absolute;
    top: 25px;
    height: 150px;
    width: 100px;
    overflow-y: auto;
    background: white;
    border-radius: 10px;
    padding: 5px;
  }

  img {
    height: 20px;
    width: auto;
  }
`;
