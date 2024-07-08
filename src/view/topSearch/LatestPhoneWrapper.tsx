import * as React from 'react';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import {
  ButtonContainer,
  TelephoneDescription,
  TopSearchContainer,
} from './style/TopSearchStyle';
import { ContentWrapper } from '../ContentWrapper';
import {
  latestPhoneLoader,
  LatestPhoneResult,
} from '../../data/topSearch/LatestPhoneLoader';
import {
  TopSearchFirmButton,
  TopSearchPhoneButton,
} from './detail/TopSearchHelper';
import getLang from '../../lang/Lang';
import { LatestPhoneTable } from './detail/LatestPhoneTable';
import { LatestPhoneRatingTable } from './detail/LatestPhoneRatingTable';
import { countryState } from '../../storage/SearchAtom';
import { appTheme } from '@/storage/ThemeAtom';
import PhoneIcon from '@material-ui/icons/Phone';
import { PRIMARY_COLOR } from '@/../styles/BaseStyle';

export function LatestPhoneWrapper() {
  const [theme] = useRecoilState(appTheme);
  const [isError, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<LatestPhoneResult>();
  const [selectedCountry] = useRecoilState(countryState);
  const [country, setCountry] = useState(selectedCountry);

  useEffect(() => {
    if (selectedCountry) {
      setCountry(selectedCountry);
    }
  }, [selectedCountry]);

  useEffect(() => {
    if (country) {
      setLoading(true);
      latestPhoneLoader(country.code)
        .then(({ data }) => {
          setData(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(true);
          setLoading(false);
        });
    }
  }, [country]);

  return (
    <ContentWrapper
      title={getLang(`topSearch`, `titleLatestPhone`)}
      isError={isError}
      icon={
        <PhoneIcon
          style={{
            fontSize: '3rem',
            marginBottom: -10,
            color: PRIMARY_COLOR,
          }}
        />
      }
    >
      <TelephoneDescription t={theme}>
        {getLang(`topSearch`, `latestPhoneDescription`)}
      </TelephoneDescription>
      <ButtonContainer>
        {country ? (
          <>
            <TopSearchFirmButton country={country} />
            <TopSearchPhoneButton country={country} />
          </>
        ) : (
          <div
            style={{
              textAlign: 'center',
              fontSize: '1.1rem',
              fontWeight: 'normal',
              maxWidth: 300,
              padding: '10px',
            }}
          >
            Please choose a country
          </div>
        )}
      </ButtonContainer>
      <TopSearchContainer>
        <LatestPhoneTable
          country={country}
          loading={loading}
          topSearchData={data ? data.latestPhone : []}
        />
        <LatestPhoneRatingTable
          loading={loading}
          topSearchData={data ? data.latestPhoneRating : []}
        />
      </TopSearchContainer>
    </ContentWrapper>
  );
}
