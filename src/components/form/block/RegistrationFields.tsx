import * as React from 'react';
import { Dispatch, FormEvent, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { Form } from '../../../../styles/Style';
import { AccountTypeField } from '../field/AccountTypeField';
import { EmailField } from '../field/EmailField';
import { PasswordFields } from './PasswordFields';
import { AccountDataFields } from './AccountDataFields';
import { SubmitField } from '../field/SubmitField';
import { CountryData } from '../../country/CountryProps';
import { validateEmail } from '../validator/ValidateEmail';
import { FormSentStatus } from '../FormSentStatus';
import { FormStatus, FormStatusType } from '../FormProps';
import { loggedState, userState } from '../../../storage/AppAtom';
import Spacer from '../../utils/Spacer';
import { Grid } from '@material-ui/core';
import { ConfirmCheckBoxes } from './ConfirmCheckBoxes';
import getLang from '@/lang/Lang';
import { PRIMARY_COLOR } from '../../../../styles/BaseStyle';

type RegistrationFieldsProps = {
  selectedCountry: CountryData | null;
  registration: boolean;
  submit: (data: RegistrationFormProps) => void;
  formStatus: FormStatusType | null;
  formMessage?: string | null;
  setFormStatus: Dispatch<FormStatusType | null>;
  setFormMessage: Dispatch<string | null>;
  submitText: string;
  twoColLayout?: boolean;
};

export type RegistrationFormProps = {
  isCompany: boolean;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  companyId: string;
  companyName: string;
  newsletter: boolean;
  extendedAccount: boolean;
  country: CountryData;
};

export function RegistrationFields(props: RegistrationFieldsProps) {
  const [isUserLogged] = useRecoilState(loggedState);
  const [user] = useRecoilState(userState);

  // form data
  const [isCompany, setCompany] = useState(true);
  const [email, setEmail] = useState(``);
  const [validEmail, setValidEmail] = useState(true);
  const [password, setPassword] = useState(``);
  const [firstName, setFirstName] = useState(``);
  const [lastName, setLastName] = useState(``);
  const [phoneNumber, setPhoneNumber] = useState(``);
  const [companyId, setCompanyId] = useState(``);
  const [companyName, setCompanyName] = useState(``);
  const [selectedCountry, setSelectedCountry] = useState<CountryData | null>(
    props.selectedCountry,
  );
  const [validPasswords, setValidPasswords] = useState<boolean>(true);

  // checkboxes
  const [newsletter, setNewsletter] = useState(false);
  const [extendedAccount, setExtendedAccount] = useState(false);
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    if (isUserLogged && user?.login) {
      setEmail(user.login);
      setFirstName(user?.firstName ?? ``);
      setLastName(user?.lastName ?? ``);
    }
  }, [isUserLogged]);

  function emailFieldValidate() {
    setValidEmail(validateEmail(email));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (
      validEmail &&
      (!props.registration || (props.registration && validPasswords)) &&
      selectedCountry
    ) {
      const data: RegistrationFormProps = {
        isCompany,
        email,
        password,
        firstName,
        lastName,
        phoneNumber,
        companyId,
        companyName,
        newsletter,
        extendedAccount,
        country: selectedCountry,
      };

      props.submit(data);
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={12}>
          <AccountTypeField isCompany={isCompany} setCompany={setCompany} />
        </Grid>
        <Grid item xs={12}>
          <EmailField
            email={email}
            setEmail={setEmail}
            validField={validEmail}
            validateField={emailFieldValidate}
          />
        </Grid>

        <Spacer y={10} />
        <Grid item xs={12}>
          {props.registration && (
            <PasswordFields
              password={password}
              setPassword={setPassword}
              setFormMessage={props.setFormMessage}
              setFormStatus={props.setFormStatus}
              setValidPasswords={setValidPasswords}
            />
          )}
        </Grid>

        <Grid item xs={12}>
          <AccountDataFields
            twoColLayout={props.twoColLayout}
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
            isCompany={isCompany}
            firstName={firstName}
            setFirstName={setFirstName}
            lastName={lastName}
            setLastName={setLastName}
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
            companyIdNumber={companyId}
            setCompanyIdNumber={setCompanyId}
            companyName={companyName}
            setCompanyName={setCompanyName}
          />
        </Grid>

        <p
          style={{
            textAlign: `left`,
            width: `100%`,
            marginLeft: `15px`,
            fontSize: `15px`,
          }}
        >
          <span style={{ color: PRIMARY_COLOR }}>*</span>{' '}
          {getLang(`form`, `requiredFieldsInfo`)}
        </p>
        <Spacer y={10} />
        <Grid item xs={12}>
          <ConfirmCheckBoxes
            twoColLayout={props.twoColLayout}
            consent={consent}
            setConsent={setConsent}
            extendedAccount={extendedAccount}
            setExtendedAccount={setExtendedAccount}
            newsletter={newsletter}
            setNewsletter={setNewsletter}
          />
        </Grid>

        <Grid item xs={12}>
          <SubmitField
            submitText={props.submitText}
            disabled={
              props.formStatus === FormStatus.success ||
              consent === false ||
              validPasswords === false
            }
          />
        </Grid>

        <Grid item xs={12}>
          {props.formStatus && (
            <FormSentStatus
              status={props.formStatus}
              message={props.formMessage ?? ``}
            />
          )}
        </Grid>
      </Grid>
    </Form>
  );
}
