import * as React from 'react';
import { PhoneRatingList } from '../PhoneProps';
import { RatingImage } from './RatingList';
import { FormatDateText } from '../../../formatter/Formatter';
import getLang, { langByCount } from '../../../lang/Lang';
import { CommentContent, CommentRow } from '../style/PhoneDetailStyle';
import { faComment, faComments } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ORANGE_COLOR, ORANGE_COLOR_DARK } from '@/../styles/BaseStyle';
import { useRecoilState } from 'recoil';
import { appTheme } from '@/storage/ThemeAtom';
import { DetailBoxTitle } from '@/components/detail/BoxTitle';

const COMMENT_LIST_MAX_ROW = 15;

function CommentBox(props: { data: PhoneRatingList }) {
  const [theme] = useRecoilState(appTheme);

  return (
    <CommentRow t={theme}>
      <div className="ratingImage">
        <RatingImage rating={props.data.rating} />
      </div>
      <CommentContent>
        <div>
          <span className="callType">
            {props.data.callType && props.data.callType.name}
          </span>
          <p>{props.data.comment}</p>
        </div>

        <span className="commentDate whitespace-nowrap">
          {FormatDateText(props.data.date)}
        </span>
      </CommentContent>
    </CommentRow>
  );
}

export function CommentList(props: { ratingList: PhoneRatingList[] }) {
  return props.ratingList === undefined ? null : (
    <>
      <DetailBoxTitle
        bg={{
          light: ORANGE_COLOR,
          dark: ORANGE_COLOR_DARK,
        }}
        title={`${COMMENT_LIST_MAX_ROW} ${getLang(
          `phoneDetail`,
          `lastComment`,
        )}`}
        icon={faComments}
        rightSide={
          <div className="flex items-center">
            <FontAwesomeIcon
              fixedWidth
              icon={faComment}
              style={{ marginRight: '10px' }}
            />
            <h5 className="ml-[2px]">
              {`${props.ratingList.length} ${langByCount(
                `phoneDetail`,
                `commentsCount`,
                props.ratingList.length,
              )}`}
            </h5>
          </div>
        }
      />
      {props.ratingList.map((item: PhoneRatingList, key: number) => (
        <div key={key}>
          <CommentBox data={item} />
        </div>
      ))}
    </>
  );
}
