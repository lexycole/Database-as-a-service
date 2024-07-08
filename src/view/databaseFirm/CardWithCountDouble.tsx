import * as React from 'react';
import CardBox from '@/components/utils/CardBox';
import { FormatNumber } from '@/formatter/Formatter';

type CardWithCountProps = {
  theme: any;
  count: number;
  description: string;
  icon: any;
};

export function CardWithCountDouble(props: CardWithCountProps) {
  return (
    <CardBox
      column
      justify="flex-end"
      t={props.theme}
      h="484px"
      bg={props.theme ? '#F4F4F4' : '#333'}
    >
      <div className="w-full h-full flex flex-col items-center justify-end">
        <div className="mb-[20%]">{props.icon}</div>
        <h3 className="mt-[0.5rem] text-[2.5rem] font-[800]">
          {FormatNumber(props.count)}
        </h3>
        <h4 className="font-[700] mb-6">{props.description}</h4>
      </div>
    </CardBox>
  );
}
