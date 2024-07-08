import * as React from 'react';
import { FirmData, StatutoryData, StatutoryList } from '../FirmProps';
import { StatutoryRow } from '../style/StatutoryStyle';
import { RelationLink } from '../../../components/link/RelationLink';
import {
  BoxHeaderCell,
  BoxRowHeader,
  BoxRows,
} from '../../../components/detail/BoxStyle';
import { UcFirst } from '../../../formatter/Formatter';
import { useRecoilState } from 'recoil';
import { appTheme } from '@/storage/ThemeAtom';
import { AddressValue } from '@/components/address/AddressValue';
import { StatutorySpacer } from '@/view/firm/style/RegisterStyle';

function StatutoryName(props: StatutoryData) {
  const visibleAge: string =
    props.visible && props.age ? ` (${props.age})` : ``;
  return (
    <>
      {props.visible ? (
        <RelationLink {...props} name={props.name} textAfter={visibleAge} />
      ) : (
        props.name
      )}
    </>
  );
}

function StatutoryItem(props: StatutoryData & { styleOdd: boolean }) {
  const [theme] = useRecoilState(appTheme);

  return (
    <StatutoryRow t={theme} styleOdd={props.styleOdd}>
      <div>
        <StatutoryName {...props} />
      </div>
      <div>{props.department}</div>
      <div>
        {props.id && props.address && (
          <AddressValue addressData={props.address} />
        )}
      </div>
    </StatutoryRow>
  );
}

function StatutoryContainer(props: {
  statutoryList: StatutoryList;
  theme: boolean;
  first: boolean;
}) {
  const [theme] = useRecoilState(appTheme);
  return (
    <>
      {!props.first && <StatutorySpacer t={Boolean(theme)} />}
      {props.statutoryList.name && (
        <BoxRowHeader t={Boolean(props.theme)} noBorder>
          <BoxHeaderCell>{UcFirst(props.statutoryList.name)}</BoxHeaderCell>
        </BoxRowHeader>
      )}
      {props.statutoryList.data.map((item: StatutoryData, key: number) => (
        <StatutoryItem key={key} {...item} styleOdd={key % 2 !== 0} />
      ))}
    </>
  );
}

export function Statutory(props: { firmData: FirmData }) {
  const [theme] = useRecoilState(appTheme);

  return props.firmData.authority.statutoryList === undefined ? null : (
    <BoxRows t={Boolean(theme)} noPadding>
      {props.firmData.authority.statutoryList.map(
        (item: StatutoryList, key: number) => (
          <StatutoryContainer
            key={key}
            statutoryList={item}
            theme={Boolean(theme)}
            first={key === 0}
          />
        ),
      )}
    </BoxRows>
  );
}
