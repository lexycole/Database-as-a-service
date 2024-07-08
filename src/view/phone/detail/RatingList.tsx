import * as React from 'react';
import getLang from '../../../lang/Lang';
import { useRecoilState } from 'recoil';
import { appTheme } from '@/storage/ThemeAtom';
import { CallTypeListRow } from './CallTypeListRow';
import { UcFirst } from '../../../formatter/Formatter';
import { GraphData } from '../../../components/graph/GraphProps';
import { RatingListRow } from '@/view/phone/detail/RatingListRow';
import { CallTypeSumItem, RatingImages, RatingSumItem } from '../PhoneProps';
import { TableBodyRow } from '@/components/detail/DetailRowStyle';

export function RatingImage(props: { rating: string }) {
  const imageSource = `/img/phone/${RatingImages.get(props.rating) ?? ``}.png`;
  return (
    <img
      className="w-[50px]"
      src={imageSource}
      alt={getRatingName(props.rating)}
      title={getRatingName(props.rating)}
    />
  );
}

export function getRatingName(rating: string) {
  return getLang(`phoneRating`, `rating${UcFirst(rating)}`);
}

// noinspection JSMismatchedCollectionQueryUpdate
export function RatingList(props: {
  ratingSumList?: RatingSumItem[];
  callTypeSumList?: CallTypeSumItem[];
}) {
  const [theme] = useRecoilState(appTheme);
  let callTypesSorted: CallTypeSumItem[] = [];

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  if (props.callTypeSumList) {
    callTypesSorted = props.callTypeSumList.sort(
      (a: CallTypeSumItem, b: CallTypeSumItem) => b.count - a.count,
    );
  }

  const ratingGraphData = {};

  // todo vz for future use - graph

  // if (props.ratingSumList) {
  //   props.ratingSumList.map((item: RatingSumItem) => {
  //     if( item.count ) {
  //       // ratingGraphData.push( { id: getRatingName( key ), value: count } )
  //       ratingGraphData[ getRatingName( item.rating ) ] = item.count;
  //     }
  //   } );
  // }

  // noinspection JSMismatchedCollectionQueryUpdate
  const callTypeGraphData: GraphData[] = [];
  // todo vz for future use - graph

  // if (props.callTypeSumList) {
  //   props.callTypeSumList.map( ( callType: CallTypeSumItem ) => {
  //     callTypeGraphData.push( {
  //       id: callType.name,
  //       label: callType.name,
  //       value: callType.count,
  //     } );
  //   } );
  // }

  return (
    <>
      <TableBodyRow t={theme}>
        <RatingListRow
          ratingItems={props.ratingSumList}
          ratingGraphData={ratingGraphData}
        />
      </TableBodyRow>
      <TableBodyRow t={theme}>
        <CallTypeListRow
          callTypeItems={callTypesSorted}
          callTypeGraphData={callTypeGraphData}
        />
      </TableBodyRow>
    </>
  );
}
