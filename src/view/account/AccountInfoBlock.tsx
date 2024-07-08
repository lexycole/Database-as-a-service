import * as React from 'react';
import getLang from '@/lang/Lang';
import { Grid } from '@material-ui/core';
import { WebLinkStyle } from '@/components/link/WebLink';
import Link from 'next/link';
import {
  AccountInfoCard,
  AccountManagement,
} from '@/view/account/style/AccountStyle';
import { AccountData } from '@/components/account/AccountData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faLockAlt } from '@fortawesome/pro-solid-svg-icons';
import { getChangePasswordUrl } from '@/components/link/ChangePasswordLink';
import { getAccountDataChangeUrl } from '@/components/link/AccountDataChangeLink';
import { DataLoadError } from '@/error/DataLoadError';
import { Skeleton } from '@material-ui/lab';
import { UserData } from '@/components/user/UserData';

type AccountInfoProps = {
  accountData: AccountData | null;
  theme: boolean;
  user: UserData | null;
  loadError: boolean;
};

function UserInfoRow(props: { label: string; value: string | undefined }) {
  return (
    <p className="detail">
      {props.label && <span>{props.label}</span>}
      <span>{props?.value ?? ``}</span>
    </p>
  );
}

function getAccountInfoCard(props: AccountInfoProps) {
  const { accountData, theme, user } = props;

  return accountData === null ? null : (
    <>
      <div
        className="header"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}
      >
        {`${user?.firstName} ${user?.lastName}`}
        {accountData.customer.idNumber && (
          <span style={{ marginLeft: 'auto', fontWeight: 400, fontSize: 16 }}>
            {getLang(`account`, `idNumber`)}:{' '}
            {accountData.customer?.idNumber ?? ``}
          </span>
        )}
      </div>
      <div className="userLogin" style={{ paddingLeft: '10px' }}>
        {accountData.user.login}
      </div>
      <div className="content" style={{ padding: '2rem 2rem 1rem 10px' }}>
        <div className="accountName">
          {accountData.customer.firmName
            ? accountData.customer.firmName
            : accountData.customer.name}
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
          }}
        >
          <div>
            {
              // user email
              accountData.user.email &&
                UserInfoRow({
                  label: ``,
                  value: accountData.user.email,
                })
            }
            {
              // user phone
              accountData.user.phone &&
                UserInfoRow({
                  label: ``,
                  value: accountData.user.phone,
                })
            }
          </div>

          <AccountManagement>
            <p className="detail icon-text">
              <FontAwesomeIcon
                icon={faAddressCard}
                style={{ marginRight: '10px' }}
                fixedWidth
              />
              <Link href={getAccountDataChangeUrl()} passHref>
                <WebLinkStyle theme={theme}>
                  {getLang(`account`, `accountDataChange`)}
                </WebLinkStyle>
              </Link>
            </p>
            <p className="detail icon-text">
              <FontAwesomeIcon
                icon={faLockAlt}
                style={{ marginRight: '10px' }}
                fixedWidth
              />
              <Link href={getChangePasswordUrl()} passHref>
                <WebLinkStyle theme={theme}>
                  {getLang(`account`, `passwordChange`)}
                </WebLinkStyle>
              </Link>
            </p>
          </AccountManagement>
        </div>
      </div>
    </>
  );
}

export function AccountInfoBlock(props: AccountInfoProps) {
  const { theme } = props;

  return (
    <Grid item xs={12} md={7}>
      <AccountInfoCard
        h={250}
        t={theme}
        titleSize="1.6rem"
        padding="1rem"
        titlePadding="10px"
      >
        {!props.loadError ? (
          <>
            {props.accountData !== null ? (
              getAccountInfoCard(props)
            ) : (
              <div className="">
                <div className="flex justify-between">
                  <div>
                    <Skeleton width="200px" height="45px" />
                    <Skeleton width="180px" height="35px" />
                  </div>
                  <div>
                    <Skeleton width="120px" height="35px" />
                  </div>
                </div>
                <div className="mt-5">
                  <Skeleton width="180px" height="35px" />
                </div>
                <div className="flex justify-between mt-5">
                  <div className="">
                    <Skeleton width="180px" height="35px" />
                    <Skeleton width="180px" height="35px" />
                  </div>
                  <Skeleton width="180px" height="35px" />
                </div>
              </div>
            )}
          </>
        ) : (
          <DataLoadError />
        )}
      </AccountInfoCard>
    </Grid>
  );
}
