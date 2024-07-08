import * as React from 'react';
import getLang from '@/lang/Lang';
import { Grid } from '@material-ui/core';
import { AccountInfoCard } from '@/view/account/style/AccountStyle';
import { CARD_HEADER_COLOR_BLUE } from '../../../styles/BaseStyle';
import { appTheme } from '@/storage/ThemeAtom';
import { useRecoilState } from 'recoil';

export function TopFirmBlock() {
  const [theme] = useRecoilState(appTheme);

  return (
    <Grid item xs={12} md={5}>
      <AccountInfoCard
        h={250}
        t={Boolean(theme)}
        headerBackground={CARD_HEADER_COLOR_BLUE}
      >
        <div className="header">{getLang(`account`, `top`)}</div>
        <div className="content" style={{ padding: '4rem 2rem' }}>
          {getLang(`account`, `topInfo1`)}
          <br />
          {getLang(`account`, `topInfo2`)}
        </div>
      </AccountInfoCard>
    </Grid>
  );
}
