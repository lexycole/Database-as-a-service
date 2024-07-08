import * as React from 'react';
import { Dispatch } from 'react';
import { CountryContainer, FilterBlock } from '../style/PackageStyle';
import { CountryData } from '../../../components/country/CountryProps';
import getLang from '../../../lang/Lang';
import { PackageBlockTitle } from '../component/PackageBlockTitle';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FirmCountrySelect } from '../../../components/country/FirmCountrySelect';
import { appTheme } from '@/storage/ThemeAtom';
import { useRecoilState } from 'recoil';

type CountryBlockProps = {
  selectedCountry: CountryData | null;
  setSelectedCountry: Dispatch<CountryData>;
};

export function CountryBlock(props: CountryBlockProps) {
  const [theme] = useRecoilState(appTheme);
  const { selectedCountry, setSelectedCountry } = props;

  return (
    <FilterBlock t={theme}>
      <PackageBlockTitle title={getLang(`package`, `country`)} icon={faGlobe} />
      <CountryContainer>
        <FirmCountrySelect
          dropDownWidth="100%"
          outlined
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
        />
      </CountryContainer>
    </FilterBlock>
  );
}
