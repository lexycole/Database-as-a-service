import * as React from 'react';
import {
  CommonShareData,
  CommonShareList,
  ShareData,
} from '@/view/firm/FirmProps';
import {
  CommonShareRow,
  ShareBasicRow,
  ShareRow,
  ShareStocksRow,
} from '@/view/firm/style/ShareStyle';
import { PersonName } from '@/view/person/PersonName';
import { AddressValue } from '@/components/address/AddressValue';
import getLang from '@/lang/Lang';
import { GraphData } from '@/components/graph/GraphProps';
import { GraphPie } from '@/components/graph/GraphPie';
import { Box, TableCell, TableRow } from '@material-ui/core';
import { appTheme } from '@/storage/ThemeAtom';
import { useRecoilState } from 'recoil';
import { FormatNumber } from '@/formatter/Formatter';

export function ShareItem(props: ShareData) {
  return (
    <>
      <ShareRow>
        <TableCell colSpan={2} className="person-name">
          <PersonName {...props} />
        </TableCell>
        <TableCell colSpan={4}>
          {props.id && props.address && (
            <AddressValue addressData={props.address} />
          )}
        </TableCell>
      </ShareRow>
      <ShareRow borderBottom>
        <TableCell />
        <TableCell>{props.shareTypeName}</TableCell>
        <TableCell>{props.shareType}</TableCell>
        <TableCell className="value">
          {props.shareValue} {props.shareValuePercent}
        </TableCell>

        {(props.sharePaidValue || props.sharePaidPercent) && (
          <TableCell>{getLang(`firmDetail`, `shareSharePaid`)} :</TableCell>
        )}
        {(props.sharePaidValue || props.sharePaidPercent) && (
          <TableCell className="value">
            {props.sharePaidValue}
            {props.sharePaidPercent}
          </TableCell>
        )}
      </ShareRow>
    </>
  );
}

export function CommonShareItem(props: CommonShareList) {
  const [theme] = useRecoilState(appTheme);
  return (
    <>
      <CommonShareRow t={Boolean(theme)}>
        <TableCell colSpan={2}>{props.shareType}</TableCell>
        <TableCell colSpan={2} className="value">
          {props.shareValue} {props.shareValuePercent}
        </TableCell>
        {(props.sharePaidValue || props.sharePaidPercent) && (
          <>
            <TableCell>{getLang(`firmDetail`, `shareSharePaid`)}</TableCell>
            <TableCell className="value">
              {props.sharePaidValue}
              {props.sharePaidPercent}
            </TableCell>
          </>
        )}
      </CommonShareRow>
      {props.commonShareList &&
        props.commonShareList.map((item: CommonShareData, key: number) => (
          <ShareRow key={key}>
            <TableCell colSpan={2}>
              <PersonName {...item} />
            </TableCell>
            <TableCell colSpan={4} className="address-cell">
              {item.id && item.address && (
                <AddressValue addressData={item.address} />
              )}
            </TableCell>
          </ShareRow>
        ))}
    </>
  );
}

export function BasicShareItem(props: ShareData) {
  const [theme] = useRecoilState(appTheme);
  return (
    <ShareBasicRow t={Boolean(theme)}>
      <TableCell colSpan={3}>{props.shareType}</TableCell>
      <TableCell colSpan={3} className="value">
        {props.shareValue}
      </TableCell>
    </ShareBasicRow>
  );
}

export function StocksShareItem(props: ShareData) {
  const [theme] = useRecoilState(appTheme);
  return (
    <>
      <ShareStocksRow t={Boolean(theme)}>
        <TableCell colSpan={2}>{props.shareTypeName}</TableCell>
        <TableCell>{props.shareType}</TableCell>
        <TableCell className="value">{props.shareValue}</TableCell>
        <TableCell>{getLang(`firmDetail`, `shareStocksCount`)}</TableCell>
        <TableCell className="value">
          {FormatNumber(parseInt(props.stocksCount, 10))}
        </TableCell>
      </ShareStocksRow>
      <TableRow>
        {props.additional && (
          <TableCell colSpan={6}>{props.additional}</TableCell>
        )}
      </TableRow>
    </>
  );
}

export function ShareGraph(props: { data: GraphData[] }) {
  return props.data === [] ? null : (
    <Box height="300px">
      <GraphPie data={props.data} />
    </Box>
  );
}
