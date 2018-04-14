import styled from 'styled-components';

const show = `
  height: 200px;
  width: 300px;
  z-index: 2;

  .popupWrapper {
    display: block;
  }
`;

export const MapMarkerWrapper = styled.div`
  position: relative;
  height: 20px;
  width: 20px;
  z-index: 1;

  img {
    height: 20px;
    width: auto;
    position: absolute;
    top: 0;
    left: 0;
  }

  .popupWrapper {
    display: none;
  }

  &:hover {
    ${show};
  }
  &.showPopup {
    ${show};
  }
`;
