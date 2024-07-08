import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Chip } from '@material-ui/core';
import {
  CallTypeContainer,
  ChipsRatingContainer,
  PhoneBoxRow,
  RatingListContainer,
} from '../style/PhoneStyle';
import { GraphData } from '../../../components/graph/GraphProps';
import getLang from '../../../lang/Lang';
import { faMessage } from '@fortawesome/pro-solid-svg-icons';
import { CallTypeSumItem } from '@/view/phone/PhoneProps';

type CallTypeListRowProps = {
  callTypeItems: CallTypeSumItem[];
  callTypeGraphData: GraphData[];
};

export function CallTypeListRow(props: CallTypeListRowProps) {
  if (props.callTypeItems.length === 0) {
    return null;
  }

  return (
    <div>
      <PhoneBoxRow>
        <FontAwesomeIcon style={{ marginTop: `14px` }} icon={faMessage} />
        <span style={{ lineHeight: `50px` }} className="label">
          {getLang(`phoneDetail`, `callType`)} :{` `}
        </span>
        <CallTypeContainer>
          <RatingListContainer>
            {props.callTypeItems.map((item: CallTypeSumItem) => (
              <ChipsRatingContainer>
                <Chip
                  variant="outlined"
                  label={`${item.count.toFixed()}x  ${item.name}`}
                />
              </ChipsRatingContainer>
            ))}
          </RatingListContainer>
          {
            // todo vz for future use
          }
          {/* {props.callTypeGraphData.length > 0 && ( */}
          {/*  <Box flex="1 0 50px" height="300px"> */}
          {/*    <GraphPie data={props.callTypeGraphData} /> */}
          {/*  </Box> */}
          {/* )} */}
        </CallTypeContainer>
      </PhoneBoxRow>
    </div>
  );
}
