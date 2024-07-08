import * as React from 'react';
import getLang from '../../lang/Lang';
import { ContentWrapper } from '../ContentWrapper';

export function EshopWrapper() {
  return (
    <ContentWrapper title={getLang(`eshop`, `title`)}>
      <a target="_blank">
        <img src="/img/tmp/eshop.png" alt="shop.expanzo.com" />
      </a>
    </ContentWrapper>
  );
}
