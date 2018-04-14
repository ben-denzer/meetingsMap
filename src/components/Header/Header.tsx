import * as React from 'react';
import { Link } from 'react-router-dom';
import { HeaderWrapper } from './HeaderStyles';

interface Props {}

const Header: React.SFC<Props> = (props: Props) => {
  return (
    <HeaderWrapper>
      <Link to="/">Home</Link>
      {/* <Link to="/enthusiasm">Enthusiasm</Link> */}
      <Link to="/map">Map</Link>
    </HeaderWrapper>
  );
};

export default Header;
