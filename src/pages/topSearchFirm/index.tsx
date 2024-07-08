import * as React from 'react';
import { useRecoilState } from 'recoil';
import { TopSearchFirmWrapper } from '../../view/topSearch/TopSearchFirmWrapper';
import { countryState } from '../../storage/SearchAtom';

export default function TopSearchFirm() {
  // country
  const [selectedCountry] = useRecoilState(countryState);

  return (
    <TopSearchFirmWrapper
      countryCode={selectedCountry ? selectedCountry.code : null}
    />
  );
}
