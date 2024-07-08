import * as React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@material-ui/core';
import { useRecoilState } from 'recoil';
import getLang from '../../lang/Lang';
import {
  BlockContainer,
  FilterBlock,
} from '../../view/package/style/PackageStyle';
import {
  packageInquiryLoader,
  PackageInquiryQuery,
} from '../../data/package/PackageInquiryLoader';
import { PackageFilterData } from '../package/PackageFilterProps';
import {
  RegistrationFields,
  RegistrationFormProps,
} from './block/RegistrationFields';
import { FormStatus, FormStatusType } from './FormProps';
import { loggedState } from '../../storage/AppAtom';
import { countryState } from '../../storage/SearchAtom';
import { PackageBlockTitle } from '@/view/package/component/PackageBlockTitle';
import { appTheme } from '@/storage/ThemeAtom';
import { parseFormResponseStatus } from '@/components/form/FormSentStatus';

type PackageInquiryFormProps = {
  packageFilter: PackageFilterData | null;
  resetInquiry: () => void;
  calculateAllowed: boolean;
};

export function PackageInquiryForm(props: PackageInquiryFormProps) {
  const [theme] = useRecoilState(appTheme);
  const [isUserLogged] = useRecoilState(loggedState);

  const [loading, setLoading] = useState(false);
  const [registration, setRegistration] = useState(false);

  // form status
  const [inquiryStatus, setInquiryStatus] = useState<FormStatusType | null>(
    null,
  );
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  // country
  const [selectedCountry] = useRecoilState(countryState);

  function handleSubmit(formData: RegistrationFormProps) {
    if (loading === false) {
      setInquiryStatus(null);
      setStatusMessage(null);
      setLoading(true);
      const inquiry: PackageInquiryQuery = {
        countryCode: formData.country.code,
        email: formData.email,
        firstName: formData.firstName,
        lastName: formData.lastName,
        phone: formData.phoneNumber,
        companyId: formData.companyId,
        companyName: formData.companyName,
        isCompany: formData.isCompany,
        calculateAllowed: props.calculateAllowed,
        packageFilter: props?.packageFilter ?? null,
      };

      packageInquiryLoader(inquiry)
        .then(({ data }) => {
          setLoading(false);
          setInquiryStatus(FormStatus.success);
          setStatusMessage(getLang(`package`, `inquirySuccess`));
          props.resetInquiry;
        })
        .catch((error) => {
          setLoading(false);
          setInquiryStatus(FormStatus.error);
          setStatusMessage(
            parseFormResponseStatus({
              result: error.response?.data,
              defaultMessage: getLang(`package`, `inquiryFail`),
            }),
          );
        });
    }
  }

  return (
    <FilterBlock t={theme}>
      <PackageBlockTitle title={getLang(`package`, `inquiry`)} />
      <BlockContainer>
        <>
          {
            // todo vz bude prepinac registrace ??
          }
          {registration === false && isUserLogged === false && (
            <Button
              id="package-registration"
              variant="contained"
              color="primary"
              size="large"
              onClick={() => {
                setRegistration(true);
              }}
              startIcon={<FontAwesomeIcon icon={faUser} />}
            >
              {getLang(`package`, `registration`)}
            </Button>
          )}
          <RegistrationFields
            twoColLayout
            selectedCountry={selectedCountry}
            registration={registration}
            submit={handleSubmit}
            formStatus={inquiryStatus}
            formMessage={statusMessage}
            submitText={getLang(`package`, `inquiry`)}
            setFormMessage={setStatusMessage}
            setFormStatus={setInquiryStatus}
          />
        </>
      </BlockContainer>
    </FilterBlock>
  );
}
