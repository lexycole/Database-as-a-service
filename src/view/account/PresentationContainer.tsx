import * as React from 'react';
import getLang from '@/lang/Lang';
import { CategoryBlock } from '@/view/home/style/HomeStyle';
import { CategoryItem } from '@/components/category/CategoryItems';
import HtmlLink from '@/components/utils/HtmlLink';
import { IconWrapper } from '@/components/icon/IconWrapper';
import Link from 'next/link';
import {
  AdministrationFirmItem,
  AdministrationJobsItem,
  AdministrationKeywordsItem,
} from '@/components/account/PresentationItems';
import { AccountBorderedCard } from '@/view/account/style/AccountStyle';

export function PresentationContainer({ theme }: any) {
  const Presentation: CategoryItem[] = [
    AdministrationFirmItem(),
    AdministrationKeywordsItem(),
    AdministrationJobsItem(),
  ];

  return (
    <AccountBorderedCard t={theme}>
      <h2 className="text-[1.8rem] font-[700]">
        {getLang(`account`, 'presentation')}
      </h2>
      <div
        style={{
          marginTop: '3rem',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {Presentation.map(
          (item: CategoryItem, key: number) =>
            item.enabled && (
              <div className="md:mx-5">
                <Link href={item.link} passHref>
                  <HtmlLink t={theme} target={item.newWindow ? `_blank` : ``}>
                    <CategoryBlock theme={Boolean(theme)}>
                      <div style={{ flexGrow: 1 }}>
                        <IconWrapper category={item} theme={Boolean(theme)} />
                      </div>
                      <span>{item.title}</span>
                    </CategoryBlock>
                  </HtmlLink>
                </Link>
              </div>
            ),
        )}
      </div>
    </AccountBorderedCard>
  );
}
