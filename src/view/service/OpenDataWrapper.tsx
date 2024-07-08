import * as React from 'react';
import getLang from '../../lang/Lang';
import { useRecoilState } from 'recoil';
import { Container } from '@material-ui/core';
import { appTheme } from '@/storage/ThemeAtom';
import { ContentWrapper } from '../ContentWrapper';

export function OpenDataWrapper() {
  const [theme] = useRecoilState(appTheme);

  return (
    <ContentWrapper title={getLang(`services`, `detailTitle`)}>
      <Container>Content</Container>
    </ContentWrapper>
  );
}
