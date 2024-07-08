import { NextSeo } from 'next-seo';
import getLang from '@/lang/Lang';
import PageNotFound from '@/view/PageNotFound';

const index = () => (
  <>
    <NextSeo
      title={getLang('pageSEO', 'pageNotFound').title}
      description={getLang('pageSEO', 'pageNotFound').description}
    />
    <PageNotFound />
  </>
);

export default index;
