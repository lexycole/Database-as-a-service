import * as React from 'react';
import { useRouter } from 'next/router';
import { FirmWrapper } from '../../view/firm/FirmWrapper';
import { parseFirmUid } from '../../components/link/FirmLink';
import { PageParamsError } from '../../error/PageParamsError';

function Firm() {
  const router = useRouter();
  const { firmUid } = router.query;

  let uid: string | null = null;

  // server side - empty query
  if (firmUid !== undefined) {
    uid = parseFirmUid(firmUid.toString());

    if (uid === null) {
      return <PageParamsError />;
    }
  }

  return (
    <FirmWrapper
      key={uid}
      firmUid={uid ?? ``}
      originalUrl={firmUid ? firmUid.toString() : ``}
    />
  );
}

export default Firm;
