import * as React from 'react';
import styled from 'styled-components';
import { PersonProps } from '../PersonProps';
import {
  NameRowDescription,
  PersonDetailBox,
  PersonDivider,
  PersonRow,
} from '../style/PersonStyle';

import { appTheme } from '@/storage/ThemeAtom';
import { useRecoilState } from 'recoil';
import { PersonDescription } from './PersonDescription';

const PersonNameTitle = styled.h1`
  text-align: left;
  padding-left: 50px;
`;

function PersonFullName(props: { personName: PersonProps }) {
  const { name, age } = props.personName;
  let fullName = name;
  fullName += age ? ` (${age})` : ``;
  return <PersonNameTitle>{fullName}</PersonNameTitle>;
}

export function PersonBasic(props: { personData: PersonProps }) {
  const [theme] = useRecoilState(appTheme);
  return (
    <PersonDetailBox>
      <PersonFullName personName={props.personData} />
      <NameRowDescription t={Boolean(theme)}>
        {props.personData.address && props.personData.address.region && (
          <>
            <PersonRow> {props.personData.address.region} </PersonRow>
            <PersonDivider />
          </>
        )}
        {props.personData.descriptionList && (
          <PersonDescription
            data={props.personData.descriptionList}
            theme={Boolean(theme)}
          />
        )}
      </NameRowDescription>
    </PersonDetailBox>
  );
}
