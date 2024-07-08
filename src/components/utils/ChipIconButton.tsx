import * as React from 'react';
import { faMapMarkerAlt } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@material-ui/core';
import getLang from '../../lang/Lang';
import { ButtonBlock } from '../../../styles/Style';
import { TEXT_COLOR, TEXT_COLOR_DARK } from '../../../styles/BaseStyle';

type MapButtonProps = {
  theme: boolean;
};

export function ChipIconButton(props: MapButtonProps) {
  return (
    <ButtonBlock>
      {/* <Link href={getMapUrl(props.addressData)} passHref> */}
      <Button
        style={{
          color: props.theme ? TEXT_COLOR : TEXT_COLOR_DARK,
          borderColor: props.theme ? TEXT_COLOR : TEXT_COLOR_DARK,
        }}
        size="large"
        variant="outlined"
        startIcon={
          <FontAwesomeIcon
            style={{ color: props.theme ? TEXT_COLOR : TEXT_COLOR_DARK }}
            icon={faMapMarkerAlt}
            fixedWidth
          />
        }
        title={getLang(`button`, `showMap`)}
      />
      {/* </Link> */}
    </ButtonBlock>
  );
}
