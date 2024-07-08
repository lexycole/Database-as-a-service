import * as React from 'react';
import { faMapMarkedAlt } from '@fortawesome/pro-solid-svg-icons';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { FirmAddressData, FirmData, MAX_LIST_ROWS } from '../FirmProps';
import { AddressRow } from '../style/AddressStyle';
import getLang from '../../../lang/Lang';
import { DetailBoxSubTitle } from '../../../components/detail/BoxTitle';
import { AccordionList } from '../../../components/accordion/AccordionList';
import { MapButton } from '../../../components/address/MapButton';
import { RouteButton } from '../../../components/address/RouteButton';
import { MapButtons } from '../style/FirmStyle';
import { TableContainerStyled } from '../style/SimilarStyle';
import { appTheme } from '@/storage/ThemeAtom';
import { useRecoilState } from 'recoil';
import { SECONDARY_SUB, SECONDARY_SUB_DARK } from '@/../styles/BaseStyle';
import { AccordionListTableContainer } from '../../../../styles/Style';

function AddressItem(props: FirmAddressData) {
  const [theme] = useRecoilState(appTheme);

  return (
    <AddressRow register={props.addressType === `register`} t={Boolean(theme)}>
      <TableCell>{props.region}</TableCell>
      <TableCell>{props.city}</TableCell>
      <TableCell>{props.address}</TableCell>
      <TableCell>{props.idNumber}</TableCell>
      <TableCell>
        <MapButtons>
          <MapButton theme={Boolean(theme)} addressData={props} />
          <RouteButton theme={Boolean(theme)} addressData={props} />
        </MapButtons>
      </TableCell>
    </AddressRow>
  );
}

export function Address(props: { firmData: FirmData }) {
  const [theme] = useRecoilState(appTheme);
  const { addressList } = props.firmData.contact;

  if (addressList === undefined) {
    return null;
  }

  const visibleRows = addressList.slice(0, MAX_LIST_ROWS);
  const hiddenRows =
    addressList.length > MAX_LIST_ROWS
      ? addressList.slice(MAX_LIST_ROWS)
      : null;

  return (
    <>
      <DetailBoxSubTitle
        title={getLang(`firmDetail`, `registerFacilitiesAddress`)}
        icon={faMapMarkedAlt}
      />
      <TableContainerStyled t={Boolean(theme)}>
        <TableContainer
          elevation={0}
          component={Paper}
          style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
          className="tableContainer"
        >
          <Table>
            <TableHead
              style={{
                background: theme ? SECONDARY_SUB : SECONDARY_SUB_DARK,
              }}
            >
              <TableRow>
                <TableCell style={{ fontSize: '1.14rem', fontWeight: 700 }}>
                  {getLang(`firmDetail`, `addressRegion`)}
                </TableCell>
                <TableCell style={{ fontSize: '1.14rem', fontWeight: 700 }}>
                  {getLang(`firmDetail`, `addressCity`)}
                </TableCell>
                <TableCell style={{ fontSize: '1.14rem', fontWeight: 700 }}>
                  {getLang(`firmDetail`, `addressAddress`)}
                </TableCell>
                <TableCell
                  style={{ fontSize: '1.14rem', fontWeight: 700 }}
                  colSpan={2}
                >
                  {getLang(`firmDetail`, `addressIdNumber`)}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {visibleRows.map((item: FirmAddressData, key: number) => (
                <AddressItem key={key} {...item} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </TableContainerStyled>

      {hiddenRows && hiddenRows.length > 0 && (
        <AccordionList
          title={getLang(`firmDetail`, `addressHiddenList`)}
          count={hiddenRows.length}
        >
          <AccordionListTableContainer>
            <TableContainerStyled t={Boolean(theme)}>
              <TableContainer
                elevation={0}
                component={Paper}
                style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
                className="tableContainer"
              >
                <Table>
                  <TableBody>
                    {hiddenRows.map((item: FirmAddressData, key: number) => (
                      <AddressItem key={key} {...item} />
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </TableContainerStyled>
          </AccordionListTableContainer>
        </AccordionList>
      )}
    </>
  );
}
