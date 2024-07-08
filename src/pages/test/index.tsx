import * as React from 'react';
import { WebLink } from '../../components/link/WebLink';
import { Title } from '../../../styles/Style';

function Test() {
  return (
    <>
      <Title>Static props</Title>
      {/* <WebLink href={ "test/token" }>token</WebLink> */}
      <WebLink href="test/firm">firm list</WebLink>
      {/* <WebLink href={ "test/recoil" }>recoil</WebLink> */}
    </>
  );
}

export default Test;
