import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { useRouter } from 'next/router';
import { getHomeUrl } from '../link/HomeLink';
import { loggedState } from '@/storage/AppAtom';

function RequiresVisitor({
  children,
}: {
  children?: React.ReactElement | React.ReactElement[];
}) {
  const router = useRouter();
  const [isLogged] = useRecoilState(loggedState);

  useEffect(() => {
    if (isLogged) {
      router.push(getHomeUrl());
    }
  }, [isLogged]);

  return !isLogged ? <div>{children}</div> : <></>;
}

export default RequiresVisitor;
