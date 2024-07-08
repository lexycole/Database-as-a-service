import * as React from 'react';
import { useEffect, useState } from 'react';
import assert from 'assert';
import { useRecoilState } from 'recoil';
import getLang from '../../lang/Lang';
import { ButtonContainer, TopSearchContainer } from './style/TopSearchStyle';
import {
  TopSearchFirmButton,
  TopSearchPhoneButton,
  TopSearchTitle,
} from './detail/TopSearchHelper';
import {
  topSearchPersonLoader,
  TopSearchPersonResult,
} from '../../data/topSearch/TopSearchPersonLoader';
import { TopSearchPersonTable } from './detail/TopSearchPersonTable';
import { ContentWrapper } from '../ContentWrapper';
import {
  CountryData,
  getCountryByCode,
} from '../../components/country/CountryProps';
import { TopSearchProps } from './TopSearchProps';
import { firmCountriesState } from '../../storage/SearchAtom';
import { DataPlaceholder } from '../../components/page/PageHelper';
import { validateTopSearchUrl } from '../../components/link/TopSearchLink';
import { isDevelopment } from '@/environment/Environment';

export function TopSearchPersonWrapper(props: TopSearchProps) {
  const [data, setData] = useState<TopSearchPersonResult>();
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
      topSearchPersonLoader(country.code)
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
          base={getLang(`topSearch`, `titlePerson`)}
          country={country}
        />
      }
      isError={isError}
    >
      <ButtonContainer>
        {country ? (
          <>
            <TopSearchFirmButton country={country} />
            <TopSearchPhoneButton country={country} />
          </>
        ) : (
          <DataPlaceholder rows={2} />
        )}
      </ButtonContainer>
      <TopSearchContainer>
        <TopSearchPersonTable
          loading={loading}
          country={country}
          topSearchData={data ? data.topSearchPersonCountry : []}
        />
        <TopSearchPersonTable
          loading={loading}
          topSearchData={data ? data.topSearchPerson : []}
        />
      </TopSearchContainer>
    </ContentWrapper>
  );
}
