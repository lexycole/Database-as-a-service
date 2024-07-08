import React from 'react';
import ItemCardContainer from '../../components/homePageItems/ItemCardContainer';

function HomePageItems() {
  // MOCK DATA
  // TODO: Fetch From server...

  const items = [
    {
      img: `img-src`,
      title: `Kozeny volant`,
      content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus blanditiis odit maxime in? Perferendis nostrum maiores suscipit.`,
      type: `Kalegarie`,
      typeValue: `Auto-Moto`,
      countryFlagCode: `cz`,
      countryTypeName: `ImcoPhama s.r.o`,
      rating: 3,
      price: `5 799 KZ`,
      min: `Min 1 000 kz`,
    },
    {
      img: `img-src`,
      title: `Kozeny volant`,
      content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus blanditiis odit maxime in? Perferendis nostrum maiores suscipit.`,
      type: `Kalegarie`,
      typeValue: `Auto-Moto`,
      countryFlagCode: `cz`,
      countryTypeName: `ImcoPhama s.r.o`,
      rating: 3,
      price: `5 799 KZ`,
      min: `Min 1 000 kz`,
    },
    {
      img: `img-src`,
      title: `Kozeny volant`,
      content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus blanditiis odit maxime in? Perferendis nostrum maiores suscipit.`,
      type: `Kalegarie`,
      typeValue: `Auto-Moto`,
      countryFlagCode: `cz`,
      countryTypeName: `ImcoPhama s.r.o`,
      rating: 3,
      price: `5 799 KZ`,
      min: `Min 1 000 kz`,
    },
    {
      img: `img-src`,
      title: `Kozeny volant`,
      content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus blanditiis odit maxime in? Perferendis nostrum maiores suscipit.`,
      type: `Kalegarie`,
      typeValue: `Auto-Moto`,
      countryFlagCode: `cz`,
      countryTypeName: `ImcoPhama s.r.o`,
      rating: 3,
      price: `5 799 KZ`,
      min: `Min 1 000 kz`,
    },
  ];

  return (
    <div>
      <ItemCardContainer title="Doporucovae produckty(6)" items={items} />
      <ItemCardContainer
        title="Doporucovae produckty(6)"
        items={items.map((i) => ({ ...i, img: undefined }))}
      />
      <ItemCardContainer
        title="Doporucovae produckty(6)"
        items={items.map((i) => ({ ...i, img: undefined }))}
      />
    </div>
  );
}

export default HomePageItems;
