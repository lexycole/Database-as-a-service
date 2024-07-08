import * as React from 'react';
import {
  PersonAuthority,
  PersonDescriptionList,
} from '@/view/person/PersonProps';
import {
  SECONDARY_SUB,
  SECONDARY_SUB_DARK,
  TEXT_COLOR,
  TEXT_COLOR_DARK,
} from '../../../../styles/BaseStyle';
import styled from 'styled-components';
import getLang from '@/lang/Lang';
import { FirmBasic } from '@/view/firm/FirmBasicProps';
import { UcFirst } from '@/formatter/Formatter';
import { FirmLink } from '@/components/link/FirmLink';
import { AddressValue } from '@/components/address/AddressValue';

type PersonDescriptionProps = {
  data: PersonDescriptionList;
  theme: boolean;
};

const DescriptionDiv = styled.div<{
  t: boolean;
}>`
  padding: 0 0 0 15px;
  margin: 15px 0;
  color: ${({ t }) => (t ? TEXT_COLOR : TEXT_COLOR_DARK)};
  text-align: left;
  background-color: ${({ t }) => (t ? SECONDARY_SUB : SECONDARY_SUB_DARK)};

  span.label {
    font-weight: 600;
  }
  span.value,
  span.additional {
    margin-left: 8px;
  }
`;

function DescriptionRow(props: { label: string; value: number }) {
  return (
    <li>
      <span className="label">{props.label}</span>
      <span className="value">{props.value}</span>
    </li>
  );
}

function AuthorityRow(props: { name: string; firm: FirmBasic }) {
  return (
    <li>
      <span className="label">{UcFirst(props.name)}</span>
      <span className="additional">
        {getLang(`personDetail`, `descriptionFirmAuthorityName`)}
      </span>
      <span className="value">
        <FirmLink id={props.firm.uid} {...props.firm} lightColor />
      </span>
    </li>
  );
}

function BusinessDescription(props: PersonDescriptionProps) {
  const { data } = props;
  return (
    <ul style={{ lineHeight: `30px` }}>
      <li>
        <span className="additional">
          {getLang(`personDetail`, `descriptionBusinessActivity`)}
        </span>
        <span className="label value">{data.activity}</span>,
        <span className="additional">
          {getLang(`personDetail`, `descriptionBusinessIdNumber`)}
        </span>
        <span className="label value">{data.idNumber}</span>,
        {data.address && (
          <>
            <span className="additional">
              {getLang(`personDetail`, `descriptionBusinessAddress`)}
            </span>
            <span className="label value">
              <AddressValue addressData={data.address} />
            </span>
            ,
          </>
        )}
      </li>
    </ul>
  );
}

function AuthorityDescription(props: PersonDescriptionProps) {
  const { data } = props;

  return (
    <ul style={{ lineHeight: `30px` }}>
      {data.firmCount && (
        <DescriptionRow
          label={getLang(`personDetail`, `descriptionFirmCount`)}
          value={data.firmCount}
        />
      )}
      {data.shareCount && (
        <DescriptionRow
          label={getLang(`personDetail`, `descriptionShareCount`)}
          value={data.shareCount}
        />
      )}
      {data.authorityList &&
        data.authorityList.map((item: PersonAuthority) => (
          <AuthorityRow name={item.authorityName} firm={item.firm} />
        ))}
    </ul>
  );
}

export function PersonDescription(props: PersonDescriptionProps) {
  const { data } = props;
  return (
    <DescriptionDiv t={props.theme}>
      {data.business ? (
        <BusinessDescription data={data} theme={props.theme} />
      ) : (
        <AuthorityDescription data={data} theme={props.theme} />
      )}
    </DescriptionDiv>
  );
}
