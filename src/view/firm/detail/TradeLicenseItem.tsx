import * as React from 'react';
import {
  TradeLicenseDate,
  TradeLicenseName,
  TradeLicenseTypeName,
} from '@/view/firm/style/TradeLicenceStyle';
import { FormatDate } from '@/formatter/Formatter';
import getLang from '@/lang/Lang';
import { faInfoCircle } from '@fortawesome/pro-solid-svg-icons';
import { AccordionList } from '@/components/accordion/AccordionList';
import { BusinessTypeList } from '@/view/firm/detail/BusinessTypeList';
import { BusinessTypeData, TradeLicenseData } from '@/view/firm/FirmProps';
import { TableCell, TableRow, Tooltip } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BusinessTypeRow } from '@/view/firm/style/BusinessStyle';

type TradeLicenseItemProps = {
  businessType: BusinessTypeData[];
  data: TradeLicenseData;
};

function TradeLicenseDateRow(props: { label: string; date: string }) {
  return (
    <TradeLicenseDate>
      {props.label}
      <span>{FormatDate(props.date)}</span>
    </TradeLicenseDate>
  );
}

export function TradeLicenseItem(props: TradeLicenseItemProps) {
  return (
    <>
      <TableRow>
        <TableCell>
          <TradeLicenseName>{props.data.name}</TradeLicenseName>
        </TableCell>
        <TableCell>
          <TradeLicenseTypeName>{props.data.type}</TradeLicenseTypeName>
        </TableCell>
        <TableCell>
          <Tooltip
            title={
              <>
                {props.data.licenseCreated && (
                  <TradeLicenseDateRow
                    label={getLang(`firmDetail`, `tradeLicenseDateCreated`)}
                    date={props.data.licenseCreated}
                  />
                )}
                {props.data.licenseSuspended && (
                  <TradeLicenseDateRow
                    label={getLang(`firmDetail`, `tradeLicenseDateSuspended`)}
                    date={props.data.licenseSuspended}
                  />
                )}
                {props.data.licenseCanceled && (
                  <TradeLicenseDateRow
                    label={getLang(`firmDetail`, `tradeLicenseDateCanceled`)}
                    date={props.data.licenseCanceled}
                  />
                )}
              </>
            }
          >
            <span style={{ paddingLeft: '15px' }}>
              <FontAwesomeIcon icon={faInfoCircle} />
            </span>
          </Tooltip>
        </TableCell>
      </TableRow>
      {props.businessType &&
        props.businessType.length > 0 &&
        props.data.hasBusinessType && (
          <BusinessTypeRow>
            <TableCell colSpan={3} className="business-type-list">
              <AccordionList
                title={getLang(`firmDetail`, `businessTypeTitle`)}
                count={props.businessType.length}
              >
                <BusinessTypeList businessType={props.businessType} />
              </AccordionList>
            </TableCell>
          </BusinessTypeRow>
        )}
    </>
  );
}
