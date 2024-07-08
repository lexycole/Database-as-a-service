import * as React from 'react';
import { EconomicActivityData, FirmData } from '../FirmProps';
import { NaceRow } from '../style/NaceStyle';
import { DetailBoxSubTitle } from '../../../components/detail/BoxTitle';
import { BoxRows } from '../../../components/detail/BoxStyle';
import getLang from '../../../lang/Lang';
import { useRecoilState } from 'recoil';
import { appTheme } from '@/storage/ThemeAtom';

export function EconomicActivity(props: { firmData: FirmData }) {
  const [theme] = useRecoilState(appTheme);

  return props.firmData.business.economicActivityList === undefined ? null : (
    <>
      <DetailBoxSubTitle
        noMargin
        noBorderRadius
        title={
          getLang(`firmDetail`, `economicActivityTitle`) +
          props.firmData.business.economicActivityName
        }
        smallFont
      />
      <BoxRows t={Boolean(theme)} noPadding>
        {props.firmData.business.economicActivityList.map(
          (item: EconomicActivityData, key: number) => (
            <NaceRow
              odd={key % 2 !== 0}
              key={key}
              isMain={item.mainActivity}
              t={theme}
            >
              <span className="label">{item.code}</span>
              <span className="value">{item.name}</span>
            </NaceRow>
          ),
        )}
      </BoxRows>
    </>
  );
}
