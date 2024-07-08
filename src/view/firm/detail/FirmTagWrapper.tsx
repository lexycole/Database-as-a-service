import * as React from 'react';
import { FirmData } from '@/view/firm/FirmProps';
import { FirmTagContainer } from '@/view/firm/style/FirmStyle';
import {
  faCheck,
  faDoNotEnter,
  faEraser,
  faPause,
} from '@fortawesome/pro-solid-svg-icons';
import getLang from '@/lang/Lang';
import { UcFirst } from '@/formatter/Formatter';
import {
  FirmStatusColor,
  FirmStatuses,
  FirmStatusType,
} from '@/view/firm/FirmStatus';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const FirmTagBlock = styled.span<{ t: boolean }>`
  span {
    font-size: 1.1rem;
    margin-left: 8px;
  }
`;

function StatusIconByStatus(props: { type: FirmStatusType }) {
  // todo vz doplnit ikony a barvy

  switch (props.type.toString()) {
    case FirmStatuses.active: {
      return (
        <FontAwesomeIcon
          icon={faCheck}
          style={{ color: FirmStatusColor.get(props.type) }}
        />
      );
    }
    case FirmStatuses.inactive: {
      return (
        <FontAwesomeIcon
          icon={faDoNotEnter}
          style={{ color: FirmStatusColor.get(props.type) }}
        />
      );
    }
    case FirmStatuses.liquidation: {
      return (
        <FontAwesomeIcon
          icon={faEraser}
          style={{ color: FirmStatusColor.get(props.type) }}
        />
      );
    }
    case FirmStatuses.paused: {
      return (
        <FontAwesomeIcon
          icon={faPause}
          style={{ color: FirmStatusColor.get(props.type) }}
        />
      );
    }

    default:
      return <></>;
  }
}

export function FirmStatusTag(props: { status: string; showText?: boolean }) {
  if (!(props.status in FirmStatuses)) {
    return null;
  }
  const status: FirmStatusType = FirmStatuses[props.status];
  const statusText: string = getLang(
    `firmDetail`,
    `firmStatus${UcFirst(status)}`,
  );
  return (
    <FirmTagBlock>
      <span
        style={{ fontSize: '1.4rem', marginRight: '10px' }}
        title={statusText}
      >
        <StatusIconByStatus type={status} />
      </span>
      {props.showText && <span>{statusText}</span>}
    </FirmTagBlock>
  );
}

export function FirmTagWrapper(props: { firmData: FirmData }) {
  return (
    <FirmTagContainer>
      {props.firmData.registerList.firmStatus && (
        <FirmStatusTag
          status={props.firmData.registerList.firmStatus}
          showText
        />
      )}
      {
        // todo vz doplnit stitek skryte udaje
        // todo vz for future use
        // <FirmTagBlock>
        //   <FontAwesomeIcon icon={faTimesCircle} style={{ color: 'red' }} />
        //   Skryte udaje
        // </FirmTagBlock>
      }
      {
        // todo vz for future use
        //
        //  {  UseJobs && (
        //       <FirmTagBlock>
        //         <FontAwesomeIcon icon={ faQuestionCircle }/>
        //         nabira zakazky
        //       </FirmTagBlock>
        //   ) }
      }
    </FirmTagContainer>
  );
}
