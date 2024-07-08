import * as React from 'react';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import getLang from '../../lang/Lang';
import { ContactType } from '../../components/contact/ContactType';
import { packageBaseDataLoader } from '../../data/package/PackageBaseDataLoader';
import {
  FilterValues,
  PackageBaseDataProps,
  PackageEconomicDataProps,
} from './props/PackageDataProps';
import { ContactBlock } from './block/ContactBlock';
import { RevenueBlock } from './block/RevenueBlock';
import { CountryBlock } from './block/CountryBlock';
import {
  makeDefaultSliderValue,
  SliderRange,
} from '../../components/slider/PackageSlider';
import { makePackageFilter } from '../../components/package/PackageFilter';
import { packageCalculateLoader } from '../../data/package/PackageCalculateLoader';
import { PackageCalculateData } from './PackageCalculateProps';
import { LocalityBlock } from './block/LocalityBlock';
import { WorkerCountBlock } from './block/WorkerCountBlock';
import { EconomicActivityBlock } from './block/EconomicActivityBlock';
import { LegalFormBlock } from './block/LegalFormBlock';
import { PackageInquiryForm } from '../../components/form/PackageInquiryForm';
import { PackageFilterData } from '../../components/package/PackageFilterProps';
import { packageEconomicDataLoader } from '../../data/package/PackageEconomicDataLoader';
import { ContentWrapper } from '../ContentWrapper';
import { countryState } from '../../storage/SearchAtom';
import {
  packageBaseDataState,
  packageCountryState,
  packageEconomicDataState,
} from '../../storage/PackageAtom';
import { Container } from '@material-ui/core';
import { SubmitBlock } from './block/SubmitBlock';

/*
- as a first step, the country is chosen on the site
- depending on the selected country, the contents of the form will be loaded
- the result can be recalculated each time the input is changed
- if the customer likes the calculation, he can send a request
- the inquiry form is also used
- which sends a request to us
- including values from the form
 */

