import * as React from 'react';
import { PhoneData } from '../PhoneProps';
import getLang from '../../../lang/Lang';
import {
  PhoneBoxRow,
  PhoneDetailBox,
  PhoneFirmRow,
  PhoneNumber,
  PhoneRating,
  PhoneTitle,
} from '../style/PhoneStyle';
import { RatingImage, RatingList } from './RatingList';
import { CommentList } from './CommentList';
import { FirmBasic } from '../../firm/FirmBasicProps';
import { DetailRowProps } from '../../../components/detail/DetailRow';
import { AddressValue } from '@/components/address/AddressValue';
import {
  faIndustry,
  faPhone,
  faSearch,
} from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FirmLink } from '@/components/link/FirmLink';
import { CommentForm } from '@/view/phone/detail/CommentForm';
import { TableContainerStyled } from '@/view/firm/style/SimilarStyle';
import { appTheme } from '@/storage/ThemeAtom';
import { useRecoilState } from 'recoil';

import { Paper, Table, TableContainer } from '@material-ui/core';
import { TableBodyRow } from '@/components/detail/DetailRowStyle';

export function PhoneDetailRow(props: DetailRowProps) {
  return props.value === null ? null : props.value ? (
    <PhoneBoxRow>
      {props.icon && <FontAwesomeIcon icon={props.icon} />}
      {props.label && <div className="label">{props.label} :</div>}
      <div className="value">{props.value ?? ``}</div>
    </PhoneBoxRow>
  ) : (
    <></>
  );
}

function PhoneFirm(props: { firm: FirmBasic; theme: boolean }) {
  const { firm } = props;
  if (firm.visible === false) {
    // todo vz zobrazovat skryte firmy ?
    return null;
  }
  return (
    <li>
      {firm?.name && (
        <PhoneFirmRow>
          <FirmLink id={firm.uid} {...firm} lightColor />
        </PhoneFirmRow>
      )}
      {firm.address && (
        <span style={{ marginLeft: '20px' }}>
          <AddressValue addressData={firm.address} includeCountry />
        </span>
      )}
    </li>
  );
}

function FirmListRow(props: { firmList: FirmBasic[]; theme: boolean }) {
  return (
    <TableBodyRow t={props.theme}>
      <PhoneBoxRow>
        <FontAwesomeIcon icon={faIndustry} />
        <div className="label">{getLang(`phoneDetail`, `firmName`)} :</div>
        <ul>
          {props.firmList.map((item: FirmBasic) => (
            <>
              <PhoneFirm firm={item} theme={props.theme} />
            </>
          ))}
        </ul>
      </PhoneBoxRow>
    </TableBodyRow>
  );
}

export function PhoneBasic(props: { phoneData: PhoneData }) {
  const [theme] = useRecoilState(appTheme);

  const { firmList } = props.phoneData;

  return (
    <PhoneDetailBox>
      <PhoneTitle>
        <FontAwesomeIcon size="2x" icon={faPhone} />
        <PhoneNumber>{props.phoneData.phone}</PhoneNumber>
        <PhoneRating>
          <span className="font-[600]">
            {getLang(`phoneDetail`, `ratingAvg`)} :{' '}
          </span>
          <RatingImage rating={props.phoneData.ratingAvg} />
        </PhoneRating>
      </PhoneTitle>

      <TableContainerStyled rounded t={theme}>
        <TableContainer
          elevation={0}
          component={Paper}
          className="tableContainer p-5 pt-10"
        >
          <Table aria-label="simple table">
            {firmList !== undefined && firmList.length > 0 && (
              <FirmListRow firmList={firmList} theme={Boolean(theme)} />
            )}
            <TableBodyRow t={theme}>
              <PhoneDetailRow
                icon={faSearch}
                label={getLang(`phoneDetail`, `viewCount`)}
                value={props.phoneData.viewCount.toFixed()}
              />
            </TableBodyRow>
            <RatingList
              ratingSumList={props.phoneData.ratingSumList}
              callTypeSumList={props.phoneData.callTypeSumList}
            />
          </Table>
        </TableContainer>
      </TableContainerStyled>

      <CommentForm />
      <CommentList ratingList={props.phoneData.ratingList} />
    </PhoneDetailBox>
  );
}
