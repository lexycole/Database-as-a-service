import * as React from 'react';
import { useEffect, useState } from 'react';
import { DataPlaceholder } from '../../components/page/PageHelper';
import {
  ArticleDetailResult,
  articleLoader,
  PRIVACY_POLICY_ID,
} from '../../data/article/ArticleLoader';
import { ArticleContent } from './style/FooterStyle';
import { ContentWrapper } from '../ContentWrapper';

export function PrivacyPolicyWrapper() {
  const [data, setData] = useState<ArticleDetailResult>();
  const [isError, setError] = useState(false);

  useEffect(() => {
    articleLoader(PRIVACY_POLICY_ID)
      .then(({ data }) => {
        setData(data);
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  if (data === undefined) {
    return <DataPlaceholder rows={50} />;
  }
  return (
    <ContentWrapper isError={isError}>
      <ArticleContent dangerouslySetInnerHTML={{ __html: data.content }} />
    </ContentWrapper>
  );
}
