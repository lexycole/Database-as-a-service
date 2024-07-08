import { PackageFilterData } from './PackageFilterProps';
import { CountryData } from '../country/CountryProps';
import { ContactType } from '../contact/ContactType';
import {
  FilterValues,
  IOptionData,
} from '../../view/package/props/PackageDataProps';
import { SliderRange } from '../slider/PackageSlider';

type PackageFilterProps = {
  country: CountryData;
  localityValue: FilterValues;
  addressType: FilterValues;
  contactType: ContactType[];
  revenueValue: SliderRange;
  revenueOptions: IOptionData[];
  workerCountValue: SliderRange;
  workerCountOptions: IOptionData[];
  economicActivity: FilterValues;
  legalForm: FilterValues;
};

function extractRangeValue(
  options: IOptionData[],
  range: SliderRange,
): FilterValues {
  const [min, max] = [...range];
  if (min > 0 || max < options.length - 1) {
    const rangeOptions = options.slice(min, max + 1);
    const values: string[] = [];
    rangeOptions.forEach((value: IOptionData) => {
      values.push(value.code);
    });
    return values;
  }
  return [];
}

export function makePackageFilter(
  props: PackageFilterProps,
): PackageFilterData {
  const packageFilter: PackageFilterData = {
    countryCode: props.country.code,
  };

  if (props.contactType !== []) {
    packageFilter.contactType = props.contactType;
  }

  if (props.revenueValue !== [] && props.revenueOptions) {
    packageFilter.revenue = extractRangeValue(
      props.revenueOptions,
      props.revenueValue,
    );
  }

  if (props.workerCountValue !== [] && props.workerCountOptions) {
    packageFilter.workerCount = extractRangeValue(
      props.workerCountOptions,
      props.workerCountValue,
    );
  }

  if (props.localityValue !== []) {
    packageFilter.locality = props.localityValue;
  }

  if (props.addressType !== []) {
    packageFilter.addressType = props.addressType;
  }

  if (props.legalForm !== []) {
    packageFilter.legalForm = props.legalForm;
  }

  if (props.economicActivity !== []) {
    packageFilter.economicActivity = props.economicActivity;
  }

  return packageFilter;
}
