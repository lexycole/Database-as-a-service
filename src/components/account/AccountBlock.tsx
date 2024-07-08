import * as React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Link from 'next/link';
import { useRecoilState } from 'recoil';
import { getLogoutUrl } from '../link/LogoutLink';
import getLang from '../../lang/Lang';
import { AccountContainer } from '../../view/menu/style/MenuStyle';
import { isClientSide, isDevelopment } from '../../environment/Environment';
import { getLoginToken, getRequestToken } from '../../storage/TokenStorage';
import { loggedState } from '../../storage/AppAtom';
import { loginByToken } from '../login/LoginModule';
import { LoginContainer } from '@/components/account/LoginContainer';
import { UserInfoContainer } from '@/components/account/UserInfoContainer';
import { MenuItems } from '@/components/menu/MainMenu';
import { faSignOut } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function UserContainer() {
  return (
    <ButtonGroup disableElevation variant="contained" color="primary">
      <UserInfoContainer />

      <Link href={getLogoutUrl()} passHref>
        <MenuItems fontMedium whiteIcon>
          <FontAwesomeIcon fixedWidth icon={faSignOut} className="icon" />
          <span className="icon-label">{getLang(`menu`, `logout`)}</span>
        </MenuItems>
      </Link>
    </ButtonGroup>
  );
}

export function AccountBlock() {
  const [isLogged, setLogged] = useRecoilState(loggedState);

  if (isClientSide()) {
    const requestToken = getRequestToken();
    const loginToken: string = getLoginToken() ?? ``;
    if (requestToken && loginToken) {
      if (isDevelopment()) {
        console.log(`Mam token ${requestToken}`);
      }
      if (loginToken) {
        loginByToken(loginToken, requestToken);
        setLogged(true);
      }
    }
  }

  return (
    <AccountContainer>
      {isLogged ? <UserContainer /> : <LoginContainer />}
    </AccountContainer>
  );
}
