import * as React from 'react';
import { useEffect, useState } from 'react';
import assert from 'assert';
import { PhoneData } from './PhoneProps';
import { Container } from '@material-ui/core';
import { PhoneBasic } from './detail/PhoneBasic';
import { ContentWrapper } from '../ContentWrapper';
import { phoneLoader } from '../../data/phone/PhoneLoader';
import { validatePhoneUrl } from '../../components/link/PhoneLink';
import Spinner from '@/components/utils/Spinner';
import { isDevelopment } from '@/environment/Environment';
import { countryState } from '@/storage/SearchAtom';
import { useRecoilState } from 'recoil';

function PhoneView(props: { phoneData: PhoneData | null }) {
  return (
    <>
      {props.phoneData ? (
        <div className="-mt-6">
          <Container>
            <PhoneBasic phoneData={props.phoneData} />
          </Container>
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-[60vh]">
          <Spinner />
        </div>
      )}
    </>
  );
}

export function PhoneWrapper(props: { phone?: string }) {
  const [data, setData] = useState<PhoneData>();
  const [isError, setError] = useState(false);

  // country
  const [selectedCountry] = useRecoilState(countryState);

  useEffect(() => {
    if (props.phone) {
      phoneLoader(props.phone, selectedCountry)
        .then(({ data }) => {
          setData(data);
          const validation = validatePhoneUrl(props?.phone ?? ``, data.phone);
          if (isDevelopment()) {
            // todo vz Sentry
            assert(validation, `Chyba validace url telefonu `);
          }
        })
        .catch(() => {
          setError(true);
        });
    }
  }, [props.phone]);

  return (
    <ContentWrapper isError={isError}>
      <PhoneView phoneData={data ?? null} />
    </ContentWrapper>
  );
}
