import * as React from 'react';
import {
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
} from '@material-ui/core';
import Link from 'next/link';
import { FirmCountData, FirmCountProps } from './FirmCountProps';
import { countryToFlag } from '../../components/address/AddressValue';
import getLang from '../../lang/Lang';
import { FormatNumber } from '../../formatter/Formatter';
import { getTopSearchFirmHref } from '../../components/link/TopSearchLink';
import { appTheme } from '@/storage/ThemeAtom';
import { useRecoilState } from 'recoil';

import { FirmCountContainerStyled } from './style/FirmCountStyle';
import { PRIMARY_COLOR } from '../../../styles/BaseStyle';

function IdenticalDataCell(props: { identical: boolean }) {
  return (
    <>{props.identical ? getLang(`form`, `yes`) : getLang(`form`, `no`)}</>
  );
}

function FirmCountRow(props: FirmCountData) {
  if (props.amountEshop === 0 && props.amount < 10) {
    return null;
  }

  return (
    <TableRow key={props.country.code}>
      <TableCell component="th" scope="row">
        {countryToFlag(props.country.code)}{' '}
        <span style={{ fontWeight: 600, marginLeft: 10 }}>
          {props.country.name}
        </span>
      </TableCell>
      <TableCell align="center">{FormatNumber(props.amount)}</TableCell>
      <TableCell align="center">{FormatNumber(props.amountEshop)}</TableCell>
      <TableCell align="center">
        <IdenticalDataCell identical={props.identical} />
      </TableCell>
      <TableCell align="center">
        <Link href={getTopSearchFirmHref(props.country)}>
          <Button
            size="small"
            variant="contained"
            color="primary"
            disableElevation
            style={{ color: '#FFF' }}
          >
            {getLang(`firmCount`, `topSearchView`)}
          </Button>
        </Link>
      </TableCell>
    </TableRow>
  );
}

export function FirmCountTable(props: FirmCountProps) {
  const [theme] = useRecoilState(appTheme);

  return (
    <Container>
      <FirmCountContainerStyled t={Boolean(theme)}>
        <TableContainer
          style={{ height: '600px', overflowY: 'scroll' }}
          // style={{ height: 'calc(100vh - 300px)', overflowY: 'scroll' }}
          className="tableContainer"
        >
          <Table>
            <TableHead
              style={{
                position: 'sticky',
                background: PRIMARY_COLOR,
                fontWeight: 700,
                zIndex: 10,
                top: 0,
              }}
            >
              <TableRow>
                <TableCell>{getLang(`firmCount`, `country`)}</TableCell>
                <TableCell align="center">
                  {getLang(`firmCount`, `portalCount`)}
                </TableCell>
                <TableCell align="center">
                  {getLang(`firmCount`, `eshopCount`)}
                </TableCell>
                <TableCell align="center">
                  {getLang(`firmCount`, `identicalData`)}
                </TableCell>
                <TableCell align="center">
                  {getLang(`topSearch`, `titleFirm`)}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.firmCountryCount.map(
                (firmCount: FirmCountData, key: number) => (
                  <FirmCountRow key={key} {...firmCount} />
                ),
              )}
            </TableBody>
            <TableFooter
              style={{
                position: 'sticky',
                zIndex: 10,
                bottom: 0,
              }}
            >
              <TableRow>
                <TableCell>{getLang(`firmCount`, `sum`)}</TableCell>
                <TableCell align="center">
                  {FormatNumber(props.totalFirmPortal ?? 0)}
                </TableCell>
                <TableCell align="center">
                  {FormatNumber(props.totalFirmEshop ?? 0)}
                </TableCell>
                <TableCell colSpan={2} />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </FirmCountContainerStyled>
    </Container>
  );
}
