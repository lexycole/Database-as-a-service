import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import getLang from '../../../lang/Lang';
import {
  PhoneBoxRow,
  RatingBox,
  RatingListContainer,
} from '../style/PhoneStyle';
import { getRatingName, RatingImage } from './RatingList';
import { RatingSumItem } from '@/view/phone/PhoneProps';

type RatingListRowProps = {
  ratingItems?: RatingSumItem[];
  ratingGraphData: object;
};

export function RatingCountBox(props: { rating: string; count: number }) {
  return (
    <RatingBox>
      <RatingImage rating={props.rating} />
      <span className="flex items-center">
        {getRatingName(props.rating)}{' '}
        <span className="times-text ml-1">{props.count.toFixed()}x</span>
      </span>
    </RatingBox>
  );
}

export function RatingListRow(props: RatingListRowProps) {
  if (props.ratingItems === undefined || props.ratingItems.length === 0) {
    return null;
  }

  return (
    <>
      <PhoneBoxRow>
        <FontAwesomeIcon style={{ marginTop: `14px` }} icon={faStar} />
        <span className="label leading-[50px] font-[600]">
          {getLang(`phoneDetail`, `ratingAvg`)} :{` `}
        </span>
        <RatingListContainer>
          {props.ratingItems.map((item: RatingSumItem, key: number) => (
            <RatingCountBox key={key} count={item.count} rating={item.rating} />
          ))}
        </RatingListContainer>
      </PhoneBoxRow>
      {
        // todo vz for future use
      }
      {/* <div style={{ height: `300px` }}> */}
      {/*  <RatingListGraph graphData={props.ratingGraphData} /> */}
      {/* </div> */}
    </>
  );
}
