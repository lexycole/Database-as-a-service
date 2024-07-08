import * as React from 'react';
import { faPrint } from '@fortawesome/pro-solid-svg-icons';
import { FirmDetailBox } from '../style/FirmStyle';
import getLang from '../../../lang/Lang';
import { FirmData } from '../FirmProps';
import { DetailBoxTitle } from '../../../components/detail/BoxTitle';

export function Offer(props: { firmData: FirmData }) {
  return props.firmData.offer === undefined ? null : (
    <FirmDetailBox id="firm-offer">
      {
        // todo vz nadpis sloupcu
        // todo vz obrazek
      }
      <DetailBoxTitle
        title={getLang(`firmDetail`, `offerGroupTitle`)}
        icon={faPrint}
      />
      <img width="100%" src="/img/tmp/products.png" alt="products" />
    </FirmDetailBox>
  );
}
