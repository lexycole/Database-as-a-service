import * as React from 'react';
import { FirmData, OtherFactList } from '../FirmProps';
import { OtherFactRow } from '../style/OtherFactStyle';
import { FirmDetailBox } from '../style/FirmStyle';
import getLang from '../../../lang/Lang';
import { DetailBoxTitle } from '../../../components/detail/BoxTitle';
import { BoxRows } from '../../../components/detail/BoxStyle';
import { useRecoilState } from 'recoil';
import { appTheme } from '@/storage/ThemeAtom';

function OtherFactContainer(props: OtherFactList) {
  return (
    <>
      <h3>{props.name}</h3>
      {props.data.map((item: string, key: number) => (
        <OtherFactRow key={key}>{item}</OtherFactRow>
      ))}
    </>
  );
}

export function OtherFact(props: { firmData: FirmData }) {
  const [theme] = useRecoilState(appTheme);

  return props.firmData.otherFactList === undefined ? null : (
    <FirmDetailBox id="firm-other-fact">
      {
        // todo vz nadpis sloupcu
      }
      <DetailBoxTitle title={getLang(`firmDetail`, `otherFactTitle`)} />
      <BoxRows t={Boolean(theme)}>
        {props.firmData.otherFactList.map(
          (item: OtherFactList, key: number) => (
            <OtherFactContainer key={key} {...item} />
          ),
        )}
      </BoxRows>
    </FirmDetailBox>
  );
}
