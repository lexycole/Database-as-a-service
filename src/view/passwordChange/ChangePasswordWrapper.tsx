import * as React from 'react';
import { FormEvent, useState } from 'react';
import getLang from '../../lang/Lang';
import { ContentWrapper } from '../ContentWrapper';
import { Form } from '../../../styles/Style';
import { PasswordFields } from '@/components/form/block/PasswordFields';
import { SubmitField } from '@/components/form/field/SubmitField';
import {
  FormSentStatus,
  isFormResponseValid,
  parseFormResponseStatus,
} from '@/components/form/FormSentStatus';
import { FormStatus, FormStatusType } from '@/components/form/FormProps';
import { DEFAULT_HOST } from '@/data/loader/ApiMethods';
import { changePasswordLoader } from '@/data/account/ChangePasswordLoader';

type ChangePasswordWrapperProps = {
  host: string | null;
};

function getServerUrl(host: string | null): string {
  return host ?? DEFAULT_HOST;
}

export function ChangePasswordWrapper(props: ChangePasswordWrapperProps) {
  // form data
  const [password, setPassword] = useState<string>(``);
  const [validPasswords, setValidPasswords] = useState<boolean>(true);

  // form status
  const [changePasswordStatus, setChangePasswordStatus] =
    useState<FormStatusType | null>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const [loading, setLoading] = useState<boolean>(false);
  const [sent, setSent] = useState<boolean>(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (password && loading === false) {
      setLoading(true);
      changePasswordLoader(password, getServerUrl(props.host))
        .then(({ data }) => {
          setLoading(false);
          setSent(isFormResponseValid(data));
        })
        .catch((error) => {
          setLoading(false);
          setChangePasswordStatus(FormStatus.error);
          setStatusMessage(
            parseFormResponseStatus({
              result: error.response?.data,
              defaultMessage: getLang(`changePassword`, `requestFail`),
            }),
          );
        });
    }
  }

  return (
    <ContentWrapper title={getLang(`changePassword`, `title`)}>
      {sent ? (
        <p>{getLang(`changePassword`, `changeSuccess`)}</p>
      ) : (
        <>
          <Form onSubmit={handleSubmit}>
            <PasswordFields
              password={password}
              setPassword={setPassword}
              setValidPasswords={setValidPasswords}
              setFormStatus={setChangePasswordStatus}
              setFormMessage={setStatusMessage}
            />
            <SubmitField
              submitText={getLang(`form`, `submit`)}
              disabled={loading || validPasswords === false}
            />
            {changePasswordStatus && (
              <FormSentStatus
                status={changePasswordStatus}
                message={statusMessage ?? ``}
              />
            )}
          </Form>
        </>
      )}
    </ContentWrapper>
  );
}
