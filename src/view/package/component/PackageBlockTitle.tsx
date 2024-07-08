import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { BlockTitle, ResultFirmCountSpan } from '../style/PackageStyle';
import { appTheme } from '@/storage/ThemeAtom';
import { useRecoilState } from 'recoil';
import { FormatNumber } from '@/formatter/Formatter';

type PackageBlockTitleProps = {
  title: string;
  icon?: IconProp;
};

type PackageResultBlockTitleProps = {
  title: string;
  icon?: IconProp;
  count?: number;
};

export function PackageBlockTitle(props: PackageBlockTitleProps) {
  const [theme] = useRecoilState(appTheme);

  return (
    <BlockTitle t={theme}>
      {props.icon && <FontAwesomeIcon icon={props.icon} size="2x" />}
      <h3>{props.title}</h3>
    </BlockTitle>
  );
}

export function PackageResultBlockTitle(props: PackageResultBlockTitleProps) {
  const [theme] = useRecoilState(appTheme);

  return (
    <BlockTitle t={theme}>
      {props.icon && <FontAwesomeIcon icon={props.icon} size="2x" />}
      <h3>
        {props.title}
        <ResultFirmCountSpan t={theme}>
          {FormatNumber(props.count)}
        </ResultFirmCountSpan>
      </h3>
    </BlockTitle>
  );
}
