import * as React from 'react';
import { FirmData } from '../FirmProps';
import { EconomicActivity } from './EconomicActivity';
import { FirmDetailBox } from '../style/FirmStyle';
import getLang from '../../../lang/Lang';
import { TradeLicense } from './TradeLicense';
import { DetailBoxTitle } from '../../../components/detail/BoxTitle';

export function BusinessGroup(props: { firmData: FirmData }) {
  return props.firmData.business === undefined ? null : (
    <FirmDetailBox id="firm-business">
      <DetailBoxTitle
        title={getLang(`firmDetail`, `businessGroupTitle`)}
        icon="economic-activity.svg"
      />
      <EconomicActivity firmData={props.firmData} />
      <TradeLicense firmData={props.firmData} />
    </FirmDetailBox>
  );
}
