import * as React from 'react';
import { Dispatch } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTh, faThLarge } from '@fortawesome/pro-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { IconButton } from '@material-ui/core';
import getLang from '../../../lang/Lang';
import { ListStyleItem, ListStyleSwitchBlock } from '../style/SearchStyle';
import { appTheme } from '@/storage/ThemeAtom';
import { useRecoilState } from 'recoil';

type ListStyleSwitchProps = {
  listStyle: ListStyleType;
  setListStyle: Dispatch<ListStyleEnum>;
};

export enum ListStyleEnum {
  rows = `rows`,
  tile = `tile`,
  tileSmall = `tileSmall`,
}

type ListStyleOption = {
  title: string;
  type: ListStyleType;
  icon: IconProp;
};

const ListStyleOptions: ListStyleOption[] = [
  {
    title: getLang(`search`, `listStyleRows`),
    type: ListStyleEnum.rows,
    icon: faBars,
  },
  {
    title: getLang(`search`, `listStyleTile`),
    type: ListStyleEnum.tile,
    icon: faThLarge,
  },
  {
    title: getLang(`search`, `listStyleTileSmall`),
    type: ListStyleEnum.tileSmall,
    icon: faTh,
  },
];

export type ListStyleType = keyof typeof ListStyleEnum;

export function ListStyleSwitch(props: ListStyleSwitchProps) {
  const [theme] = useRecoilState(appTheme);
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    props.setListStyle(
      event.currentTarget.getAttribute(`data-type`) as ListStyleEnum,
    );
  };

  return (
    <ListStyleSwitchBlock>
      {ListStyleOptions.map((item: ListStyleOption, key: number) => (
        <ListStyleItem
          key={key}
          active={item.type === props.listStyle}
          data-type={item.type}
          onClick={handleClick}
          t={theme}
        >
          <IconButton>
            <FontAwesomeIcon icon={item.icon} title={item.title} />
          </IconButton>
        </ListStyleItem>
      ))}
    </ListStyleSwitchBlock>
  );
}
