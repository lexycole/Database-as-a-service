import * as React from 'react';
import { useEffect, useState } from 'react';
import assert from 'assert';
import { useRecoilState } from 'recoil';
import getLang from '../../lang/Lang';
import { ButtonContainer, TopSearchContainer } from './style/TopSearchStyle';
import {
  TopSearchFirmButton,
  TopSearchPersonButton,
  TopSearchTitle,
} from './detail/TopSearchHelper';
import { ContentWrapper } from '../ContentWrapper';
import {
  CountryData,
  getCountryByCode,
} from '../../components/country/CountryProps';
import {
  topSearchPhoneLoader,
  TopSearchPhoneResult,
} from '../../data/topSearch/TopSearchPhoneLoader';
import { TopSearchPhoneTable } from './detail/TopSearchPhoneTable';
import { TopSearchProps } from './TopSearchProps';
import { validateTopSearchUrl } from '../../components/link/TopSearchLink';
import { firmCountriesState } from '../../storage/SearchAtom';
import Skeleton from '@material-ui/lab/Skeleton';
import { isDevelopment } from '@/environment/Environment';

export function TopSearchPhoneWrapper(props: TopSearchProps) {
  const [data, setData] = useState<TopSearchPhoneResult>();
  const [loading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [country, setCountry] = useState<CountryData | null>(null);
  const [firmCountries] = useRecoilState(firmCountriesState);

  useEffect(() => {
    if (firmCountries && props.countryCode) {
      const countryByCode: CountryData | null = getCountryByCode(
        firmCountries,
        props.countryCode,
      );
      setCountry(countryByCode);
    }
  }, [firmCountries]);

  useEffect(() => {
    if (country) {
      if (props.originalUrl) {
        const validation = validateTopSearchUrl(props.originalUrl, country);
        if (isDevelopment()) {
          // todo vz zobrazit uzivateli
          assert(validation, `Chyba validace url topsearch`);
        }
      }
      setLoading(true);
      topSearchPhoneLoader(country.code)
        .then(({ data }) => {
          setData(data);
          setLoading(false);
        })
        .catch(() => {
          setError(true);
          setLoading(false);
        });
    }
  }, [country]);

  return (
    <ContentWrapper
      key={props.countryCode}
      title={
        <TopSearchTitle
          base={getLang(`topSearch`, `titlePhone`)}
          country={country}
        />
      }
      isError={isError}
    >
      <ButtonContainer>
        {country ? (
          <>
            <TopSearchFirmButton country={country} />
            <TopSearchPersonButton country={country} />
          </>
        ) : (
          <>
            <Skeleton
              height={35}
              style={{
                width: 180,
                margin: '10px 20px',
                borderRadius: 5,
              }}
              variant="rect"
            />
            <Skeleton
              height={35}
              style={{
                width: 180,
                margin: '10px 20px',
                borderRadius: 5,
              }}
              variant="rect"
            />
          </>
        )}
      </ButtonContainer>
      <TopSearchContainer>
        <TopSearchPhoneTable
          loading={loading}
          topSearchData={data ? data.topSearchPhoneCountry : []}
          country={country}
        />
        <TopSearchPhoneTable
          loading={loading}
          topSearchData={data ? data.topSearchPhone : []}
        />
      </TopSearchContainer>
    </ContentWrapper>
  );
}
