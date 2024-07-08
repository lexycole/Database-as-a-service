import { CountryData } from '../../components/country/CountryProps';
import { IPageProps } from '../../pages/_app';

export type FirmCountData = {
  country: CountryData;
  amount: number;
  amountEshop: number;
  identical: boolean;
};

export type FirmCountSumProps = {
  totalFirmPortal: number;
  totalCountryPortal: number;
  totalCountryEshop: number;
  totalFirmEshop: number;
};

export type FirmCountProps = {
  firmCountryCount: FirmCountData[];
} & IPageProps &
  FirmCountSumProps;
