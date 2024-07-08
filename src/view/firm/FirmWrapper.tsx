import * as React from 'react';
import { useEffect, useState } from 'react';
import assert from 'assert';
import { FirmData } from './FirmProps';
import { ContentWrapper } from '../ContentWrapper';
import { IOriginalUrl } from '../../components/link/LinkProps';
import { validateFirmUrl } from '../../components/link/FirmLink';
import { firmDetailLoader } from '../../data/firm/FirmDetailLoader';
import { FirmDetailWrapper } from '@/view/firm/detail/FirmDetailWrapper';
import { isDevelopment } from '@/environment/Environment';

export type FirmWrapperProps = {
  firmUid?: string;
} & IOriginalUrl;

export function FirmWrapper(props: FirmWrapperProps) {
  const [data, setData] = useState<FirmData>();
  const [isError, setError] = useState(false);

  useEffect(() => {
    if (props.firmUid) {
      firmDetailLoader(props.firmUid)
        .then(({ data }) => {
          setData(data);
          const validation = validateFirmUrl(props.originalUrl, data);
          if (isDevelopment()) {
            // todo vz Sentry
            assert(validation, `Chyba validace url firmy`);
          }
        })
        .catch(() => {
          setError(true);
        });
    }
  }, [props.firmUid]);

  return (
    <ContentWrapper isError={isError}>
      <FirmDetailWrapper firmData={data} />
    </ContentWrapper>
  );
}
