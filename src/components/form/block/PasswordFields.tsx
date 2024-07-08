import * as React from 'react';
import { Dispatch, useState } from 'react';
import { PasswordField } from '../field/PasswordField';
import getLang from '../../../lang/Lang';
import { validatePassword } from '../validator/ValidatePassword';
import { FormStatus, FormStatusType } from '@/components/form/FormProps';

type PasswordFieldsProps = {
  password: string;
  setPassword: Dispatch<string>;
  setValidPasswords: Dispatch<boolean>;
  setFormStatus: Dispatch<FormStatusType | null>;
  setFormMessage: Dispatch<string | null>;
};

export function PasswordFields(props: PasswordFieldsProps) {
  const [passwordRetype, setPasswordRetype] = useState<string>(``);

  const [validPassword, setValidPassword] = useState<boolean>(true);
  const [validPasswordRetype, setValidPasswordRetype] = useState<boolean>(true);

  function passwordFieldValidate(): void {
    setValidPassword(validatePassword(props.password));
    samePasswordValidate();
  }

  function passwordRetypeFieldValidate() {
    setValidPasswordRetype(validatePassword(passwordRetype));
    samePasswordValidate();
  }

  function samePasswordValidate() {
    const samePasswords: ((prevState: boolean) => boolean) | boolean =
      props.password === passwordRetype;
    if (samePasswords === false) {
      props.setFormStatus(FormStatus.warning);
      props.setFormMessage(getLang(`form`, `passwordError`));
      setValidPassword(false);
      setValidPasswordRetype(false);
      props.setValidPasswords(false);
    } else {
      const checkPassword: boolean = validatePassword(props.password);
      const checkPasswordRetype: boolean = validatePassword(passwordRetype);
      setValidPassword(checkPassword);
      setValidPasswordRetype(checkPasswordRetype);
      props.setValidPasswords(
        samePasswords && checkPassword && checkPasswordRetype,
      );
      props.setFormStatus(null);
      props.setFormMessage(null);
    }
  }

  return (
    <>
      <PasswordField
        id="password"
        label={getLang(`form`, `password`)}
        password={props.password}
        setPassword={props.setPassword}
        validField={validPassword}
        validateField={passwordFieldValidate}
      />
      <PasswordField
        id="password-retype"
        label={getLang(`form`, `passwordRetype`)}
        password={passwordRetype}
        setPassword={setPasswordRetype}
        validField={validPasswordRetype}
        validateField={passwordRetypeFieldValidate}
      />
    </>
  );
}
