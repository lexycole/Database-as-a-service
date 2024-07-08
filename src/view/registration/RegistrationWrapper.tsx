import * as React from 'react';
import { Container, Grid } from '@material-ui/core';
import { RegistrationForm } from '../../components/form/RegistrationForm';
import { RegistrationInfo } from './RegistrationInfo';
import { ContentWrapper } from '../ContentWrapper';
import getLang from '../../lang/Lang';
import { RegistrationFormCardCard } from './style/RegistrationStyle';
import { appTheme } from '@/storage/ThemeAtom';
import { useRecoilState } from 'recoil';

type RegistrationWrapperProps = {};

export function RegistrationWrapper(props: RegistrationWrapperProps) {
  const [theme] = useRecoilState(appTheme);

  return (
    <ContentWrapper title={getLang(`registration`, `title`)}>
      <Container>
        <Grid container spacing={5}>
          <Grid xs={6}>
            <RegistrationFormCardCard t={Boolean(theme)}>
              <RegistrationForm />
            </RegistrationFormCardCard>
          </Grid>
          <Grid xs={5}>
            <RegistrationInfo />
          </Grid>
        </Grid>
      </Container>
    </ContentWrapper>
  );
}
