import * as React from 'react';
import Link from 'next/link';
import getLang from '../../lang/Lang';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { Container, Grid, Button } from '@material-ui/core';
import { appTheme } from '@/storage/ThemeAtom';
import { ContentWrapper } from '../ContentWrapper';
import {
  CategoryItem,
  CrmCategoryItem,
  EshopDatabaseCategoryItem,
  FirmDatabaseCategoryItem,
  JobsCategoryItem,
  ProductCategoryItem,
  TenderCategoryItem,
} from '@/components/category/CategoryItems';
import { IconWrapper } from '@/components/icon/IconWrapper';
import {
  PRIMARY_BUTTON_TEXT_COLOR,
  SECONDARY_BORDER_COLOR,
  SECONDARY_BORDER_COLOR_DARK,
} from '@/../styles/BaseStyle';

const ServiceCard = styled.div<{ t: boolean }>`
  display: flex;
  min-height: 420px;
  min-width: 380px;
  border-radius: 12px;
  padding: 1.4rem 2rem;
  flex-direction: column;
  border: 1px solid
    ${(props) =>
      props.t ? SECONDARY_BORDER_COLOR : SECONDARY_BORDER_COLOR_DARK};

  .header {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    .header-img {
      flex-basis: 50px;
      display: inline-flex;
    }
    h2 {
      font-size: 1.3rem;
      font-weight: 800;
      flex-basis: 300px;
      display: inline-flex;
    }
  }

  img {
    max-width: 90px;
  }

  h2 {
    font-size: 1rem;
    margin-left: 1rem;
    font-weight: bolder;
    text-transform: uppercase;
  }

  a {
    text-decoration: none;
    color: ${(props) => (props.t ? '#111' : '#fff')};
  }

  .description {
    font-size: 1.14rem;
    font-weight: 500;
    margin-top: 1.5rem;
    text-align: left;
  }
`;

export const Services: CategoryItem[] = [
  FirmDatabaseCategoryItem(),
  EshopDatabaseCategoryItem(),
  CrmCategoryItem(),
  JobsCategoryItem(),
  ProductCategoryItem(),
  TenderCategoryItem(),
];

export function ServicesWrapper() {
  const [theme] = useRecoilState(appTheme);

  const Services: CategoryItem[] = [
    FirmDatabaseCategoryItem(),
    EshopDatabaseCategoryItem(),
    CrmCategoryItem(),
    JobsCategoryItem(),
    ProductCategoryItem(),
    TenderCategoryItem(),
  ];

  return (
    <ContentWrapper
      title={getLang(`services`, `title`)}
      icon={<img src="/img/page/services.svg" alt="services" />}
    >
      <Container>
        <Grid container spacing={5}>
          {Services.map(
            (item: CategoryItem, key: number) =>
              item?.enabled && (
                <Grid key={key} item xs={12} sm={10} md={6} lg={4}>
                  <ServiceCard t={theme}>
                    <div className="header">
                      <div className="header-img">
                        <IconWrapper theme={Boolean(theme)} category={item} />
                      </div>
                      <div className="header-title">
                        <Link href={item.link} passHref>
                          <a target={item.newWindow ? `_blank` : ``}>
                            <h2>{item.title}</h2>
                          </a>
                        </Link>
                      </div>
                    </div>
                    <p className="description">{item.description}</p>
                    <Link href={item.link} passHref>
                      <a
                        target={item.newWindow ? `_blank` : ``}
                        style={{
                          minWidth: 160,
                          marginTop: 'auto',
                          marginRight: 'auto',
                          marginBottom: '.3rem',
                        }}
                        rel="noreferrer"
                      >
                        <Button
                          color="primary"
                          disableElevation
                          variant="contained"
                          style={{
                            color: PRIMARY_BUTTON_TEXT_COLOR,
                            minWidth: 160,
                            fontWeight: 700,
                            borderRadius: '10px',
                            padding: '0.7rem 1rem',
                          }}
                        >
                          {getLang(`category`, `buttonVisit`)}
                        </Button>
                      </a>
                    </Link>
                  </ServiceCard>
                </Grid>
              ),
          )}
        </Grid>
      </Container>
    </ContentWrapper>
  );
}
