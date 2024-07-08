import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { loggedState } from '@/storage/AppAtom';
import { useRouter } from 'next/router';
import { getLoginUrl } from '../link/LoginLink';

function RequiresAuth({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}) {
  const router = useRouter();
  const [isLogged] = useRecoilState(loggedState);

  useEffect(() => {
    if (!isLogged) {
      router.push(getLoginUrl());
    }
  }, [isLogged]);

  return isLogged ? <div>{children}</div> : <></>;
}

export default RequiresAuth;
