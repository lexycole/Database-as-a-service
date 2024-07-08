import * as React from 'react';
import { PersonProps } from '../PersonProps';
import {
  DetailBoxContainer,
  PersonDetailBox,
  PersonDivider,
  PersonRow,
} from '../style/PersonStyle';
import getLang from '../../../lang/Lang';
import { AddressValue } from '../../../components/address/AddressValue';
import { FormatDate } from '../../../formatter/Formatter';
import { DetailBoxTitle } from '../../../components/detail/BoxTitle';
import { appTheme } from '@/storage/ThemeAtom';
import { useRecoilState } from 'recoil';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAddressBook,
  faLocationDot,
  faStar,
} from '@fortawesome/pro-solid-svg-icons';

export function Register(props: { personData: PersonProps }) {
  const { dateBirth, address } = props.personData;
  const [theme] = useRecoilState(appTheme);
  return (
    <PersonDetailBox>
      <DetailBoxContainer t={Boolean(theme)}>
        <DetailBoxTitle
          title={getLang(`personDetail`, `registerTitle`)}
          icon={faAddressBook}
        />
        {dateBirth && (
          <PersonRow>
            <span className="label">
              <FontAwesomeIcon fixedWidth icon={faStar} />
              {getLang(`personDetail`, `dateBirth`)}
            </span>
            <span className="label">
              <FontAwesomeIcon  icon={faLocationDot} />
              {getLang(`personDetail`, `contactAddress`)}
            </span>
          </PersonRow>
        )}
        <PersonDivider />
        {address && (
          <PersonRow>
            <span className="value">{FormatDate(dateBirth)}</span>
            <span className="value">
              <AddressValue addressData={address} includeCountry />
            </span>
          </PersonRow>
        )}
      </DetailBoxContainer>
    </PersonDetailBox>
  );
}
