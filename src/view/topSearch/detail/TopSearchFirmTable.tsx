import * as React from 'react';
import { TableBody, TableCell, TableRow } from '@material-ui/core';
import { TopSearchRow, TopSearchTable } from './TopSearchTable';
import { FirmBasic } from '../../firm/FirmBasicProps';
import { FirmLink } from '../../../components/link/FirmLink';
import { TopSearchTitle } from './TopSearchHelper';
import getLang from '../../../lang/Lang';
import Skeleton from '@material-ui/lab/Skeleton';
import { DataPlaceholder } from '../../../components/page/PageHelper';
import { CountryData } from '../../../components/country/CountryProps';

type TopSearchFirmTableProps = {
  loading: boolean;
  topSearchData: FirmBasic[];
  country?: CountryData | null;
};

export function TopSearchFirmTable(props: TopSearchFirmTableProps) {
  return (
    <TopSearchTable
      title={
        <TopSearchTitle
          base={getLang(`topSearch`, `titleFirm`)}
          country={props.country ?? null}
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
              {props?.topSearchData?.map((item: FirmBasic, key: number) => (
                <TopSearchRow
                  key={key}
                  name={<FirmLink {...item} id={item.uid} showCountry />}
                  value={item.idNumber}
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
