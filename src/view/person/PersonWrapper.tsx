import * as React from 'react';
import { useEffect, useState } from 'react';
import assert from 'assert';
import { DataPlaceholder } from '../../components/page/PageHelper';
import { PersonContainer } from './style/PersonStyle';
import { PersonBasic } from './detail/PersonBasic';
import { personLoader } from '../../data/person/PersonLoader';
import { CryptId } from '../../data/DataType';
import { IOriginalUrl } from '../../components/link/LinkProps';
import { validatePersonUrl } from '../../components/link/PersonLink';
import { PersonProps } from './PersonProps';
import { Register } from './detail/Register';
import { Relations } from './detail/Relations';
import { ContentWrapper } from '../ContentWrapper';
import { isDevelopment } from '@/environment/Environment';

type PersonWrapperProps = {
  personId?: CryptId;
} & IOriginalUrl;

export function PersonWrapper(props: PersonWrapperProps) {
  const [data, setData] = useState<PersonProps>();
  const [isError, setError] = useState(false);

  useEffect(() => {
    if (props.personId) {
      personLoader(props.personId)
        .then(({ data }) => {
          setData(data);
          setError(false);
          const validation = validatePersonUrl(props.originalUrl, data.name);
          if (isDevelopment()) {
            // todo vz zobrazit uzivateli
            assert(validation, `Chyba validace url osoby`);
          }
        })
        .catch(() => {
          setError(true);
        });
    }
  }, [props.personId]);

  return (
    <ContentWrapper isError={isError}>
      <PersonView personData={data ?? null} key={props.personId} />
    </ContentWrapper>
  );
}

function PersonView(props: { personData: PersonProps | null }) {
  return (
    <>
      {props.personData ? (
        <PersonContainer>
          <PersonBasic personData={props.personData} />
          {props.personData?.descriptionList?.business === false && (
            <Register personData={props.personData} />
          )}
          <Relations personData={props.personData} />
        </PersonContainer>
      ) : (
        <DataPlaceholder rows={20} />
      )}
    </>
  );
}
