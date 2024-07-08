import * as React from 'react';
import Link from 'next/link';
import CardBox from '@/components/utils/CardBox';
import getLang from '@/lang/Lang';
import { CategoryItem } from '@/components/category/CategoryItems';
import { Services } from '@/view/service/ServicesWrapper';
import HtmlLink from '@/components/utils/HtmlLink';

export function DatabaseFirmServices({ theme }: any) {
  return (
    <div className="mt-9">
      <h2 className="text-[2rem] font-[700]">{getLang(`services`, `title`)}</h2>
      <div className="mt-10 flex flex-wrap items-center justify-center">
        {Services.map(
          (item: CategoryItem, index: number) =>
            item.enabled && (
              <Link href={item.link} passHref>
                <HtmlLink t={theme} target={item.newWindow ? `_blank` : ``}>
                  <CardBox
                    key={index}
                    display="flex"
                    column
                    p="1rem 2rem"
                    m="1.2rem"
                    t={theme}
                    w="220px"
                    h="160px"
                    bg={theme ? '#f8f8f8' : '#333'}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="flex flex-col items-center justify-center">
                      <div className="w-[60px]">
                        {/* <IconWrapper theme={theme} category={item} /> */}
                        {item.icon}
                      </div>
                      <p className="font-[700] mt-3 text-[1.1rem]">
                        {item.title}
                      </p>
                    </div>
                  </CardBox>
                </HtmlLink>
              </Link>
            ),
        )}
      </div>
    </div>
  );
}
