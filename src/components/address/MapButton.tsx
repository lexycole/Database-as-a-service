import * as React from 'react';
import Link from 'next/link';
import { Button } from '@material-ui/core';
import getLang from '../../lang/Lang';
import { ButtonBlock } from '../../../styles/Style';
import { getMapUrl } from '../link/MapLink';
import { AddressData } from './AddressProps';
import { TEXT_COLOR, TEXT_COLOR_DARK } from '../../../styles/BaseStyle';

type MapButtonProps = {
  theme: boolean;
  addressData: AddressData;
};

export function MapButton(props: MapButtonProps) {
  if (
    props.addressData === undefined ||
    props.addressData.address === undefined
  ) {
    return null;
  }

  return (
    <ButtonBlock>
      <Link href={getMapUrl(props.addressData)} passHref>
        <Button
          style={{
            width: 40,
            height: 40,
            color: props.theme ? TEXT_COLOR : TEXT_COLOR_DARK,
            borderColor: props.theme ? TEXT_COLOR : TEXT_COLOR_DARK,
          }}
          size="small"
          startIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 40 40"
            >
              <g id="Group_436" transform="translate(-1483 -2242)">
                <path
                  fill={props.theme ? TEXT_COLOR : TEXT_COLOR_DARK}
                  id="Icon_awesome-map-marker-alt"
                  d="M7.325,21.332C1.147,12.375,0,11.456,0,8.164a8.164,8.164,0,0,1,16.328,0c0,3.292-1.147,4.211-7.325,13.168a1.021,1.021,0,0,1-1.678,0Zm.839-9.766a3.4,3.4,0,1,0-3.4-3.4A3.4,3.4,0,0,0,8.164,11.566Z"
                  transform="translate(1495 2251.125)"
                />
              </g>
            </svg>
          }
          title={getLang(`button`, `showMap`)}
        />
      </Link>
    </ButtonBlock>
  );
}
