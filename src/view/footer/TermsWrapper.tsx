import * as React from 'react';
import { useEffect, useState } from 'react';
import {
  ArticleDetailResult,
  articleLoader,
  TERMS_AND_CONDITIONS_ID,
} from '../../data/article/ArticleLoader';
import { DataPlaceholder } from '../../components/page/PageHelper';
import { ArticleContent } from './style/FooterStyle';
import { ContentWrapper } from '../ContentWrapper';

export function TermsWrapper() {
  const [data, setData] = useState<ArticleDetailResult>();
  const [isError, setError] = useState(false);

  useEffect(() => {
    articleLoader(TERMS_AND_CONDITIONS_ID)
      .then(({ data }) => {
        setData(data);
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  return (
    <ContentWrapper isError={isError}>
      {data === undefined ? (
        <DataPlaceholder rows={50} />
      ) : (
        <ArticleContent dangerouslySetInnerHTML={{ __html: data.content }} />
      )}
    </ContentWrapper>
  );
}
