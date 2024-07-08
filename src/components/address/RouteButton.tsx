import * as React from 'react';
import Link from 'next/link';
import { Button } from '@material-ui/core';
import getLang from '../../lang/Lang';
import { ButtonBlock } from '../../../styles/Style';
import { getRouteUrl } from '../link/MapLink';
import { AddressData } from './AddressProps';
import { TEXT_COLOR, TEXT_COLOR_DARK } from '../../../styles/BaseStyle';

type RouteButtonProps = {
  theme: boolean;
  addressData: AddressData;
};

export function RouteButton(props: RouteButtonProps) {
  if (
    props.addressData === undefined ||
    props.addressData.address === undefined
  ) {
    return null;
  }

  return (
    <ButtonBlock>
      <Link href={getRouteUrl(props.addressData)} passHref>
        <Button
          size="large"
          variant="outlined"
          style={{
            width: 40,
            height: 40,
            color: props.theme ? TEXT_COLOR : TEXT_COLOR_DARK,
            borderColor: props.theme ? TEXT_COLOR : TEXT_COLOR_DARK,
          }}
          startIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 40 40"
            >
              <g id="Group_437" transform="translate(-1540 -2242)">
                <path
                  fill={props.theme ? TEXT_COLOR : TEXT_COLOR_DARK}
                  id="Path_15469"
                  d="M147,1935.958a4.954,4.954,0,1,0-9.9,0c0,2.051,2.542,7.07,3.831,9.482l-16.369-8.784,9.6-5.007h0a.441.441,0,0,0,.148-.131s.01-.006.014-.012c.376-.546,3.679-5.387,3.679-7.456a4.05,4.05,0,0,0-8.1,0c0,1.8,2.494,5.69,3.394,7.034l-8.432,4.4c.963-1.6,2.338-4.122,2.338-5.433a3.6,3.6,0,1,0-7.2,0c0,1.9,2.894,6.347,3.225,6.847a.437.437,0,0,0,.163.148h0l18.45,9.9a.442.442,0,0,0,.212.054h0a.451.451,0,0,0,.228-.062l.008-.008a.451.451,0,0,0,.157-.159C142.629,1946.44,147,1938.644,147,1935.958ZM133.95,1923.6a.45.45,0,1,1-.45.45A.45.45,0,0,1,133.95,1923.6Zm-10.35,5.85a.45.45,0,1,1-.45.45A.45.45,0,0,1,123.6,1929.45Zm18.45,4.95a1.35,1.35,0,1,1-1.35,1.35A1.352,1.352,0,0,1,142.05,1934.4Z"
                  transform="translate(1427 329)"
                />
              </g>
            </svg>
          }
          title={getLang(`button`, `route`)}
        />
      </Link>
    </ButtonBlock>
  );
}
