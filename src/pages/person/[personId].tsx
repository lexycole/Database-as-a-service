import * as React from 'react';
import { useRouter } from 'next/router';
import { PersonWrapper } from '../../view/person/PersonWrapper';
import { parsePersonId } from '../../components/link/PersonLink';
import { PageParamsError } from '../../error/PageParamsError';
import { CryptId } from '../../data/DataType';

function Person() {
  const router = useRouter();
  const { personId } = router.query;

  let encryptedId: CryptId | null = null;

  // server side - empty query
  if (personId !== undefined) {
    encryptedId = parsePersonId(personId.toString());

    if (encryptedId === null) {
      return <PageParamsError />;
    }
  }

  return (
    <PersonWrapper
      key={encryptedId}
      personId={encryptedId ?? ``}
      originalUrl={personId ? personId.toString() : ``}
    />
  );
}

export default Person;
