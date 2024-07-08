import * as React from 'react';
import getLang from '../../../lang/Lang';
import Skeleton from '@material-ui/lab/Skeleton';
import { TopSearchTitle } from './TopSearchHelper';
import { PersonBasic } from '../../person/PersonBasicProps';
import { TopSearchRow, TopSearchTable } from './TopSearchTable';
import { PersonLink } from '../../../components/link/PersonLink';
import { TableBody, TableCell, TableRow } from '@material-ui/core';
import { DataPlaceholder } from '../../../components/page/PageHelper';
import { CountryData } from '../../../components/country/CountryProps';

type TopSearchPersonTableProps = {
  loading: boolean;
  topSearchData?: PersonBasic[];
  country?: CountryData | null;
};

export function TopSearchPersonTable(props: TopSearchPersonTableProps) {
  return (
    <TopSearchTable
      title={
        <TopSearchTitle
          base={getLang(`topSearch`, `titlePerson`)}
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
              {props?.topSearchData?.map((item: PersonBasic, key: number) => (
                <TopSearchRow
                  key={key}
                  name={<PersonLink {...item} id={item.id} showCountry />}
                  value={item.name}
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
