import * as React from 'react';
import { FormEvent, useState } from 'react';
import { Form } from '../../../styles/Style';
import getLang from '../../lang/Lang';
import { SubmitField } from '../../components/form/field/SubmitField';
import { PasswordFields } from '../../components/form/block/PasswordFields';
import { newPasswordLoader } from '../../data/account/NewPasswordLoader';
import { ContentWrapper } from '../ContentWrapper';
import { isDevelopment } from '@/environment/Environment';
import {
  FormSentStatus,
  isFormResponseValid,
  parseFormResponseStatus,
} from '@/components/form/FormSentStatus';
import { FormStatus, FormStatusType } from '@/components/form/FormProps';
import { DEFAULT_HOST } from '@/data/loader/ApiMethods';

type NewPasswordWrapperProps = {
  token: string | null;
  host: string | null;
};

function getServerUrl(host: string | null): string {
  return host ?? DEFAULT_HOST;
}

export function NewPasswordWrapper(props: NewPasswordWrapperProps) {
  // form data
  const [newPassword, setNewPassword] = useState<string>(``);
  const [validPasswords, setValidPasswords] = useState<boolean>(true);

  // form status
  const [newPasswordStatus, setNewPasswordStatus] =
    useState<FormStatusType | null>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const [loading, setLoading] = useState<boolean>(false);
  const [sent, setSent] = useState<boolean>(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (newPassword && props.token && loading === false) {
      setLoading(true);
      newPasswordLoader(newPassword, props.token, getServerUrl(props.host))
        .then(({ data }) => {
          setLoading(false);
          setSent(isFormResponseValid(data));
        })
        .catch((error) => {
          setLoading(false);
          setNewPasswordStatus(FormStatus.error);
          setStatusMessage(
            parseFormResponseStatus({
              result: error.response?.data,
              defaultMessage: getLang(`lostPassword`, `requestFail`),
            }),
          );
        });
    }
  }

  return (
    <ContentWrapper title={getLang(`lostPassword`, `title`)}>
      {sent ? (
        <p>{getLang(`lostPassword`, `changeSuccess`)}</p>
      ) : (
        <>
          {isDevelopment() && <h2>{props?.token}</h2>}
          <p>{getLang(`lostPassword`, `newPasswordInfo`)}</p>
          <Form onSubmit={handleSubmit}>
            <PasswordFields
              password={newPassword}
              setPassword={setNewPassword}
              setValidPasswords={setValidPasswords}
              setFormStatus={setNewPasswordStatus}
              setFormMessage={setStatusMessage}
            />
            <SubmitField
              submitText={getLang(`form`, `submit`)}
              disabled={loading || validPasswords === false}
            />
            {newPasswordStatus && (
              <FormSentStatus
                status={newPasswordStatus}
                message={statusMessage ?? ``}
              />
            )}
          </Form>
        </>
      )}
    </ContentWrapper>
  );
}
