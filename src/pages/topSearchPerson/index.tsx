import * as React from 'react';
import { useRecoilState } from 'recoil';
import { TopSearchPersonWrapper } from '../../view/topSearch/TopSearchPersonWrapper';
import { countryState } from '../../storage/SearchAtom';

export default function TopSearchPerson() {
  // country
  const [selectedCountry] = useRecoilState(countryState);

  return (
    <TopSearchPersonWrapper
      countryCode={selectedCountry ? selectedCountry.code : null}
    />
  );
}
