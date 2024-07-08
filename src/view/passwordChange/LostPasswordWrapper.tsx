import * as React from 'react';
import { FormEvent, useState } from 'react';
import getLang from '../../lang/Lang';
import { SubmitField } from '../../components/form/field/SubmitField';
import { Form } from '../../../styles/Style';
import { EmailField } from '../../components/form/field/EmailField';
import { lostPasswordLoader } from '../../data/account/LostPasswordLoader';
import { ContentWrapper } from '../ContentWrapper';
import { validateEmail } from '../../components/form/validator/ValidateEmail';
import {
  FormSentStatus,
  isFormResponseValid,
  parseFormResponseStatus,
} from '@/components/form/FormSentStatus';
import { FormStatus, FormStatusType } from '@/components/form/FormProps';
import { DEFAULT_HOST } from '@/data/loader/ApiMethods';
import { getNewPasswordUrl } from '@/components/link/LostPasswordLink';

export type LostPasswordProps = { host: string | null };

function getLostPasswordBackUrl(host: string | null): string {
  return (host ?? DEFAULT_HOST) + getNewPasswordUrl();
}

export function LostPasswordWrapper(props: LostPasswordProps) {
  // form data
  const [email, setEmail] = useState<string>(``);
  const [validEmail, setValidEmail] = useState<boolean>(true);

  // form status
  const [lostPasswordStatus, setLostPasswordStatus] =
    useState<FormStatusType | null>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const [loading, setLoading] = useState<boolean>(false);
  const [sent, setSent] = useState<boolean>(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (email && loading === false) {
      setLoading(true);
      lostPasswordLoader(email, getLostPasswordBackUrl(props.host))
        .then(({ data }) => {
          setLoading(false);
          setSent(isFormResponseValid(data));
        })
        .catch((error) => {
          setLoading(false);
          setLostPasswordStatus(FormStatus.error);
          setStatusMessage(
            parseFormResponseStatus({
              result: error.response?.data,
              defaultMessage: getLang(`lostPassword`, `requestFail`),
            }),
          );
        });
    }
  }

  function emailFieldValidate() {
    setValidEmail(validateEmail(email));
  }

  return (
    <ContentWrapper title={getLang(`lostPassword`, `title`)}>
      {sent ? (
        <p>
          {`${getLang(`lostPassword`, `requestSend`)}`}
          <b>{email}</b>
          <br />
          {getLang(`lostPassword`, `requestSend2`)}
        </p>
      ) : (
        <>
          <p>{getLang(`lostPassword`, `lostPasswordInfo`)}</p>
          <Form onSubmit={handleSubmit}>
            <EmailField
              email={email}
              setEmail={setEmail}
              validField={validEmail}
              validateField={emailFieldValidate}
            />
            <SubmitField
              submitText={getLang(`form`, `submit`)}
              disabled={loading || validEmail === false}
            />
            {lostPasswordStatus && (
              <FormSentStatus
                status={lostPasswordStatus}
                message={statusMessage ?? ``}
              />
            )}
          </Form>
        </>
      )}
    </ContentWrapper>
  );
}
