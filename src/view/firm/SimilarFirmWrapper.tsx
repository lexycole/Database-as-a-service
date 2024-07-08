import * as React from 'react';
import { useEffect, useState } from 'react';
import { SearchResultData } from '../../data/SearchResultData';
import { FirmSimilarList } from './result/FirmSimilarList';
import { similarFirmLoader } from '../../data/firm/SimilarFirmDataLoader';
import { ContentWrapper } from '../ContentWrapper';

type SimilarFirmProps = {
  uid: string;
};

export function SimilarFirmWrapper(props: SimilarFirmProps) {
  const [data, setData] = useState<SearchResultData[]>();
  const [isError, setError] = useState(false);

  useEffect(() => {
    similarFirmLoader(props.uid)
      .then(({ data }) => {
        setData(data.data);
      })
      .catch(() => {
        setError(true);
      });
  }, [props.uid]);

  return (
    <ContentWrapper isError={isError}>
      <FirmSimilarList similarResult={data ?? null} />
    </ContentWrapper>
  );
}
