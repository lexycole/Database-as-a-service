import * as React from 'react';
import { useRecoilState } from 'recoil';
import getLang from '../lang/Lang';
import { ContentWrapper } from '../view/ContentWrapper';
import { accountState, loggedState, userState } from '../storage/AppAtom';
import { useEffect, useState } from 'react';
import { logoutLoader } from '@/data/account/LogoutLoader';
import { isDevelopment } from '@/environment/Environment';
import { clearTokenStorage } from '@/storage/TokenStorage';
import { NextSeo } from 'next-seo';

function Logout() {
  const [isLogged, setUserLogged] = useRecoilState(loggedState);
  const [loading, setLoading] = useState(false);
  const [, setAccountData] = useRecoilState(accountState);
  const [, setUser] = useRecoilState(userState);

  useEffect(() => {
    if (isLogged && loading === false) {
      setLoading(true);

      logoutLoader()
        .then(({ data }) => {
          clearTokenStorage();
          setUserLogged(false);
          setAccountData(null);
          setUser(null);
        })
        .catch(() => {
          if (isDevelopment()) {
            // todo vz debug
            clearTokenStorage();
            setUserLogged(false);
            setAccountData(null);
            setUser(null);
          }
          setLoading(false);
        });
    }
  }, []);

  return (
    <ContentWrapper title={getLang(`logout`, `info`)}>
      <NextSeo
        title={getLang('pageSEO', 'logout').title}
        description={getLang('pageSEO', 'logout').description}
      />
      <p className="font-[500] text-xl mt-[10vh]">
        {getLang(`logout`, `additional`)}
      </p>
    </ContentWrapper>
  );
}

export default Logout;