export function PackageWrapper() {
  // store data
  const [packageCountry, setPackageCountry] =
    useRecoilState(packageCountryState);
  const [packageCountryLoading, setPackageCountryLoading] = useState(false);
  const [storageBaseData, setStorageBaseData] =
    useRecoilState(packageBaseDataState);
  const [storageEconomicData, setStorageEconomicData] = useRecoilState(
    packageEconomicDataState,
  );

  // country
  const [selectedCountry, setSelectedCountry] = useRecoilState(countryState);

  // locality
  const [locality, setLocality] = useState<FilterValues>([]);
  const [addressType, setAddressType] = useState<FilterValues>([]);

  // contactType
  const [contactType, setContactType] = useState<ContactType[]>([]);

  // revenue
  const [revenue, setRevenue] = useState<SliderRange>([]);

  // workerCount
  const [workerCount, setWorkerCount] = useState<SliderRange>([]);

  // legal form
  const [legalForm, setLegalForm] = useState<any[]>([]);

  // economic activity
  const [economicActivity, setEconomicActivity] = useState<FilterValues>([]);

  // package data
  const [baseData, setBaseData] = useState<PackageBaseDataProps | null>(null);
  const [economicData, setEconomicData] =
    useState<PackageEconomicDataProps | null>(null);

  // calculate result
  const [filter, setFilter] = useState<PackageFilterData | null>(null);
  const [isError, setError] = useState<boolean>(false);
  const [calculateResult, setCalculateResult] =
    useState<PackageCalculateData | null>(null);
  const [resultLoaded, setResultLoaded] = useState(false);
  const [resultLoading, setResultLoading] = useState(false);
  const [filterModified, setFilterModified] = useState(false);

  // calculate package button
  const calculateAllowed = selectedCountry
    ? selectedCountry.code === `CZ` || selectedCountry.code === `SK`
    : false;

  // inquiry
  const [showInquiry, setShowInquiry] = useState<boolean>(false);

  useEffect(() => {
    setFilterModified(true);
    if (baseData && economicData) {
      createFilter();
    }
  }, [
    locality,
    addressType,
    contactType,
    revenue,
    workerCount,
    legalForm,
    economicActivity,
  ]);

  function resetInquiry() {
    clearFilter();
    setResultLoading(false);
    setCalculateResult(null);
    setShowInquiry(false);
  }

  function clearFilter() {
    setLocality([]);
    setContactType([]);
    setAddressType([]);
    if (baseData) {
      setRevenue(makeDefaultSliderValue(baseData.revenue));
      setWorkerCount(makeDefaultSliderValue(baseData.workerCount));
    }
    setEconomicActivity([]);
    setLegalForm([]);
  }

  function createFilter() {
    if (selectedCountry && baseData?.revenue) {
      const filter = makePackageFilter({
        country: selectedCountry,
        localityValue: locality,
        addressType,
        contactType,
        revenueValue: revenue,
        revenueOptions: baseData.revenue,
        workerCountValue: workerCount,
        workerCountOptions: baseData.workerCount,
        legalForm: legalForm.map((item) =>
          typeof item === 'string' ? item : item.code,
        ),
        economicActivity,
      });
      setFilter(filter);
    }
  }

  function calculateFilter(): void {
    setResultLoaded(false);
    setResultLoading(true);
    setCalculateResult(null);
    setShowInquiry(false);
    setFilterModified(false);

    if (filter) {
      packageCalculateLoader(filter)
        .then(({ data }) => {
          setResultLoading(false);
          setCalculateResult(data);
          setResultLoaded(true);
        })
        .catch(() => {
          setResultLoading(false);
        });
    }
  }

  useEffect(() => {
    if (selectedCountry) {
      resetInquiry();
      setBaseData(null);
      setEconomicData(null);
      setSelectedCountry(selectedCountry);
      const sameCountry = packageCountry
        ? packageCountry.code === selectedCountry.code
        : false;

      if (sameCountry && storageBaseData) {
        setBaseData(storageBaseData);
      } else {
        setPackageCountryLoading(true);
        packageBaseDataLoader(selectedCountry.code)
          .then(({ data }) => {
            setBaseData(data);
            setPackageCountry(selectedCountry);
            setPackageCountryLoading(false);
            setStorageBaseData(data);
            clearFilter();
            setFilterModified(false);
          })
          .catch(() => {
            setError(true);
          });
      }

      if (sameCountry && storageEconomicData) {
        setEconomicData(storageEconomicData);
      } else {
        packageEconomicDataLoader(selectedCountry.code)
          .then(({ data }) => {
            setEconomicData(data);
            setStorageEconomicData(data);
          })
          .catch(() => {
            setError(true);
          });
      }
    }
  }, [selectedCountry]);

  return (
    <ContentWrapper title={getLang(`package`, `title`)} isError={isError}>
      <h3
        style={{
          color: '#888',
          fontWeight: 'normal',
          textTransform: 'uppercase',
        }}
      >
        {getLang(`package`, `subTitle`)}
      </h3>
      <Container>
        {/* always shown */}
        <CountryBlock
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
        />
        <>
          {/* is loaded when the country changes */}
          <LocalityBlock
            locality={locality}
            setLocality={setLocality}
            addressType={addressType}
            setAddressType={setAddressType}
            selectedCountry={selectedCountry ?? null}
            packageCountryLoading={packageCountryLoading}
            localityOptions={baseData ? baseData.locality : []}
          />
          <ContactBlock
            contactType={contactType}
            setContactType={setContactType}
          />
          <RevenueBlock
            revenue={revenue}
            setRevenue={setRevenue}
            packageCountryLoading={packageCountryLoading}
            revenueOptions={baseData ? baseData.revenue : []}
          />
          <WorkerCountBlock
            workerCount={workerCount}
            setWorkerCount={setWorkerCount}
            packageCountryLoading={packageCountryLoading}
            workerCountOptions={baseData ? baseData.workerCount : []}
          />
          <EconomicActivityBlock
            economicActivity={economicActivity}
            setEconomicActivity={setEconomicActivity}
            economicActivityData={economicData ?? null}
            packageCountryLoading={packageCountryLoading}
          />
          <LegalFormBlock
            legalForm={legalForm}
            setLegalForm={setLegalForm}
            packageCountryLoading={packageCountryLoading}
            legalFormData={baseData ? baseData.legalForm : []}
            legalFormDataTop={baseData ? baseData.legalFormTop : []}
          />
          {/*
             this component is not needed
             is already occupied in SubmitBlock - ResultBlock
             finish graphics only

            --------------------------------
            function description
            - when calculation is allowed (country is CZ or SK), the calculate button is displayed
            - after the calculation, the button is disabled until the parameters change
            - the inquiry button displays form
             */}

          <SubmitBlock
            calculate
            clearFilter={clearFilter}
            calculatePackage={calculateFilter}
            calculateAllowed={calculateAllowed}
            calculateResult={calculateResult}
            resultLoaded={resultLoaded}
            resultLoading={resultLoading}
            setShowInquiry={setShowInquiry}
            filterModify={filterModified}
          />

          {showInquiry && (
            <PackageInquiryForm
              packageFilter={filter ?? null}
              calculateAllowed={calculateAllowed}
              resetInquiry={resetInquiry}
            />
          )}
        </>
      </Container>
    </ContentWrapper>
  );
}
