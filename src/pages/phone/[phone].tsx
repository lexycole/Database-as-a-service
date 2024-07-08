import * as React from 'react';
import { useRouter } from 'next/router';
import { PhoneWrapper } from '../../view/phone/PhoneWrapper';
import { parsePhoneId } from '../../components/link/PhoneLink';
import { PageParamsError } from '../../error/PageParamsError';

function Phone() {
  const router = useRouter();
  const { phone } = router.query;

  let phoneId: string | null = null;

  // server side - empty query
  if (phone !== undefined) {
    phoneId = parsePhoneId(phone.toString());

    if (phoneId === null) {
      return <PageParamsError />;
    }
  }

  return (
    <div key={phoneId}>
      <PhoneWrapper phone={phoneId ?? ``} />
    </div>
  );
}

export default Phone;
