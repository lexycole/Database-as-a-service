import * as React from 'react';
import { LogoBlock } from './LogoBlock';
import { useRecoilState } from 'recoil';
import { appTheme } from '@/storage/ThemeAtom';

export function TopPageWrapper() {
  const [theme] = useRecoilState(appTheme);

  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 20,
        // paddingTop: '3rem',
      }}
    >
      <div style={{ marginTop: '-5rem' }}>
        <LogoBlock color={theme ? '0f0e0b' : '#fff'} />
      </div>
    </div>
  );
}
