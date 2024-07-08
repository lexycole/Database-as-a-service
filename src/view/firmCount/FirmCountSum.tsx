import * as React from 'react';
import { FirmCountSumProps } from './FirmCountProps';
import getLang, { langByCount } from '../../lang/Lang';
import {
  FirmCountSumBox,
  FirmCountSumContainer,
  FirmCountSumRow,
} from './style/FirmCountStyle';
import { FormatNumber } from '../../formatter/Formatter';
import { appTheme } from '@/storage/ThemeAtom';
import { useRecoilState } from 'recoil';

function FirmCountSumFormat(props: {
  firmCount: number;
  countryCount: number;
}) {
  const [theme] = useRecoilState(appTheme);

  return (
    <FirmCountSumRow t={theme}>
      <span className="firm-companies-count">
        {FormatNumber(props.firmCount)} {getLang(`firmCount`, `firmsText`)}
      </span>
      <span>-</span>
      <span>
        {FormatNumber(props.countryCount)}
        {` `}
        {langByCount(`firmCount`, `countriesText`, props.countryCount)}
      </span>
    </FirmCountSumRow>
  );
}

export function FirmCountSum(props: FirmCountSumProps) {
  const [theme] = useRecoilState(appTheme);

  return (
    <FirmCountSumContainer>
      {props.totalCountryPortal && props.totalFirmPortal && (
        <FirmCountSumBox t={theme}>
          <div className="firm-count-title">
            {getLang(`firmCount`, `portalSumTitle`)}
          </div>
          <FirmCountSumFormat
            countryCount={props.totalCountryPortal}
            firmCount={props.totalFirmPortal}
          />
        </FirmCountSumBox>
      )}

      {props.totalCountryEshop && props.totalFirmEshop && (
        <FirmCountSumBox t={theme}>
          <div className="firm-count-title">
            {getLang(`firmCount`, `eshopSumTitle`)}
          </div>
          <FirmCountSumFormat
            countryCount={props.totalCountryEshop}
            firmCount={props.totalFirmEshop}
          />
        </FirmCountSumBox>
      )}
    </FirmCountSumContainer>
  );
}
