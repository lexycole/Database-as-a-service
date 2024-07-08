import * as React from 'react';
import CardBox from '@/components/utils/CardBox';
import { FormatNumber } from '@/formatter/Formatter';

type CardWithCountProps = {
  theme: boolean;
  count: number;
  description: string;
  icon: any;
};

export function CardWithCount(props: CardWithCountProps) {
  return (
    <CardBox
      column
      t={props.theme}
      bg={props.theme ? '#F4F4F4' : '#333'}
      h="230px"
    >
      {props.icon}
      <h3 className="mt-[0.5rem] text-[2.5rem] font-[800]">
        {FormatNumber(props.count)}
      </h3>
      <h4 className="font-[700]">{props.description}</h4>
    </CardBox>
  );
}
