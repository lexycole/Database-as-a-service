import * as React from 'react';
import Link from 'next/link';
import { appTheme } from '@/storage/ThemeAtom';
import { CategoryBlock } from '../../view/home/style/HomeStyle';
import {
  CategoryItem,
  CrmCategoryItem,
  FirmDatabaseCategoryItem,
  JobsCategoryItem,
  OpenDataCategoryItem,
  PhoneCategoryItem,
  ProductCategoryItem,
  TenderCategoryItem,
} from '@/components/category/CategoryItems';
import { useRecoilState } from 'recoil';
import HtmlLink from '../utils/HtmlLink';
import { IconWrapper } from '@/components/icon/IconWrapper';

export function CategoryContainer() {
  const [theme] = useRecoilState(appTheme);

  const Category: CategoryItem[] = [
    FirmDatabaseCategoryItem(),
    PhoneCategoryItem(),
    CrmCategoryItem(),
    OpenDataCategoryItem(),
    ProductCategoryItem(),
    JobsCategoryItem(),
    TenderCategoryItem(),
  ];

  return (
    // <Grid container justify="center" spacing={5} style={{ marginTop: `3.2rem` }}>
    <div className="flex items-start justify-center flex-wrap mt-5">
      {Category.map(
        (item: CategoryItem, key: number) =>
          item.enabled && (
            // <Grid
            //   item
            //   xs={12}
            //   sm={6}
            //   lg={2}
            //   key={key}
            //   style={{ border: "1px solid #333" }}
            // >
            <div
              style={{ flexBasis: '200px', margin: '1.6rem 1rem 1rem' }}
              key={key}
            >
              <Link href={item.link} passHref>
                <HtmlLink t={theme} target={item.newWindow ? `_blank` : ``}>
                  <CategoryBlock theme={Boolean(theme)}>
                    <IconWrapper category={item} theme={Boolean(theme)} />
                    <h2 className="font-[700] text-[1rem] m-3 text-center max-w-[80%]">
                      {item.title}
                    </h2>
                  </CategoryBlock>
                </HtmlLink>
              </Link>
              <p
                className="font-[600] text-center"
                style={{ fontSize: '14px' }}
              >
                {item.description}
              </p>
            </div>
            // </Grid>
          ),
      )}
      {/* // </Grid> */}
    </div>
  );
}
