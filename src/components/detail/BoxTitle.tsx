import * as React from 'react';
import { BoxSubTitle, BoxTitle } from './BoxStyle';
import { appTheme } from '@/storage/ThemeAtom';
import { useRecoilState } from 'recoil';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type BoxTitleProps = {
  icon?: string | IconProp;
  bg?: { light: string; dark: string };
  title: string;
  noMargin?: boolean;
  smallFont?: boolean;
  noBorderRadius?: boolean;
  rightSide?: React.ReactNode;
};

export function DetailBoxTitle(props: BoxTitleProps) {
  const [theme] = useRecoilState(appTheme);

  return (
    <BoxTitle bg={props.bg} t={Boolean(theme)}>
      <div className="w-full flex items-center justify-between">
        <div className="flex">
          {typeof props.icon === 'string' && (
            <img
              width={27}
              src={`/img/firmDetail/${props.icon}`}
              alt={props.title}
            />
          )}
          {typeof props.icon === 'object' && (
            <FontAwesomeIcon
              fixedWidth
              icon={props.icon}
              style={{ marginRight: '10px' }}
            />
          )}
          <span>{props.title}</span>
        </div>
        <div>{props.rightSide && props.rightSide}</div>
      </div>
    </BoxTitle>
  );
}

export function DetailBoxSubTitle(props: BoxTitleProps) {
  const [theme] = useRecoilState(appTheme);

  return (
    <BoxSubTitle
      t={Boolean(theme)}
      noMargin={props.noMargin ?? false}
      smallFont={props.smallFont ?? false}
      noBorderRadius={props.noBorderRadius ?? false}
    >
      {typeof props.icon === 'string' && (
        <img src={`/img/firmDetail/${props.icon}`} alt={props.title} />
      )}
      {typeof props.icon === 'object' && (
        <FontAwesomeIcon
          icon={props.icon}
          fixedWidth
          style={{ marginRight: '10px' }}
        />
      )}
      {props.title}
    </BoxSubTitle>
  );
}
