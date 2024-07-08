import { appTheme } from '@/storage/ThemeAtom';
import * as React from 'react';
import { RegistrationInfoCard } from './style/RegistrationStyle';
import getLang from '../../lang/Lang';
import { useRecoilState } from 'recoil';
import {
  CARD_BACKGROUND_COLOR_BLUE,
  CARD_BACKGROUND_COLOR_GREEN,
  CARD_HEADER_COLOR_BLUE,
} from '../../../styles/BaseStyle';

export function RegistrationInfo() {
  const [theme] = useRecoilState(appTheme);

  return (
    <>
      <RegistrationInfoCard
        t={theme}
        backgroundColor={CARD_BACKGROUND_COLOR_GREEN}
      >
        <div className="header">{getLang(`registration`, `benefitsTitle`)}</div>
        <div className="content">
          <ul>
            <li>{getLang(`registration`, `benefitsItem1`)}</li>
            <li>{getLang(`registration`, `benefitsItem2`)}</li>
          </ul>
        </div>
      </RegistrationInfoCard>
      <RegistrationInfoCard
        t={theme}
        headerBackground={CARD_HEADER_COLOR_BLUE}
        backgroundColor={CARD_BACKGROUND_COLOR_BLUE}
      >
        <div className="header">
          {getLang(`registration`, `extendedAccountTitle`)}
        </div>
        <div className="content">
          <ul>
            <li>{getLang(`registration`, `extendedAccountItem1`)}</li>
            <li>{getLang(`registration`, `extendedAccountItem2`)}</li>
            <li>{getLang(`registration`, `extendedAccountItem3`)}</li>
            <li>{getLang(`registration`, `extendedAccountItem4`)}</li>
          </ul>
        </div>
      </RegistrationInfoCard>
    </>
  );
}
