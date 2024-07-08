import * as React from 'react';
import { Box } from '@material-ui/core';
import { PersonPosition, PersonProps, PersonRelations } from '../PersonProps';
import {
  CompanyRow,
  DateDepartmentBox,
  FullDetailRow,
  PersonDetailBox,
  PersonRelationContainer,
  RelationLinkRow,
  SharedRows,
} from '../style/PersonStyle';
import getLang from '../../../lang/Lang';
import { AddressValue } from '../../../components/address/AddressValue';
import { RelationLink } from '../../../components/link/RelationLink';
import { FormatDate } from '../../../formatter/Formatter';
import { GraphData } from '../../../components/graph/GraphProps';
import { GraphPie } from '../../../components/graph/GraphPie';
import { DetailRow } from '../../../components/detail/DetailRow';
import { DetailBoxTitle } from '../../../components/detail/BoxTitle';
import { useRecoilState } from 'recoil';
import { appTheme } from '@/storage/ThemeAtom';
import { faIndustry } from '@fortawesome/pro-solid-svg-icons';
import { MapButton } from '@/components/address/MapButton';
import { IdNumberWithStatus } from '@/view/firm/IdNumberWithStatus';

export function PersonRelationBox(props: {
  relationData: PersonRelations;
  personData: PersonProps;
}) {
  const [theme] = useRecoilState(appTheme);

  return (
    <PersonRelationContainer>
      <RelationLinkRow t={Boolean(theme)}>
        <span style={{ fontWeight: `bold`, textDecoration: `underline` }}>
          <RelationLink {...props.relationData} />
        </span>
        <IdNumberWithStatus
          firmStatus={props.relationData.firmStatus}
          idNumber={props.relationData.idNumber}
        />
      </RelationLinkRow>
      <CompanyRow>
        <span className="label">
          {getLang(`firmDetail`, `registerRegisterAddress`)}:
        </span>
        <span className="value">
          <AddressValue
            addressData={props.relationData.address}
            includeCountry
          />{' '}
        </span>
        <span
          style={{
            float: `right`,
            border: '1px solid #000',
            borderRadius: `5px`,
          }}
        >
          {props.personData.address && (
            <MapButton
              theme={Boolean(theme)}
              addressData={props.personData.address}
            />
          )}
        </span>
      </CompanyRow>
      <FullDetailRow t={Boolean(theme)}>
        <span className="label">
          {getLang(`firmDetail`, `registerDescription`)}:
        </span>
        <span style={{ paddingLeft: `10px` }}>
          {props.relationData.description}
        </span>
      </FullDetailRow>
      <DateDepartmentBox>
        {props.relationData.position &&
          props.relationData.position.map((item: PersonPosition) => (
            <>
              <DetailRow
                label={getLang(`personDetail`, `dateFrom`)}
                value={FormatDate(item.dateFrom)}
              />
              <DetailRow
                label={getLang(`personDetail`, `department`)}
                value={item.department}
              />
            </>
          ))}
      </DateDepartmentBox>
      <SharedRows t={Boolean(theme)}>
        <DetailRow
          label={getLang(`personDetail`, `shareType`)}
          value={props.relationData.shareType}
        />
        {props.relationData.shareValue && (
          <DetailRow
            label={getLang(`personDetail`, `shareValue`)}
            value={`${props.relationData.shareValue} ${
              props.relationData.sharePaidPercent
                ? props.relationData.sharePaidPercent
                : ``
            }`}
          />
        )}
      </SharedRows>
    </PersonRelationContainer>
  );
}

function RelationGraph(props: { personData: PersonProps }) {
  const graphData: GraphData[] = [];
  props.personData.relations.map((item: PersonRelations) => {
    if (item.shareValueRaw) {
      graphData.push({
        id: item.name,
        label: item.name,
        value: item.shareValueRaw,
      });
    }
  });
  return (
    <Box height="300px">
      <GraphPie data={graphData} />
    </Box>
  );
}

export function Relations(props: { personData: PersonProps }) {
  return props.personData.relations === undefined ? null : (
    <PersonDetailBox>
      <DetailBoxTitle
        title={getLang(`personDetail`, `relationsTitle`)}
        icon={faIndustry}
      />
      {props.personData.relations.map(
        (relation: PersonRelations, key: number) => (
          <PersonRelationBox
            key={key}
            relationData={relation}
            personData={props.personData}
          />
        ),
      )}
      {
        // todo vz for future use
        /* <RelationGraph personData={props.personData} /> */
      }
    </PersonDetailBox>
  );
}
