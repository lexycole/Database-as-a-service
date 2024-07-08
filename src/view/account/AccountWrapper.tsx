import * as React from 'react';
import { useRecoilState } from 'recoil';
import { appTheme } from '@/storage/ThemeAtom';
import { Container, Grid } from '@material-ui/core';
import { ContentWrapper } from '../ContentWrapper';

import getLang from '@/lang/Lang';
import { PresentationContainer } from '@/view/account/PresentationContainer';
import { TopFirmBlock } from '@/view/account/TopFirmBlock';
import { AccountInfoBlock } from '@/view/account/AccountInfoBlock';
import { accountDetailLoader } from '@/data/account/AccountDetailLoader';
import { useEffect, useState } from 'react';
import { accountState, userState } from '@/storage/AppAtom';
import {
  UseCompanyDataEdit,
  UsePreferredCompany,
} from '@/environment/Environment';

export function AccountWrapper() {
  const [user] = useRecoilState(userState);
  const [theme] = useRecoilState(appTheme);

  const [accountData, setAccountData] = useRecoilState(accountState);
  const [accountDataLoading, setAccountDataLoading] = useState<boolean>(false);
  const [isError, setError] = useState<boolean>(false);

  const userLoaded = user !== null;
  const accountDataLoaded = accountData !== null;

  useEffect(() => {
    if (!accountDataLoading && userLoaded && !accountDataLoaded) {
      setAccountDataLoading(true);
      accountDetailLoader()
        .then(({ data }) => {
          setAccountData(data);
          setAccountDataLoading(false);
          setError(false);
        })
        .catch(() => {
          setError(true);
          setAccountDataLoading(false);
        });
    }
  }, [userLoaded, accountDataLoaded]);

  return (
    <ContentWrapper title={getLang(`account`, `title`)}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            />
          </Grid>

          <AccountInfoBlock
            accountData={accountData}
            loadError={isError}
            user={user}
            theme={Boolean(theme)}
          />
          <TopFirmBlock />
        </Grid>

        {(UsePreferredCompany || UseCompanyDataEdit) && (
          <PresentationContainer theme={theme} />
        )}
      </Container>
    </ContentWrapper>
  );
}
