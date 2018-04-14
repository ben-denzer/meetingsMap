import styled from 'styled-components';

export const MeetingDetailsWrapper = styled.div`
  border-bottom: 1px solid black;
  font-size: 16px;
  padding: 10px;

  .heading {
    font-size: 18px;
    font-weight: bold;
  }

  .day {
    font-weight: bold;
  }

  .time {
    font-weight: bold;
  }

  .meetingType {
    font-style: italic;
  }

  .openOrClosed {
    font-style: italic;
  }

  &.popupDetails {
    font-size: 12px;
    border: 1px solid #222;
    margin: 3px 5px;
    padding: 2px;

    .heading {
      font-size: 12px;
    }
  }
`;
