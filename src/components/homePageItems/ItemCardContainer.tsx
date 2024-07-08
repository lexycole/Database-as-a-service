import { Grid } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import React from 'react';
import { appTheme } from '@/storage/ThemeAtom';
import { countryToFlag } from '../address/AddressValue';
import { LocaleFlag } from '../../view/menu/style/MenuStyle';
import { ContainerCard, ItemCards } from './styles/ItemsStyle';
import { useRecoilState } from 'recoil';

function ItemCardContainer({ title, items }: { title: string; items: any[] }) {
  const [theme] = useRecoilState(appTheme);

  return (
    <ContainerCard t={theme}>
      <h2 className="title font-[700] text-lg mb-16">{title}</h2>
      <Grid container justify="center" spacing={4}>
        {items &&
          items.map((item: any) => (
            <Grid item xs={12} md={5} lg={3} key={Math.random()}>
              <ItemCards t={theme}>
                {item.img && (
                  <div className="image-container">
                    <img
                      src="/img/steering.png"
                      alt=""
                      className="item-card-image"
                    />
                  </div>
                )}
                <h3 className="title">{item.title}</h3>
                <p className="description">{item.content}</p>
                <div className="type-content">
                  <div className="type">{item.type}: </div>
                  <div className="type-value">{item.typeValue}</div>
                </div>
                <div className="country">
                  <div className="country-flag">
                    <LocaleFlag>
                      {countryToFlag(item.countryFlagCode)}
                    </LocaleFlag>
                  </div>
                  <div className="country-content">
                    <div className="country-type-name">
                      {item.countryTypeName}
                    </div>
                    <Rating name="simple-controlled" value={item.rating} />
                  </div>
                </div>

                <div className="other">
                  <div className="other-title">{item.price}</div>
                  <div className="other-subTitle">{item.min}</div>
                </div>
              </ItemCards>
            </Grid>
          ))}
      </Grid>
    </ContainerCard>
  );
}

export default ItemCardContainer;
