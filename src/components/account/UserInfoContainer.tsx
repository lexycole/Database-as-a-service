import * as React from 'react';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { userState } from '@/storage/AppAtom';
import { userDetailLoader } from '@/data/user/UserDetailLoader';
import Link from 'next/link';
import { getAccountUrl } from '@/components/link/UserProfileLink';
import { makeStyles } from '@material-ui/core/styles';
import {
  TEXT_COLOR_DARK,
  TEXT_COLOR_DARK_SECONDARY,
} from '../../../styles/BaseStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/pro-solid-svg-icons';
import { MenuItems } from '@/components/menu/MainMenu';
import { CircularProgress } from '@material-ui/core';
import { UserNameSpan } from '@/view/menu/style/MenuStyle';

const useStyles = makeStyles((theme: any) => ({
  toggleThemeIcon: {
    marginRight: theme.spacing(2),
  },
  menuTitleContainer: {
    width: '100%',
    display: 'flex',
  },
  settingBtn: {
    transition: '.3s all',
    color: TEXT_COLOR_DARK,
    '&:hover': {
      color: TEXT_COLOR_DARK_SECONDARY,
    },
  },
}));

export function UserInfoContainer() {
  const classes = useStyles();

  const [userDataLoading, setUserDataLoading] = useState<boolean>(false);
  const [user, setUser] = useRecoilState(userState);
  const [, setError] = useState<boolean>(false);

  const userLoaded = user !== null;

  useEffect(() => {
    if (!userDataLoading && !userLoaded) {
      setUserDataLoading(true);
      userDetailLoader()
        .then(({ data }) => {
          setUser(data.userData);
          setUserDataLoading(false);
        })
        .catch(() => {
          setUserDataLoading(false);
          setError(true);
        });
    }
  }, [userLoaded]);

  return (
    <>
      {user === null ? (
        <CircularProgress />
      ) : (
        <Link href={getAccountUrl()} passHref>
          <MenuItems fontMedium whiteIcon>
            <FontAwesomeIcon fixedWidth icon={faCircleUser} className="icon" />
            <UserNameSpan>{user.login}</UserNameSpan>
          </MenuItems>
        </Link>
      )}
    </>
  );
}
