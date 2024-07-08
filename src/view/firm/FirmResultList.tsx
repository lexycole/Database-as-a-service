import * as React from 'react';
import { useEffect, useState } from 'react';
import { FirmList } from './result/FirmList';
import { FirmBasic } from './FirmBasicProps';
import { firmResultLoader } from '../../data/firm/FirmResultLoader';
import { ContentWrapper } from '../ContentWrapper';

export function FirmResultList() {
  // todo vz debug component

  const [data, setData] = useState<FirmBasic[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    firmResultLoader()
      .then(({ data }) => {
        setData(data.firm);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <ContentWrapper title="Seznam nalezených firem" isError={isError}>
      <FirmList data={data} loading={loading} />
    </ContentWrapper>
  );
}
