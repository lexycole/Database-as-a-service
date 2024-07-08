import * as React from 'react';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import getLang from '../../lang/Lang';
import {
  RegistrationFields,
  RegistrationFormProps,
} from './block/RegistrationFields';
import { FormStatus, FormStatusType } from './FormProps';
import { countryState } from '../../storage/SearchAtom';
import {
  registrationLoader,
  RegistrationQuery,
} from '../../data/account/RegistrationLoader';
import { RegistrationBackground } from '@/view/registration/style/RegistrationStyle';
import { appTheme } from '@/storage/ThemeAtom';
import { parseFormResponseStatus } from '@/components/form/FormSentStatus';

export function RegistrationForm() {
  const [theme] = useRecoilState(appTheme);

  // country
  const [selectedCountry] = useRecoilState(countryState);

  const [loading, setLoading] = useState<boolean>(false);

  // form status
  const [registrationStatus, setRegistrationStatus] =
    useState<FormStatusType | null>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  function handleSubmit(formData: RegistrationFormProps) {
    if (loading === false) {
      setRegistrationStatus(null);
      setStatusMessage(null);
      setLoading(true);
      const registrationData: RegistrationQuery = {
        countryCode: formData.country.code,
        email: formData.email,
        password: formData.password,
        firstName: formData.firstName,
        lastName: formData.lastName,
        phone: formData.phoneNumber,
        companyId: formData.companyId,
        companyName: formData.companyName,
        isCompany: formData.isCompany,
      };

      registrationLoader(registrationData)
        .then(({ data }) => {
          setLoading(false);
          setRegistrationStatus(FormStatus.success);
          setStatusMessage(getLang(`registration`, `registrationSuccess`));
        })
        .catch((error) => {
          setLoading(false);
          setRegistrationStatus(FormStatus.error);
          setStatusMessage(
            parseFormResponseStatus({
              result: error.response?.data,
              defaultMessage: getLang(`registration`, `registrationFail`),
            }),
          );
        });
    }
  }

  return (
    <>
      <RegistrationBackground t={theme}>
        <p style={{ paddingBottom: `20px`, fontSize: `16px` }}>
          {getLang(`registration`, `registrationTitle`)}
        </p>
        <RegistrationFields
          registration
          selectedCountry={selectedCountry}
          formStatus={registrationStatus}
          formMessage={statusMessage}
          submit={handleSubmit}
          submitText={getLang(`registration`, `button`)}
          setFormMessage={setStatusMessage}
          setFormStatus={setRegistrationStatus}
        />
      </RegistrationBackground>
    </>
  );
}
