import * as React from 'react';
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { EmailField } from './field/EmailField';
import { PasswordField } from './field/PasswordField';
import getLang from '../../lang/Lang';
import { SubmitField } from './field/SubmitField';
import { loginLoader } from '../../data/account/LoginLoader';
import { FormStatus, FormStatusType } from './FormProps';
import { FormSentStatus } from './FormSentStatus';
import { processLogin } from '../login/LoginModule';
import { Form } from '../../../styles/Style';
import { validatePassword } from './validator/ValidatePassword';
import { validateEmail } from './validator/ValidateEmail';
import { loggedState } from '../../storage/AppAtom';

export function LoginForm() {
  const [, setLogged] = useRecoilState(loggedState);

  // form data
  const [email, setEmail] = useState<string>(``);
  const [password, setPassword] = useState<string>(``);
  const [validPassword, setValidPassword] = useState(true);
  const [validEmail, setValidEmail] = useState(true);

  const [loading, setLoading] = useState(false);

  // form status
  const [loginStatus, setLoginStatus] = useState<FormStatusType | null>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const validForm = validEmail && validPassword;

  const router = useRouter();

  function passwordFieldValidate() {
    setValidPassword(validatePassword(password));
  }

  function emailFieldValidate() {
    setValidEmail(validateEmail(email));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    passwordFieldValidate();
    emailFieldValidate();

    if (validForm && loading === false) {
      setLoading(true);

      loginLoader(email, password)
        .then(({ data }) => {
          setLoading(false);
          setLogged(true);
          processLogin({
            apiResult: data,
            router,
            setFormStatus: setLoginStatus,
            setFormMessage: setStatusMessage,
          });
        })
        .catch(() => {
          setLoading(false);
          setLoginStatus(FormStatus.error);
          setStatusMessage(getLang(`login`, `loginFail`));
        });
    }
  }

  return (
    <div style={{ maxWidth: 550, margin: 'auto' }}>
      <Form onSubmit={handleSubmit}>
        <EmailField
          email={email}
          setEmail={setEmail}
          validField={validEmail}
          validateField={emailFieldValidate}
        />
        <PasswordField
          id="password"
          label={getLang(`form`, `password`)}
          password={password}
          setPassword={setPassword}
          validField={validPassword}
          validateField={passwordFieldValidate}
        />
        <SubmitField
          submitText={getLang(`login`, `loginButton`)}
          disabled={loginStatus === FormStatus.success}
        />
        {loginStatus && (
          <FormSentStatus status={loginStatus} message={statusMessage ?? ``} />
        )}
      </Form>
    </div>
  );
}
