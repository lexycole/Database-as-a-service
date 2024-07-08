import * as React from 'react';
import { FirmData } from '../FirmProps';
import { Contact } from './Contact';
import { FirmDetailBox } from '../style/FirmStyle';
import { Address } from '@/view/firm/detail/Address';
import { Person } from '@/view/firm/detail/Person';
import getLang from '@/lang/Lang';
import { DetailBoxTitle } from '@/components/detail/BoxTitle';

export function ContactGroup(props: { firmData: FirmData }) {
  return props.firmData.contact === undefined ? null : (
    <FirmDetailBox id="firm-contact">
      <DetailBoxTitle
        title={getLang(`firmDetail`, `contactGroupTitle`)}
        icon="contact.svg"
      />
      <Contact firmData={props.firmData} />
      <Person firmData={props.firmData} />
      <Address firmData={props.firmData} />
    </FirmDetailBox>
  );
}
