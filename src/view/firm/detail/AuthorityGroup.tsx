import * as React from 'react';
import { FirmData } from '../FirmProps';
import { Statutory } from './Statutory';
import { Share } from './Share';
import { FirmDetailBox } from '../style/FirmStyle';
import getLang from '../../../lang/Lang';
import { DetailBoxTitle } from '../../../components/detail/BoxTitle';

export function AuthorityGroup(props: { firmData: FirmData }) {
  return props.firmData.authority === undefined ? null : (
    <FirmDetailBox id="firm-authority">
      <DetailBoxTitle
        title={getLang(`firmDetail`, `authorityGroupTitle`)}
        icon="share.svg"
      />
      <Statutory firmData={props.firmData} />
      <Share firmData={props.firmData} />
    </FirmDetailBox>
  );
}
