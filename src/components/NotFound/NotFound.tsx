import * as React from 'react';
import { NotFoundWrapper } from './NotFoundStyles';

interface Props {}

const NotFound: React.SFC<Props> = (props: Props) => {
  return (
    <NotFoundWrapper>NotFound Component</NotFoundWrapper>
  );
};

export default NotFound;
