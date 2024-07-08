import * as React from 'react';
import { Dispatch, FormEvent, useEffect } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FormControlLabel, Switch } from '@material-ui/core';
import { SearchTermField } from './field/SearchTermField';
import { FirmCountrySelect } from '../country/FirmCountrySelect';
import LocalitySelect from '../locality/LocalitySelect';
import { SubmitField } from './field/SubmitField';
import getLang from '../../lang/Lang';
import { Form } from '../../../styles/Style';
import { CountryData } from '../country/CountryProps';
import { LocalityData } from '../locality/LocalityProps';
import Spacer from '../utils/Spacer';

type AdvancedSearchFormProps = {
  searchTerm: string;
  setSearchTerm: Dispatch<string>;
  selectedCountry: CountryData | null;
  setSelectedCountry: Dispatch<CountryData>;
  selectedLocality: LocalityData | null;
  setSelectedLocality: Dispatch<LocalityData | null>;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  searchInactive: boolean;
  setSearchInactive: Dispatch<boolean>;
  validSearchTerm: boolean;
  setValidSearchTerm: Dispatch<boolean>;
};

export function AdvancedSearchForm(props: AdvancedSearchFormProps) {
  // locality
  const [localityOptions, setLocalityOptions] = React.useState<LocalityData[]>(
    [],
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setSearchInactive(!event.target.checked);
  };

  function searchTermValidate() {
    props.setValidSearchTerm(props?.searchTerm.length >= 3);
  }

  useEffect(() => {
    setLocalityOptions([]);
    props.setSelectedLocality(null);
  }, [props.selectedCountry]);

  return (
    <Form onSubmit={props.handleSubmit}>
      <FormControlLabel
        control={
          <Switch
            checked={!props.searchInactive}
            onChange={handleChange}
            color="primary"
          />
        }
        label={getLang(`advancedSearch`, `searchActive`)}
      />
      <SearchTermField
        name={props.searchTerm}
        setName={props.setSearchTerm}
        label={getLang(`form`, `name`)}
        validField={props.validSearchTerm}
        validateField={searchTermValidate}
      />
      <FirmCountrySelect
        dropDownWidth="100%"
        outlined
        selectedCountry={props.selectedCountry}
        setSelectedCountry={props.setSelectedCountry}
        margin="normal"
      />
      <LocalitySelect
        outlined
        selectedCountry={props.selectedCountry}
        selectedLocality={props.selectedLocality}
        setSelectedLocality={props.setSelectedLocality}
        localityOptions={localityOptions}
        setLocalityOptions={setLocalityOptions}
        margin="normal"
      />
      <Spacer y={15} />

      <SubmitField
        submitText={getLang(`advancedSearch`, `submit`)}
        disabled={false}
        icon={faSearch}
      />
    </Form>
  );
}
