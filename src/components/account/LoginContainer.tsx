import * as React from 'react';
import { getLoginUrl } from '@/components/link/LoginLink';
import { MenuItems } from '@/components/menu/MainMenu';
import { faUser } from '@fortawesome/pro-solid-svg-icons/faUser';
import getLang from '@/lang/Lang';
import { getRegistrationUrl } from '@/components/link/RegistrationLink';
import { faPencil } from '@fortawesome/pro-solid-svg-icons/faPencil';
import Link from 'next/link';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function LoginContainer() {
  return (
    <ButtonGroup
      disableElevation
      size="small"
      variant="contained"
      color="primary"
    >
      <Link href={getLoginUrl()} passHref>
        <MenuItems fontMedium>
          <FontAwesomeIcon fixedWidth icon={faUser} className="icon" />
          <span className="icon-label">{getLang(`menu`, `login`)}</span>
        </MenuItems>
      </Link>
      <Link href={getRegistrationUrl()} passHref>
        <MenuItems fontMedium>
          <FontAwesomeIcon fixedWidth className="icon" icon={faPencil} />
          <span className="icon-label">{getLang(`menu`, `registration`)}</span>
        </MenuItems>
      </Link>
    </ButtonGroup>
  );
}
