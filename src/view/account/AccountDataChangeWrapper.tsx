import * as React from 'react';
import { useRecoilState } from 'recoil';
import { ContentWrapper } from '../ContentWrapper';
import { appTheme } from '@/storage/ThemeAtom';

import getLang from '@/lang/Lang';

export function AccountDataChangeWrapper() {
  const [theme] = useRecoilState(appTheme);

  return (
    <ContentWrapper title={getLang(`account`, `accountDataChange`)}>
      todo
    </ContentWrapper>
  );
}
