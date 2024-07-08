import { NextRouter } from 'next/router';
import { Dispatch } from 'react';
import getLang from '../../lang/Lang';
import { getAccountUrl } from '../link/UserProfileLink';
import { LoginResult } from '../../data/account/LoginLoader';
import { FormStatus, FormStatusType } from '../form/FormProps';
import {
  setLoginToken,
  setRequestToken,
  setToken,
} from '../../storage/TokenStorage';

type ProcessLoginProps = {
  apiResult: LoginResult;
  router: NextRouter;
  setFormStatus: Dispatch<FormStatusType>;
  setFormMessage: Dispatch<string>;
};

export function loginByToken(loginToken: string, requestToken: string) {
  setLoginToken(loginToken);
  setRequestToken(requestToken);
}

export function processLogin(props: ProcessLoginProps) {
  const { apiResult, router, setFormStatus, setFormMessage } = props;
  setFormStatus(FormStatus.success);
  setFormMessage(getLang(`login`, `loginSuccess`));
  setToken(apiResult);
  router
    .push({
      pathname: getAccountUrl(),
    })
    .catch(() => false);
}
