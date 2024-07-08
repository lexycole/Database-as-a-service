import * as React from 'react';
import getLang from '../../../lang/Lang';
import Skeleton from '@material-ui/lab/Skeleton';
import { TopSearchTitle } from './TopSearchHelper';
import { FirmLink } from '../../../components/link/FirmLink';
import { TopSearchRow, TopSearchTable } from './TopSearchTable';
import { TableBody, TableCell, TableRow } from '@material-ui/core';
import { DataPlaceholder } from '../../../components/page/PageHelper';
import { CountryData } from '../../../components/country/CountryProps';
import { LatestPhone } from '../../../data/topSearch/LatestPhoneLoader';

type LatestPhoneTableProps = {
  loading: boolean;
  topSearchData: LatestPhone[];
  country?: CountryData | null;
};

export function LatestPhoneTable(props: LatestPhoneTableProps) {
  return (
    <TopSearchTable
      title={
        <TopSearchTitle
          base={getLang(`topSearch`, `latestPhone`)}
          country={props?.country ?? null}
        />
      }
    >
      <TableBody>
        {!props.loading ? (
          props.topSearchData === null ? (
            <TableRow>
              <TableCell>
                <DataPlaceholder rows={15} />
              </TableCell>
            </TableRow>
          ) : (
            <>
              {props.topSearchData?.map((item: LatestPhone, key: number) => (
                <TopSearchRow
                  key={key}
                  name={
                    <FirmLink
                      {...item.firmId}
                      id={item.firmId.uid}
                      showCountry
                    />
                  }
                  value={item.contact}
                />
              ))}
            </>
          )
        ) : (
          Array(10)
            .fill(1)
            .map(() => (
              <Skeleton
                height={35}
                style={{
                  margin: '10px 0',
                }}
                key={Math.random()}
                variant="rect"
              />
            ))
        )}
      </TableBody>
    </TopSearchTable>
  );
}
